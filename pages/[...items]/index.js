import { Fragment, useState, React } from "react";

import Title from "../../Component/utils/Title";
import Sliders from "../../Component/utils/Sliders";
import Filters from "../../Component/Mosaic/Filters";
import ShopCards07 from "../../Component/Mosaic/ShopCards07";
import Popup from "../../Component/utils/popup/Popup";
import Pagination from "../../Component/utils/pagination";
// import PaginationClassic from "../../Component/Mosaic/PaginationClassic";
import { Backdrop } from "../../Component/utils/popup/Backdrop";
import Filterpop from "../../Component/utils/popup/Filterpop";

/////////////////////////////////
//test data
//////////////////////////////

///////////////

import BbPromise from "bluebird";
import { uniqBy } from "lodash";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import SliderBrands from "../../Component/utils/SliderBrands";

const url = "https://gudof-backoffice-api.herokuapp.com/graphql";

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export async function getStaticProps(context) {
  // const queryItems = context.params.items;
  const queryItems = "/absolute-level-gauges/rosemount-2051hta/";
  ///////to clear
  // let pageUrl = "";
  // if (typeof queryItems[0] === "string") {
  //   pageUrl = queryItems[0];
  // } else {
  //   pageUrl = `/${queryItems[0].join("/")}/`;
  // }

  const pageQuery = gql`
      query Page {
        pages (filter: { url: "${queryItems}" }) {
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
  const page = (await client.query({ query: pageQuery })).data.pages.edges[0];
  const slugType = page.type;
  // if (slugType == "Product") {
  const productParentUrl = page.parentUrl;
  const productQuery = gql`
        query product {
          product (filter: { url: "${queryItems}" }) {
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

  // const products = productsData.data.products.edges.map(({ node }) => {
  //   return {
  //     id: node._id,
  //     title: node.title,
  //     desc: node.desc,
  //     productUrl: node.url,
  //   };
  // });

  const { product } = productData.data;
  const productDetails = {
    ...product.productDetails[0],
    title: product.title,
    desc: product.desc,
    productUrl: product.url,
  };
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
  return {
    props: {
      // // productData: productData,
      // productDetails: productDetails,
      // // productsData: productsData,

      // products: uniqBy(products, "title"),
      productDetails: renderObj(productDetails),
      // category: "",
      // subCategories: [],
      // // slugType,
      // parentUrl: productParentUrl,
    },
    revalidate: 600,
  };

  // }
  // else if (slugType === "Category") {
  //   const categoryName = page.title;
  //   const query = gql`
  //   query subCategoriesAndProducts {
  //     pages(filter: { parentUrl: "${pageUrl}" }) {
  //       edges {
  //         node {
  //           _id
  //           title
  //           type
  //           desc
  //           url
  //         }
  //       }
  //     }
  //   }
  // `;

  //   const { data } = await client.query({ query });
  //   const items = data.pages.edges;
  //   const subCategoryNodes = items.filter(
  //     ({ node }) => node.type === "Category"
  //   );
  //   const productNodes = items.filter(({ node }) => node.type === "Product");
  //   const subCategories = subCategoryNodes.map(({ node }) => {
  //     return {
  //       id: node._id,
  //       title: node.title,
  //       desc: node.desc,
  //       url: node.url,
  //     };
  //   });

  //   const products = productNodes.map(({ node }) => {
  //     return {
  //       id: node._id,
  //       title: node.title,
  //       desc: node.desc,
  //       url: node.url,
  //     };
  //   });

  //   return {
  //     props: {
  //       category: categoryName,
  //       subCategories,
  //       products: uniqBy(products, "title"),
  //       productDetails: [],
  //       slugType,
  //       parentUrl: "",
  //     },
  //   };
  // }
}

///////////////////

/////////////////////////////////
//test data
//////////////////////////////
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", // false or 'blocking'
  };
}
const Products = (props) => {
  const productDetails = props.productDetails;

  console.log(productDetails);
  //dummy data
  const Categories = [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
  ];

  const [IsOpen, setIsOpen] = useState(false);

  const SetPopUp = () => {
    setIsOpen(true);
  };
  const CancelPopUp = () => {
    setIsOpen(false);
  };
  const Manufactors = ["Manufactors 1", "Manufactors 2", "Manufactors 3"];

  return (
    <Fragment>
      <Title></Title>
      <div className="">
        <div className="flex flex-col bg-slate-100	 relative  ">
          <div className="p-2 ">
            <Filters SetPopUp={SetPopUp}></Filters>
            <div className="text-sm text-gray-500 italic mb-4">
              67.975 Items
            </div>
          </div>

          <div>
            {Categories.map((Category, i) => (
              <ShopCards07
                key={i}
                productDetails={productDetails}
              ></ShopCards07>
            ))}
          </div>
          {/* <PaginationClassic></PaginationClassic> */}
          <Pagination></Pagination>

          {IsOpen && (
            <Popup CancelPopUp={CancelPopUp}>
              <Filterpop></Filterpop>
            </Popup>
          )}
          {IsOpen && <Backdrop CancelPopUp={CancelPopUp}></Backdrop>}
        </div>

        <div>
          <h2 className="text-xl		 text-blue-900  font-semibold my-4 ml-3 ">
            Our <span className="text-sky-400 font-semibold">manufactor</span>
          </h2>
          {/* <Sliders Manufactors={Manufactors}></Sliders> */}
          <SliderBrands Manufactors={Manufactors}></SliderBrands>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
