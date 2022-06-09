import * as React from "react";
import Title from "../../Component/utils/Title";
import CategoryPage from "../CategoryPage";
import ProductPage from "../ProductPage";

//*** Data fetching *****/
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const url = "https://gudof-backoffice-api.herokuapp.com/graphql";

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

//  fetch data

export async function getStaticProps(context) {
  const allParems = context.params.items;

  // global variables
  let endPoint = "";
  let pageType = "";
  let Output = {};

  if (allParems.length === 1) {
    endPoint = context.params.items[0];
  } else {
    endPoint = context.params.items.join("/");
  }
  endPoint = `/${endPoint}`;

  //avoid favicon and fetch data

  if (endPoint != "favicon.ico") {
    const query = gql`
      query Page {
        pages(filter: { url: "${endPoint}" }) {
          edges {
            node {
              _id
              type
              url  
              parentUrl
              desc
            }
          }
        }
      }
    `;
    const parentData = await client.query({ query });

    const page = (await client.query({ query: query })).data.pages.edges[0]
      .node;
    pageType = page.type;

    //fetch pagedetails by category or product

    const pageDetails = gql`
      query Page {
        pages(filter: { parentUrl: "${endPoint}" }) {
          edges {
            node {
              _id
              type
              url  
              parentUrl
              desc
            }
          }
        }
      }
    `;
    const { data } = await client.query({ query: pageDetails });

    Output = data.pages.edges.map(({ node }) => {
      return {
        id: node._id,
        title: node.title,
        desc: node.desc,
        url: node.url,
        type: node.type,
        parentUrl: node.parentUrl,
      };
    });

    //      get product specific details
  }

  return {
    props: {
      pageType: pageType,
      Output: Output,
      parentData: parentData,
    },

    // revalidate: 10, // In seconds
  };
}

//   Main function

export async function getStaticPaths() {
  return {
    paths: [
      // {params:{ }}
    ],
    fallback: "blocking", // See the "fallback" section below
  };
}

//page function starting

const Index = (props) => {
  console.log(props.PageType);
  const Categories = props.Output;
  // const ProductReady = props.ProductReady;
  const data = props.parentData;

  return (
    <React.Fragment>
      <Title></Title>
      {props.PageType === "Category" ? (
        <CategoryPage Categories={Categories} ParentData={data}></CategoryPage>
      ) : (
        // <h1>will show</h1>
        <ProductPage Categories={Categories}></ProductPage>
      )}
    </React.Fragment>
  );
};

export default Index;
