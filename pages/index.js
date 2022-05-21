import { Fragment, useState } from "react";
import Category from "../Component/Category.js/Category";
import RecentSearch from "../Component/Mosaic/RecentSearch";
import Search from "../Component/Searchform/Search";
import { Backdrop } from "../Component/utils/popup/Backdrop";
import Popup from "../Component/utils/popup/Popup";
import Slice from "../Component/utils/Slice";

export default function Home() {
  const Categories = [
    { id: 1, name: "Sensors" },
    { id: 2, name: "Circuits" },
    { id: 3, name: "Discrete-semicondutors" },
    { id: 4, name: "Optoelectronics" },
    { id: 5, name: "passive-components" },
    { id: 6, name: "Circute-protection" },
    { id: 7, name: "another" },
    { id: 8, name: "another" },
    { id: 9, name: "another" },
  ];
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
      {/* <Head>
        <title>Gudof</title>
        <meta
          name="description"
          content="Find a lot of great tools that allow you to evolve...{add descriptions about gudof]"
        />
      </Head> */}
      <div
        className="flex  flex-col items-center justify-center  w-full   	"
        // style={{ height: "0vh" }}
      >
        <h1 className="text-3xl text-blue-900 font-bold	 my-8			">
          Gud<span className="text-sky-400 font-bold">of</span>
        </h1>
        {/* Search form */}
        <Search SetRecent={SetRecent}></Search>
        {IsSearchOpen && (
          <RecentSearch CancelRecent={CancelRecent}></RecentSearch>
        )}
        {IsSearchOpen && <Backdrop CancelPopUp={CancelPopUp}></Backdrop>}
        <Slice
          text="select the product, model and manufacture"
          SetPopUp={SetPopUp}
        ></Slice>
      </div>
      <Category Categories={Categories}></Category>
      {IsOpen && <Popup CancelPopUp={CancelPopUp}></Popup>}
      {IsOpen && <Backdrop CancelPopUp={CancelPopUp}></Backdrop>}
    </Fragment>
  );
}
