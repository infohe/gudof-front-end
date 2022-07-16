import React from "react";
import { useState } from "react";
import LinkList from "./LinkList";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const FlipkartModel = (props) => {
  const [selectItem, setSelectItem] = useState(false);
  // const [changeStyle, setChangeStyle] = useState("");
  const [buckets, fillBuckets] = useState([]);
  const [parentDocCount, fillParentDocCount] = useState(0);

  const selectItemClicked = (currentValue) => {
    setSelectItem(true);
    innerFilterValues.map((item) => {
      if (item.key === currentValue) {
        fillParentDocCount(item?.doc_count);
        fillBuckets(item?.values?.buckets);
      }
    });
  };
  const SentenceCase = (text) => {
    let result = text.replace(/([A-Z])/g, " $1");
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
  const selectItemClosed = () => {
    setSelectItem(false);
  };
  const values = props.topFilterValues;
  const innerFilterValues = props.innerFilterValues;
  const cancelAllFilters = props.cancelAllFilters;

  return (
    <div className="flex flex-col fixed inset-0	bg-white z-50">
      <div className="flex justify-between h-20		align-center bg-blue-700 text-white p-2 	">
        <div className="flex gap-2">
          <ArrowBackRoundedIcon
            fontSize="small"
            onClick={cancelAllFilters}
          ></ArrowBackRoundedIcon>
          <div>Filters</div>
        </div>
        <div>Clear Filters</div>
      </div>
      <div className="flex ">
        <div className="bg-slate-200	w-1/3 text-base		h-screen">
          {values.map((item, i) => {
            return (
              <div
                className={` shadow-sm hover:bg-white active:bg-white rounded-sm border-b	  text-sm	 border-white p-2`}
                key={i}
                onClick={() => {
                  selectItemClicked(item);
                }}
              >
                {SentenceCase(item)}
              </div>
            );
          })}
        </div>

        {/* {display next value according to user clicks} */}
        {selectItem && (
          <ul className="flex flex-col">
            {buckets.map((product, i) => (
              <li className="m-1 relative " key={i}>
                <div className="flex  p-3">
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label inline-block  text-sm	text-gray-800">
                      {product.key}
                    </label>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FlipkartModel;
