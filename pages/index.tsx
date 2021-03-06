//  All imports

import { Fragment, useState } from "react";
import { Backdrop } from "../Component/utils//popup/Backdrop";
import Head from "next/head";
import CategoryItem from "../Component/Category.js/Category";
import RecentSearch from "../Component/Mosaic/RecentSearch";
import Search from "../Component/SearchBar/SearchForm";
import Popup from "../Component/utils/popup/Popup";
import Slice from "../Component/utils/Slice";
import { NextPage } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Categories, Category } from "../types";

// query

const url = "https://gudof-backoffice-api.herokuapp.com/graphql";
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export const getStaticProps = async () => {
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
  const categories: Categories = data?.pages?.edges.map(({ node }) => {
    return {
      id: node?._id,
      title: node?.title,
      desc: node?.desc,
      url: node?.url,
      type: node?.type,
    };
  });
  return {
    props: {
      categories: categories,
    },
  };
};

// main page component

const Home: NextPage = (props: Categories) => {
  //  states and methods

  const items: Category[] = props?.categories || [];
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const setPopUp = () => {
    setIsOpen(true);
  };
  const cancelPopUp = () => {
    setIsOpen(false);
    setIsSearchOpen(false);
  };
  const setRecent = () => {
    setIsSearchOpen(true);
  };
  const cancelRecent = () => {
    setIsSearchOpen(false);
  };

  // function return

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
        <div className="flex  flex-col items-center justify-center  w-full ">
          <h1 className="text-3xl text-blue-900 font-bold	 my-8	 lg:text-6xl">
            Gud<span className="text-sky-400 font-bold">of</span>
          </h1>

          {/* Search form */}
          <Search setRecent={setRecent}></Search>

          {/* recentSearch form */}
          {isSearchOpen && (
            <RecentSearch cancelRecent={cancelRecent}></RecentSearch>
          )}

          {/* backdrop */}
          {isSearchOpen && <Backdrop cancelPopUp={cancelPopUp}></Backdrop>}

          {/* Advanced search */}
          <Slice
            text="Select the product, model, manufactory and more"
            setPopUp={setPopUp}
          ></Slice>
        </div>

        {/* categories */}
        <CategoryItem items={items}></CategoryItem>

        {isOpen && <Popup cancelPopUp={cancelPopUp}></Popup>}
        {isOpen && <Backdrop cancelPopUp={cancelPopUp}></Backdrop>}
      </div>
    </Fragment>
  );
};
export default Home;
