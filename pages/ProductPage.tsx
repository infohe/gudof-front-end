//  all imports

import React from "react";
import { Fragment, useState } from "react";
import Filters from "../Component/Mosaic/Filters";
import ShopCards07 from "../Component/Mosaic/ShopCards07";
import Popup from "../Component/utils/popup/Popup";
import Pagination from "../Component/utils/pagination";
import { Backdrop } from "../Component/utils/popup/Backdrop";
import FilterPop from "../Component/utils/popup/FilterPop";

//  page function

const Products = (props) => {
  // states and methods

  let products = [];
  if (props.allDetails.products) {
    products = props.allDetails.products;
  } else {
    <p>Loading</p>;
  }

  const allDetails = props.allDetails;
  const pageType: string = props.pageType;

  const [isOpen, setIsOpen] = useState(false);
  const setPopUp = () => {
    setIsOpen(true);
  };
  const cancelPopUp = () => {
    setIsOpen(false);
  };

  // function return

  return (
    <Fragment>
      <div className="">
        <div className="flex flex-col bg-slate-100	 relative  ">
          <div className="p-2 ">
            <Filters setPopUp={setPopUp}></Filters>
            <div className="text-sm text-gray-500 italic mb-4">
              67.975 Items
            </div>
          </div>

          {/* {show shop cards} */}

          <div>
            {products.map((product, i) => (
              <ShopCards07
                key={i}
                allDetails={allDetails}
                products={products}
                title={product.title}
                productUrl={product.productUrl}
                pageType={pageType}
              ></ShopCards07>
            ))}
          </div>

          {/* {pagination} */}

          {/* <PaginationClassic></PaginationClassic> */}
          <Pagination paginateProducts={props.paginateProduct}></Pagination>
          {isOpen && (
            <Popup cancelPopUp={cancelPopUp}>
              <FilterPop></FilterPop>
            </Popup>
          )}
          {isOpen && <Backdrop cancelPopUp={cancelPopUp}></Backdrop>}
        </div>

        {/* {sliders } */}

        <div>
          <h2 className="text-xl		 text-blue-900  font-semibold my-4 ml-3 ">
            Our <span className="text-sky-400 font-semibold">manufacture</span>
          </h2>
          {/* <Sliders></Sliders> */}
          {/* <SliderBrands></SliderBrands> */}
        </div>
      </div>
    </Fragment>
  );
};
export default Products;
