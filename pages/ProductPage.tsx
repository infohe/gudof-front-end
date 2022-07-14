import { Fragment, useState } from "react";
import Filters from "../Component/Mosaic/Filters";
import ShopCards07 from "../Component/Mosaic/ShopCards07";
import Popup from "../Component/utils/popup/Popup";
import Pagination from "../Component/utils/pagination";
import { Backdrop } from "../Component/utils/popup/Backdrop";
import { resultDataFrom } from "../back_end/filteredItems";
import FilterIcon from "../Component/utils/filterIcon";
import AllFilters from "../Component/utils/AllFilters";

const ProductPage = (props) => {
  const products = props?.productOutput?.products || [];
  const pageType = props?.pageType;
  console.log(products);

  const productOutput = props?.productOutput;

  const [isOpen, setIsOpen] = useState(false);
  const [isAllFiltersOn, setIsAllFiltersOn] = useState(false);

  const setAllFilter = () => {
    setIsAllFiltersOn(true);
  };
  const cancelAllFilters = () => {
    setIsAllFiltersOn(false);
  };

  const setPopUp = () => {
    setIsOpen(true);
  };
  const cancelPopUp = () => {
    setIsOpen(false);
    setIsAllFiltersOn(false);
  };

  // values will get from props product type and parent url
  // const filterValues = getFilterValues("Product", "/industrial-control/plc");
  // console.log(filterValues);
  const topFilterValues = resultDataFrom.map((item) => {
    return item.key;
  });
  const innerFilterValues = resultDataFrom.map((item) => {
    return item;
  });
  let currentValue = "";
  if (typeof window !== "undefined") {
    currentValue = localStorage.getItem("currentValue");
  }
  console.log(currentValue);
  return (
    <Fragment>
      <div className="">
        <div className="flex flex-col bg-slate-100	 relative  ">
          <div className="p-px flex	ml-2	 border-b-2 ">
            <FilterIcon setAllFilter={setAllFilter}></FilterIcon>
            <Filters setPopUp={setPopUp} values={topFilterValues}></Filters>
          </div>
          <div className="text-sm text-gray-500 italic mb-4">67.975 Items</div>
          <div>
            {products.map((product, i) => (
              <ShopCards07
                key={i}
                productOutput={productOutput}
                Title={product?.title}
                productUrl={product?.productUrl}
                pageType={pageType}
              ></ShopCards07>
            ))}
          </div>
          {/* <PaginationClassic></PaginationClassic> */}
          <Pagination paginateProducts={props.paginateProduct}></Pagination>
          {isOpen && <Popup cancelPopUp={cancelPopUp}></Popup>}
          {isAllFiltersOn && (
            <AllFilters
              topFilterValues={topFilterValues}
              innerFilterValues={innerFilterValues}
              cancelAllFilters={cancelAllFilters}
            ></AllFilters>
          )}
          {isAllFiltersOn && <Backdrop cancelPopUp={cancelPopUp}></Backdrop>}
          {isOpen && <Backdrop cancelPopUp={cancelPopUp}></Backdrop>}
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
export default ProductPage;
