import * as React from "react";
import Title from "../../Component/utils/Title";
import BbPromise from "bluebird";
import { uniqBy } from "lodash";

import CategoryPage from "../CategoryPage";

import ProductPage from "../ProductPage";

//*** Data fetching *****/
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const url = "https://gudof-backoffice-api.herokuapp.com/graphql";

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

// get static props
export async function getStaticProps(context) {
  const allParams = context.params.items;

  // global variables
  let endPoint = "";
  let output = {};
  let allDetails = {};

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
  const page = (await client.query({ query: query })).data.pages.edges[0].node;
  const slugType = page.type;

  if (slugType == "Product") {
    const productParentUrl = page.parentUrl;
    const productQuery = gql`
      query product {
        product (filter: { url: "${endPoint}" }) {
          _id

          productDetails
          url
          title
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
    console.log(productsData);
    console.log(relatedProductsQuery);
    console.log(productData);

    const products = productsData.data.products.edges.map(({ node }) => {
      return {
        id: node._id,
        title: node.title,
        desc: node.desc,
        productUrl: node.url,
      };
    });
    console.log(products);

    const { product } = productData.data;
    console.log(product);
    const productDetails = {
      ...product.productDetails[0],
      title: product.title,
      desc: product.desc,
      productUrl: product.url,
    };
    allDetails = {
      //   relatedProductsQuery,
      products: uniqBy(products, "title"),
      productDetails: renderObj(productDetails),
      category: "",
      subCategories: [],
      slugType,
      parentUrl: productParentUrl,
    };
  } else if (slugType === "Category") {
    const categoryName = page.title;
    const categoryDesc = page.desc;
    const pageUrl = page.url;
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
    // const { loading, data, fetchMore } = useQuery(query, {
    //     variables: {
    //     },
    //   });

    const { data } = await client.query({ query });
    const items = data.pages.edges;
    const subCategoryNodes = items.filter(
      ({ node }) => node.type === "Category"
    );
    console.log(subCategoryNodes);
    const productNodes = items.filter(({ node }) => node.type === "Product");
    const subCategories = subCategoryNodes.map(({ node }) => {
      return {
        id: node._id,
        title: node.title,
        desc: node.desc,
        url: node.url,
      };
    });

    const products = productNodes.map(({ node }) => {
      return {
        id: node._id,
        title: node.title,
        desc: node.desc,
        url: node.url,
      };
    });

    output = {
      category: categoryName,
      pageUrl,
      categoryDesc,
      subCategories,
      products: uniqBy(products, "title"),
      productDetails: [],
      slugType,
      parentUrl: "",
    };
  }

  return {
    props: {
      slugType,
      output,

      allDetails,
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

const renderObj = (productDetails) => {
  for (const key in productDetails) {
    const val = productDetails[key];
    if (typeof val === "object" && val) {
      productDetails[key] = `${val.value} ${val.unit}`;
    }
    if (!val) {
      delete productDetails[key];
    }
  }
  return productDetails;
};
// const paginateProduct=()=>{
//     const { loading, data, fetchMore } = useQuery(, {
//         variables: {
//         },
//       });

// }

const index = (props) => {
  const allDetails = props.allDetails;
  const output = props.output;
  const categories = props.output.subCategories;
  const pageUrl = props.output.pageUrl;
  const categoryDesc = props.output.categoryDesc;
  const categoryTitle = props.output.category;
  const pageType = props.output.slugType;

  // const paginateProduct=()=>{
  //   const { loading, data, fetchMore } = useQuery(, {
  //     variables: {
  //       offset: 0,
  //       limit: 10
  //     },
  //   });

  // }

  return (
    <React.Fragment>
      <Title></Title>
      {pageType === "Category" ? (
        <CategoryPage
          output={output.products}
          categories={categories}
          pageType={pageType}
          pageUrl={pageUrl}
          categoryDesc={categoryDesc}
          categoryTitle={categoryTitle}
        ></CategoryPage>
      ) : (
        <ProductPage
          pageType={pageType}
          allDetails={allDetails}
          output={output.products}
        ></ProductPage>
      )}
    </React.Fragment>
  );
};

export default index;
