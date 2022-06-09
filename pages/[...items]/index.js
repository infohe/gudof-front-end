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
  let AllParems = context.params.items;
  let Endpoint = "";

  if (AllParems.length == 1) {
    Endpoint = context.params.items[0];
  } else {
    Endpoint = context.params.items.join("/");
  }
  Endpoint = `/${Endpoint}`;

  // global variables

  let PageType = "";
  let Output = {};
  let ProductReady = {};

  //avoid favicon and fetch data

  if (Endpoint != "favicon.ico") {
    console.log(Endpoint);
    const query = gql`
      query Page {
        pages(filter: { parentUrl: "${Endpoint}" }) {
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
    const { data } = await client.query({ query });
    const page = (await client.query({ query: query })).data.pages.edges[0]
      .node;
    PageType = page.type;

    //fetch pagedetails by category or product

    if (PageType === "Category") {
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
    } else if (PageType === "Product") {
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
  }

  //  get parent Category details /

  const query = gql`
   query Page {
     category (filter: { url: "${Endpoint}" }) {  
       _id
       desc
       title
       url
      }
   }
 `;
  const { data } = await client.query({ query });

  return {
    props: {
      Output: Output,
      data: data,
      PageType: PageType,
      ProductReady: ProductReady,
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
  const Categories = props.Output;
  const ProductReady = props.ProductReady;
  const data = props.data;

  return (
    <React.Fragment>
      <Title></Title>
      {props.PageType === "Category" ? (
        <CategoryPage Categories={Categories} ParentData={data}></CategoryPage>
      ) : (
        // <h1>will show</h1>
        <ProductPage
          ProductReady={ProductReady}
          Categories={Categories}
        ></ProductPage>
      )}
    </React.Fragment>
  );
};

export default Index;
