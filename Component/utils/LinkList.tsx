import React, { Fragment } from "react";
import { useState } from "react";
import FirstFolder from "./FirstFolder";
import { resultDataFrom } from "../../back_end/filteredItems";

import FilterPop from "./popup/FilterPop";
import { Backdrop } from "../utils/popup/Backdrop";

const LinkList = (props) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterOpen = () => {
    setIsFilterOpen(true);
  };
  const cancelPopUp = () => {
    setIsFilterOpen(false);
  };
  return (
    <Fragment>
      <div
        className="flex justify-between	 text-black p-2 border-b-2 border-zinc-300"
        onClick={() => {
          filterOpen();
        }}
      >
        <div>{props.item1}</div>
        <div>{props.item2}</div>
      </div>
      {isFilterOpen && (
        <FirstFolder Details={""} cancelPopUp={cancelPopUp}>
          <FilterPop
            values={resultDataFrom}
            currentValue={props.item1}
            head={"Add to Filter"}
          ></FilterPop>
        </FirstFolder>
      )}
      {isFilterOpen && <Backdrop cancelPopUp={cancelPopUp}></Backdrop>}
    </Fragment>
  );
};

export default LinkList;
