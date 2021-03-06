// all imports

import * as React from "react";
import Title from "../../Component/utils/Title";
import BbPromise from "bluebird";
import { uniqBy } from "lodash";
import CategoryPage from "../CategoryPage";
import ProductPage from "../ProductPage";
import { getArguments_g } from "../../back_end/aggregate";

import {
  MainPage,
  Edge,
  SubCategories,
  // productsList,
} from "../../types";

//  Data fetching

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const url = "https://gudof-backoffice-api-new.herokuapp.com/graphql";
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

// get static props

// get static props
export async function getStaticProps(context) {
  const allParams: string | Array<string> = context.params.items;

  // global variables
  let endPoint: string = "";
  let output = {};
  let productOutput = {};

  if (allParams.length === 1) {
    endPoint = context.params.items[0];
  } else {
    endPoint = context.params.items.join("/");
  }
  endPoint = `/${endPoint}`;

  const query = gql`
query Page {
  pages(filter: { url: "${endPoint}" }) {
    edges {
      node {
        _id
        title
        type
        desc
        url
        parentUrl
      }
    }
  }
}
`;
  const page: MainPage = (await client.query({ query: query }))?.data?.pages
    ?.edges[0]?.node;
  const slugType: string = page?.type;
  console.log(slugType);

  if (slugType === "Category") {
    const categoryName: string = page?.title;
    const categoryDesc: string = page?.desc;
    const pageUrl: string = page?.url;
    const query = gql`
    query subCategoriesAndProducts {
      pages(filter: { parentUrl: "${endPoint}" },first:5) {
        edges {
          node {
            _id
            title
            type
            desc
            url
          }
        }
      }
    }
  `;

    const { data } = await client.query({ query });

    const items: Edge[] = data?.pages?.edges;
    const subCategoryNodes = items.filter(
      ({ node }) => node?.type === "Category"
    );
    const productNodes = items.filter(({ node }) => node?.type === "Product");
    const subCategories: SubCategories[] = subCategoryNodes.map(({ node }) => {
      return {
        id: node?._id,
        title: node?.title,
        desc: node?.desc,
        url: node?.url,
      };
    });

    const products: Array<any> = productNodes.map(({ node }) => {
      return {
        id: node?._id,
        title: node?.title,
        desc: node?.desc,
        url: node?.url,
      };
    });

    output = {
      category: categoryName,
      pageUrl,
      categoryDesc,
      subCategories,
      products,
      slugType,
      parentUrl: "",
    };
  } else if (slugType == "Product") {
    const productParentUrl = page.parentUrl;
    const productQuery = gql`
      query product {
        product (filter: { url: "${endPoint}" }) {
          _id

          productDetails
          url
          title
          type
          desc
        }
      }
    `;

    const relatedProductsQuery = gql`
      query products {
        products (filter: { parentUrl: "${productParentUrl}" }) {
            pageInfo{
                hasNextPage
                hasPreviousPage
                endCursor
              }
          edges {
            node {
              _id
              desc
              title
              type
              url
            }
          }
        }
      }
    `;
    const [productData, productsData] = await BbPromise.map(
      [productQuery, relatedProductsQuery],
      async (query) => {
        return client.query({ query });
      }
    );
    const products = productsData?.data?.products?.edges.map(({ node }) => {
      return {
        id: node?._id,
        title: node?.title,
        desc: node?.desc,
        type: node?.type,
        productUrl: node?.url,
      };
    });

    const { product } = productData?.data;
    const productDetails = {
      ...product?.productDetails[0],
      title: product?.title,
      desc: product?.desc,
      productUrl: product?.url,
    };
    const query = gql`
      query {
        pageConnection(
          sort: [url__asc]
          first: 9999
          query: {
            bool: {
              filter: [
                { term: { type: { value: "Product" } } }
                { term: { parentUrl: { value: "/industrial-control/plc" } } }
              ]
            }
          }
          aggs: {
            key: "facets"
            value: {
              nested: { path: "string_facets" }
              aggs: {
                key: "name"
                value: {
                  terms: { field: string_facets__facet_name }
                  aggs: {
                    key: "values"
                    value: { terms: { field: string_facets__facet_value } }
                  }
                }
              }
            }
          }
        ) {
          edges {
            node {
              _source {
                title
                url
                type
                parentUrl
                description
              }
            }
          }
          aggregations
          count
          pageInfo {
            startCursor
            endCursor
          }
        }
      }
    `;
    const filterData = (await client.query({ query: query }))?.data
      ?.pageConnection?.aggregations?.facets?.name?.buckets;

    productOutput = {
      products: uniqBy(products, "title"),
      productDetails,
      category: "",
      subCategories: [],
      slugType,
      filterData,
      parentUrl: productParentUrl,
    };

    const filterFunction = async () => {
      const filterResults = await getArguments_g(
        ["make", "Omron"],
        ["roHs", "Compliant"]
      );

      const createQuery = `      query {
        pageConnection(
          sort: [url__asc]
          first: 9999
          query: {
            bool: {
              filter: [
                { term: { type: { value: "Product" } } }
                { term: { parentUrl: { value: "/industrial-control/plc" } } }
              ]
            }
          },
          ${filterResults}
        ) {
          edges {
            node {
              _source {
                title
                url
                type
                parentUrl
                description
              }
            }
          }
          aggregations
          count
          pageInfo {
            startCursor
            endCursor
          }
        }
      }`;
      console.log(createQuery);

      // const query = gql`
      //   query {
      //     pageConnection(
      //       sort: [url__asc]
      //       first: 9999
      //       query: {
      //         bool: {
      //           filter: [
      //             { term: { type: { value: "Product" } } }
      //             { term: { parentUrl: { value: "/industrial-control/plc" } } }
      //           ]
      //         }
      //       }
      //       aggs: [
      //         {
      //           key: "aggs_all_filters"
      //           value: {
      //             filter: {
      //               bool: {
      //                 filter: [
      //                   {
      //                     nested: {
      //                       path: "string_facets"
      //                       query: {
      //                         bool: {
      //                           filter: [
      //                             {
      //                               term: {
      //                                 string_facets__facet_name: {
      //                                   value: "make"
      //                                 }
      //                               }
      //                             }
      //                             {
      //                               term: {
      //                                 string_facets__facet_value: {
      //                                   value: "Omron"
      //                                 }
      //                               }
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     }
      //                   }
      //                   {
      //                     nested: {
      //                       path: "string_facets"
      //                       query: {
      //                         bool: {
      //                           filter: [
      //                             {
      //                               term: {
      //                                 string_facets__facet_name: {
      //                                   value: "roHs"
      //                                 }
      //                               }
      //                             }
      //                             {
      //                               term: {
      //                                 string_facets__facet_value: {
      //                                   value: "Compliant"
      //                                 }
      //                               }
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //             aggs: {
      //               key: "facets"
      //               value: {
      //                 nested: { path: "string_facets" }
      //                 aggs: {
      //                   key: "names"
      //                   value: {
      //                     terms: { field: string_facets__facet_name }
      //                     aggs: {
      //                       key: "values"
      //                       value: {
      //                         terms: { field: string_facets__facet_value }
      //                       }
      //                     }
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         }
      //         {
      //           key: "aggs_make"
      //           value: {
      //             filter: {
      //               bool: {
      //                 filter: [
      //                   {
      //                     nested: {
      //                       path: "string_facets"
      //                       query: {
      //                         bool: {
      //                           filter: [
      //                             {
      //                               term: {
      //                                 string_facets__facet_name: {
      //                                   value: "roHs"
      //                                 }
      //                               }
      //                             }
      //                             {
      //                               term: {
      //                                 string_facets__facet_value: {
      //                                   value: "Compliant"
      //                                 }
      //                               }
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //             aggs: {
      //               key: "facets"
      //               value: {
      //                 nested: { path: "string_facets" }
      //                 aggs: {
      //                   key: "aggs_special"
      //                   value: {
      //                     filter: {
      //                       term: {
      //                         string_facets__facet_name: { value: "make" }
      //                       }
      //                     }
      //                     aggs: {
      //                       key: "names"
      //                       value: {
      //                         terms: { field: string_facets__facet_name }
      //                         aggs: {
      //                           key: "values"
      //                           value: {
      //                             terms: { field: string_facets__facet_value }
      //                           }
      //                         }
      //                       }
      //                     }
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         }
      //         {
      //           key: "aggs_rohs"
      //           value: {
      //             filter: {
      //               bool: {
      //                 filter: [
      //                   {
      //                     nested: {
      //                       path: "string_facets"
      //                       query: {
      //                         bool: {
      //                           filter: [
      //                             {
      //                               term: {
      //                                 string_facets__facet_name: {
      //                                   value: "make"
      //                                 }
      //                               }
      //                             }
      //                             {
      //                               term: {
      //                                 string_facets__facet_value: {
      //                                   value: "Omron"
      //                                 }
      //                               }
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //             aggs: {
      //               key: "facets"
      //               value: {
      //                 nested: { path: "string_facets" }
      //                 aggs: {
      //                   key: "aggs_special"
      //                   value: {
      //                     filter: {
      //                       term: {
      //                         string_facets__facet_name: { value: "roHs" }
      //                       }
      //                     }
      //                     aggs: {
      //                       key: "names"
      //                       value: {
      //                         terms: { field: string_facets__facet_name }
      //                         aggs: {
      //                           key: "values"
      //                           value: {
      //                             terms: { field: string_facets__facet_value }
      //                           }
      //                         }
      //                       }
      //                     }
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         }
      //       ]
      //     ) {
      //       edges {
      //         node {
      //           _source {
      //             title
      //             url
      //             type
      //             parentUrl
      //             description
      //           }
      //         }
      //       }
      //       aggregations
      //       count
      //       pageInfo {
      //         startCursor
      //         endCursor
      //       }
      //     }
      //   }
      // `;
      // const query = gql``;
      // const filteredValues = (await client.query({ query: query }))?.data;
    };

    filterFunction();
  }
  return {
    props: {
      output,
      productOutput,
      slugType,
    },
  };
}

// get static paths

export async function getStaticPaths() {
  return {
    paths: [
      // { params: { ... } }
    ],
    fallback: "blocking", // false or 'blocking'
  };
}

const index = (props) => {
  const output = props?.output;
  const pageType = props?.slugType;
  const categories = props?.output?.subCategories;
  const pageUrl = props?.output?.pageUrl;
  const categoryDesc = props?.output?.categoryDesc;
  const categoryTitle = props?.output?.category;

  //productPage details
  const productOutput = props?.productOutput;
  const productsList = props?.output?.products;
  const parentUrl = props?.productOutput?.parentUrl;
  const filterData = props?.productOutput?.filterData;
  if (pageType === "Category") {
    return (
      <div>
        <Title></Title>
        <CategoryPage
          output={output?.products}
          categories={categories}
          pageType={pageType}
          pageUrl={pageUrl}
          categoryDesc={categoryDesc}
          categoryTitle={categoryTitle}
        ></CategoryPage>
      </div>
    );
  } else if (pageType === "Product") {
    return (
      <div>
        <Title></Title>
        <ProductPage
          productOutput={productOutput}
          pageType={pageType}
          filterData={filterData}
          parentUrl={parentUrl}
        ></ProductPage>
      </div>
    );
  } else {
    <div>
      <p>loading</p>
    </div>;
  }
};

export default index;
