// all imports

import * as React from "react";
import Title from "../../Component/utils/Title";
import BbPromise from "bluebird";
import { uniqBy } from "lodash";
import CategoryPage from "../CategoryPage";
import ProductPage from "../ProductPage";
import { GetStaticProps, GetStaticPropsContext } from "next";

import {
  MainPage,
  Edge,
  SubCategories,
  // productsList,
} from "../../types";

//  Data fetching 


import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const url = "http://localhost:3333/graphql";
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

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
  query pageConnection {
    pageConnection(
    sort: [url__keyword__asc],
    first: 2,
    query: {
      term: {
        parentUrl__keyword: {
          value: "${endPoint}"
        }
      }
    }
  ) {
    pageInfo {
      endCursor
      startCursor
    }
    count
    edges {
      node {
        _source {
          
          url
          title
          parentUrl
          type
          desc
          description
          string_facet {
            facet_name
            facet_value
          }
        }
      }
    }
  }
}
  `;
  const { data } = await client.query({ query });
  // const slugType: string = page.type;

  // if (slugType == "Product") {
  //   const productParentUrl = page.parentUrl;
  //   const productQuery = gql`
  //     query product {
  //       product (filter: { url: "${endPoint}" }) {
  //         _id

  //         productDetails
  //         url
  //         title
  //         desc
  //       }
  //     }
  //   `;

  //   const relatedProductsQuery = gql`
  //     query products {
  //       products (filter: { parentUrl: "${productParentUrl}" }) {
  //           pageInfo{
  //               hasNextPage
  //               hasPreviousPage
  //               endCursor
  //             }
  //         edges {
  //           node {
  //             _id
  //             desc
  //             title
  //             url
  //           }
  //         }
  //       }
  //     }
  //   `;
  //   const [productData, productsData] = await BbPromise.map(
  //     [productQuery, relatedProductsQuery],
  //     async (query) => {
  //       return client.query({ query });
  //     }
  //   );
  //   const products = productsData.data.products.edges.map(({ node }) => {
  //     return {
  //       id: node._id,
  //       title: node.title,
  //       desc: node.desc,
  //       productUrl: node.url,
  //     };
  //   });

  //   const { product } = productData.data;
  //   console.log(product);
  //   const productDetails = {
  //     ...product.productDetails[0],
  //     title: product.title,
  //     desc: product.desc,
  //     productUrl: product.url,
  //   };
  //   productOutput = {
  //     products: uniqBy(products, "title"),
  //     productDetails,
  //     category: "",
  //     subCategories: [],
  //     slugType,
  //     parentUrl: productParentUrl,
  //   };
  // } else if (slugType === "Category") {
  //   const categoryName: string = page.title;
  //   const categoryDesc: string = page.desc;
  //   const pageUrl: string = page.url;
  //   const query = gql`
  //     query subCategoriesAndProducts {
  //       pages(filter: { parentUrl: "${endPoint}" },first:5) {
  //         edges {
  //           node {
  //             _id
  //             title
  //             type
  //             desc
  //             url
  //           }
  //         }
  //       }
  //     }
  //   `;

  //   const { data } = await client.query({ query });

  //   const items: Edge[] = data.pages.edges;
  //   const subCategoryNodes = items.filter(
  //     ({ node }) => node.type === "Category"
  //   );
  //   const productNodes = items.filter(({ node }) => node.type === "Product");
  //   const subCategories: SubCategories[] = subCategoryNodes.map(({ node }) => {
  //     return {
  //       id: node._id,
  //       title: node.title,
  //       desc: node.desc,
  //       url: node.url,
  //     };
  //   });

  //   const products: Array<any> = productNodes.map(({ node }) => {
  //     return {
  //       id: node._id,
  //       title: node.title,
  //       desc: node.desc,
  //       url: node.url,
  //     };
  //   });

  //   output = {
  //     category: categoryName,
  //     pageUrl,
  //     categoryDesc,
  //     subCategories,
  //     products,
  //     slugType,
  //     parentUrl: "",
  //   };
  // }

  return {
    props: {
      data,
      // output,
      // productOutput,
      // slugType,
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

const index = (props: any) => {
  console.log(props.data);
  // const allDetails = props.productOutput;
  // const output = props.output;
  // const categories: SubCategories[] = props.output.subCategories;
  // const pageUrl: string = props.output.pageUrl;
  // const categoryDesc = props.output.categoryDesc;
  // const categoryTitle: string = props.output.category;
  // const pageType: string = props.output.slugType;

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
      {/* {pageType === "Category" ? (
        <p>this is categories</p>
      ) : (
        // <CategoryPage
        //   output={output.products}
        //   categories={categories}
        //   pageType={pageType}
        //   pageUrl={pageUrl}
        //   categoryDesc={categoryDesc}
        //   categoryTitle={categoryTitle}
        // ></CategoryPage>
        <p>this is products</p>

        // <ProductPage
        //   pageType={pageType}
        //   allDetails={allDetails}
        //   output={output.products}
        // ></ProductPage>
      )} */}
    </React.Fragment>
  );
};

export default index;
