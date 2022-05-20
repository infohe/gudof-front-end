import { Fragment, React, useState } from "react";
import Title from "../../Component/utils/Title";
// import Link from "next/link";
import Sliders from "../../Component/utils/Sliders";

import Filters from "../../Component/Mosaic/Filters";
import ShopCards07 from "../../Component/Mosaic/ShopCards07";
import Popup from "../../Component/utils/popup/Popup";

import { useRouter } from "next/router";

const products = () => {
  const router = useRouter();
  const Category = router.query.Category;
  //dummy data
  const Categories = [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
    { id: 3, name: "product3" },
    { id: 4, name: "product14" },
    { id: 5, name: "product5" },
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
      <div className="bg-slate-100	h-screen relative ">
        <Title></Title>
        <div className="p-2">
          <Filters SetPopUp={SetPopUp}></Filters>
          <div className="text-sm text-gray-500 italic mb-4">67.975 Items</div>
        </div>
        <ShopCards07 onClick={CancelPopUp}></ShopCards07>

        {IsOpen && <Popup CancelPopUp={CancelPopUp}></Popup>}
      </div>
      <h2 className="text-xl		 text-blue-900  font-semibold my-5 mx-3 px-4">
        Our <span className="text-sky-400 font-semibold">manufactor</span>
      </h2>
      <Sliders></Sliders>
    </Fragment>
  );
};

export default products;
