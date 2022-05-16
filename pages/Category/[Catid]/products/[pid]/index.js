import { React, useState } from "react";
import Filters from "../../../../../Component/Mosaic/Filters";
import ShopCards07 from "../../../../../Component/Mosaic/ShopCards07";
import Popup from "../../../../../Component/utils/Popup";
import Title from "../../../../../Component/utils/Title";

const ProductDetails = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const SetPopUp = () => {
    setIsOpen(true);
  };
  const CancelPopUp = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-slate-100	h-screen relative ">
      <Title></Title>
      <div className="p-2">
        <Filters SetPopUp={SetPopUp}></Filters>
        <div className="text-sm text-gray-500 italic mb-4">67.975 Items</div>
      </div>
      <ShopCards07 onClick={CancelPopUp}></ShopCards07>

      {IsOpen && <Popup CancelPopUp={CancelPopUp}></Popup>}
    </div>
  );
};

export default ProductDetails;
