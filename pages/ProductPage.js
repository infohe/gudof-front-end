import { Fragment, useState, React } from "react";
import Filters from "../Component/Mosaic/Filters";
import ShopCards07 from "../Component/Mosaic/ShopCards07";
import Popup from "../Component/utils/popup/Popup";
import Pagination from "../Component/utils/pagination";
import { Backdrop } from "../Component/utils/popup/Backdrop";
import Filterpop from "../Component/utils/popup/Filterpop";

const Products = (props) => {
  let products = [];
  if (props.allDetails.products) {
    products = props.allDetails.products;
  } else {
    <p>Loading</p>;
  }

  const allDetails = props.allDetails;

  const pageType = props.pageType;

  const [IsOpen, setIsOpen] = useState(false);
  const SetPopUp = () => {
    setIsOpen(true);
  };
  const CancelPopUp = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <div className="">
        <div className="flex flex-col bg-slate-100	 relative  ">
          <div className="p-2 ">
            <Filters SetPopUp={SetPopUp}></Filters>
            <div className="text-sm text-gray-500 italic mb-4">
              67.975 Items
            </div>
          </div>
          <div>
            {products.map((product, i) => (
              <ShopCards07
                key={i}
                allDetails={allDetails}
                products={products}
                Title={product.title}
                productUrl={product.productUrl}
                pageType={pageType}
              ></ShopCards07>
            ))}
          </div>
          {/* <PaginationClassic></PaginationClassic> */}
          <Pagination paginateProducts={props.paginateProduct}></Pagination>
          {IsOpen && (
            <Popup CancelPopUp={CancelPopUp}>
              <Filterpop></Filterpop>
            </Popup>
          )}
          {IsOpen && <Backdrop CancelPopUp={CancelPopUp}></Backdrop>}
        </div>
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
