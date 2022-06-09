import React, { useState } from "react";
import DetailTable from "./DetailTable";

const Fold = (props) => {
  console.log(props.productDetails);
  const [IsIconOpen, SetIsIconOpen] = useState(false);
  const OpenIcon = () => {
    SetIsIconOpen(true);
  };
  const CloseIcon = () => {
    SetIsIconOpen(false);
  };

  return (
    <div className="flex flex-col shadow-lg   rounded-sm border border-gray-200 p-3 z-40">
      <div className=" flex  justify-between items-center	  ">
        <div>
          <h3 className="font-medium mb-3">More Details</h3>
        </div>
        {!IsIconOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
            onClick={OpenIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
        {IsIconOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
            onClick={CloseIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        )}
      </div>
      {IsIconOpen && (
        <DetailTable ProductReady={props.ProductReady}></DetailTable>
      )}
    </div>
  );
};

export default Fold;
