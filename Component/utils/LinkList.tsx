import React, { Fragment } from "react";
import { useState } from "react";
import FirstFolder from "./FirstFolder";
import { resultDataFrom } from "../../back_end/filteredItems";

import FilterPop from "./popup/FilterPop";
import { Backdrop } from "../utils/popup/Backdrop";

const LinkList = (props) => {
  //   let parentDocCount = 0;
  //   let buckets = [];
  //   let bucketCout = 0;
  //   resultDataFrom.map((item) => {
  //     if (item.key === props.item1) {
  //       parentDocCount = item.doc_count;
  //       buckets = item.values.buckets;
  //     }
  //   });

  // const pageType = props.pageType;
  // const filteredValues = filteredItems("Product", "/industrial-control/plc");
  // console.log(filteredValues);
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
          {/* <ul className="flex flex-wrap items-center	gap-1 	">
            {buckets.map((product, i) => (
              <li className="m-1" key={i}>
                <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-md bg-transparent text-zinc-600 duration-150 ease-in-out">
                  {product.key}
                </button>
              </li>
            ))}
          </ul> */}
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
