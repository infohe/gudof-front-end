//********************* */
//    All imports
//********************** */
import { Fragment, useState } from "react";
import { Backdrop } from "../Component/utils/popup/Backdrop";
import Head from "next/head";
import Category from "../Component/Category.js/Category";
import RecentSearch from "../Component/Mosaic/RecentSearch";
import Search from "../Component/Searchform/Search";
import Popup from "../Component/utils/popup/Popup";
import Slice from "../Component/utils/Slice";

//******************* */
//   use gql
//******************  */
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const url = "https://gudof-backoffice-api.herokuapp.com/graphql";

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});
export async function getStaticProps(context) {
  const query = gql`
    query Page {
      pages(filter: { parentUrl: "/" }) {
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

  const categories = data.pages.edges.map(({ node }) => {
    return {
      id: node._id,
      title: node.title,
      desc: node.desc,
      url: node.url,
    };
  });
  return {
    props: {
      categories: categories,
    },
  };
}

//********************* */
//  Home page
//********************** */

export default function Home(props) {
  const Items = props.categories;

  const [IsOpen, setIsOpen] = useState(false);
  const [IsSearchOpen, setIsSearchOpen] = useState(false);

  const SetPopUp = () => {
    setIsOpen(true);
  };
  const CancelPopUp = () => {
    setIsOpen(false);
    setIsSearchOpen(false);
  };
  const SetRecent = () => {
    setIsSearchOpen(true);
  };
  const CancelRecent = () => {
    setIsSearchOpen(false);
  };

  return (
    <Fragment>
      <Head>
        <title>Gudof</title>
        <meta
          name="description"
          content="Find a lot of great tools that allow you to evolve...{add descriptions about gudof]"
        />
      </Head>
      <div className="lg:m-20 ">
        <div
          className="flex  flex-col items-center justify-center  w-full "
          // style={{ height: "0vh" }}
        >
          <h1 className="text-3xl text-blue-900 font-bold	 my-8	 lg:text-6xl					">
            Gud<span className="text-sky-400 font-bold">of</span>
          </h1>
          {/* Search form */}
          <Search SetRecent={SetRecent}></Search>
          {IsSearchOpen && (
            <RecentSearch CancelRecent={CancelRecent}></RecentSearch>
          )}
          {IsSearchOpen && <Backdrop CancelPopUp={CancelPopUp}></Backdrop>}
          <Slice
            text="Select the product, model, manufactor and more"
            SetPopUp={SetPopUp}
          ></Slice>
        </div>
        <Category Items={Items}></Category>
        {IsOpen && <Popup CancelPopUp={CancelPopUp}></Popup>}
        {IsOpen && <Backdrop CancelPopUp={CancelPopUp}></Backdrop>}
      </div>
    </Fragment>
  );
}
