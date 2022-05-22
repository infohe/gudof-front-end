import { Fragment, React, useState } from "react";
import Title from "../../Component/utils/Title";
import Sliders from "../../Component/utils/Sliders";
import Filters from "../../Component/Mosaic/Filters";
import ShopCards07 from "../../Component/Mosaic/ShopCards07";
import Popup from "../../Component/utils/popup/Popup";
import Pagination from "../../Component/utils/pagination";
import PaginationClassic from "../../Component/Mosaic/PaginationClassic";
import { Backdrop } from "../../Component/utils/popup/Backdrop";
import Filterpop from "../../Component/utils/popup/Filterpop";

const products = () => {
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

  return (
    <Fragment>
      <div className="flex flex-col bg-slate-100	 relative ">
        <Title></Title>
        <div className="p-2">
          <Filters SetPopUp={SetPopUp}></Filters>
          <div className="text-sm text-gray-500 italic mb-4">67.975 Items</div>
        </div>
        {Categories.map((Category, i) => (
          <ShopCards07 key={i}></ShopCards07>
        ))}
        {/* <PaginationClassic></PaginationClassic> */}
        <Pagination></Pagination>

        {IsOpen && (
          <Popup CancelPopUp={CancelPopUp}>
            <Filterpop SetPopUp={SetPopUp}></Filterpop>
          </Popup>
        )}
        {IsOpen && <Backdrop CancelPopUp={CancelPopUp}></Backdrop>}
      </div>
      <div>
        <h2 className="text-xl		 text-blue-900  font-semibold my-4 ml-3 ">
          Our <span className="text-sky-400 font-semibold">manufactor</span>
        </h2>
        <Sliders></Sliders>
      </div>
    </Fragment>
  );
};

export default products;
