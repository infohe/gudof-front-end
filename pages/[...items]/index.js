import * as React from "react";
import Link from "next/link";
// import Circle from "../../../Component/utils/Circle";
import TeamTabsCard from "../../Component/Mosaic/TeamTabsCard";

import Title from "../../Component/utils/Title";

/////////////////////////////////
//test data
//////////////////////////////
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const url = "https://gudof-backoffice-api.herokuapp.com/graphql";

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});
export async function getStaticProps(context) {
  console.log(context.params.items.length);
  let combo = context.params.items;
  let EndPoint = "";
  if (combo.length == 1) {
    EndPoint = context.params.items[0];
  } else {
    EndPoint = context.params.items.join("/");
  }

  let SubCategories = {};
  if (EndPoint != "favicon.ico") {
    console.log(EndPoint);
    const query = gql`
      query Page {
        pages(filter: { parentUrl: "/${EndPoint}" }) {
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

    SubCategories = data.pages.edges.map(({ node }) => {
      return {
        id: node._id,
        title: node.title,
        desc: node.desc,
        url: node.url,
        type: node.type,
        parentUrl: node.parentUrl,
      };
    });
  }
  //////////////
  const query = gql`
    query Page {
      category (filter: { url: "/${EndPoint}" }) {
          
        _id
        desc
        title
        url
      

  }

    }
  `;
  const { data } = await client.query({ query });

  // const EndPoint = context.params.items[0];
  return {
    props: {
      SubCategories: SubCategories,
      data: data,
    },

    revalidate: 10, // In seconds
  };
}

////////////////////////
export async function getStaticPaths() {
  return {
    paths: [
      // {params:{ }}
    ],
    fallback: "blocking", // See the "fallback" section below
  };
}
///////////////

const Index = (props) => {
  const Categories = props.SubCategories;
  const data = props.data;
  console.log(data.category);

  return (
    <React.Fragment>
      <Title></Title>
      <div className="flex flex-col  p-5 h-4/5	">
        <p className="text-blue-900 text-lg mb-1">
          <Link href="/">Categories</Link>/{data.category.title} (1222)
        </p>
        <p className="mb-1 text-sm">{data.category.desc}</p>
        <h2 className="text-xl		 text-blue-900  font-semibold mt-1">
          Search In &nbsp;
          <span className="text-sky-400 font-semibold">
            {data.category.url}
          </span>
        </h2>
        <div className="grid grid-cols-2 grid-rows-4 gap-1 grid-flow-row mt-10">
          {Categories.map((Category, i) => (
            <TeamTabsCard
              key={i}
              title={Category.title}
              url={Category.url}
              Categories={Categories}
            ></TeamTabsCard>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
