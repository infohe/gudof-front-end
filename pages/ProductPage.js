import { Fragment, useState, React } from "react";
import Title from "../Component/utils/Title";
import Sliders from "../Component/utils/Sliders";
import Filters from "../Component/Mosaic/Filters";
import ShopCards07 from "../Component/Mosaic/ShopCards07";
import Popup from "../Component/utils/popup/Popup";
import Pagination from "../Component/utils/pagination";
// import PaginationClassic from "../../Component/Mosaic/PaginationClassic";
import { Backdrop } from "../Component/utils/popup/Backdrop";
import Filterpop from "../Component/utils/popup/Filterpop";

const Products = (props) => {
  const ProductReady = props.ProductReady;
  const Categories = props.Categories;

  const [IsOpen, setIsOpen] = useState(false);
  const SetPopUp = () => {
    setIsOpen(true);
  };
  const CancelPopUp = () => {
    setIsOpen(false);
  };
  //   const Manufactors = ["Manufactors 1", "Manufactors 2", "Manufactors 3"];

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
            {Categories.map(
              (Category, i) => (
                <ShopCards07
                  key={i}
                  ProductReady={ProductReady}
                  Categories={Categories}
                  Title={Category.title}
                  url={Category.url}
                ></ShopCards07>
              )
              //   console.log(Category.title)
            )}
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
          <Sliders></Sliders>
          {/* <Sliders Manufactors={Manufactors}></Sliders> */}
          {/* <SliderBrands Manufactors={Manufactors}></SliderBrands> */}
        </div>
      </div>
    </Fragment>
  );
};
export default Products;
