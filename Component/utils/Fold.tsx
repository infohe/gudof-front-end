import React, { useState } from "react";
import DetailTable from "./DetailTable";

const Fold = (props) => {
  // const check = (details) => {
  //   const string_facets = [];
  //   const number_facets = [];
  //   const props = Object.keys(details);
  //   props.forEach((prop) => {
  //     if (typeof details[prop] === "string") {
  //       string_facets.push({
  //         facet_name: prop,
  //         facet_value: details[prop],
  //       });
  //     } else if (typeof details[prop] === "object") {
  //       if (details[prop] !== null) {
  //         const specs = Object.keys(details[prop]);
  //         specs.forEach((spec) => {
  //           if (typeof details[prop][spec] === "string") {
  //             const parsedValue = parseFloat(details[prop][spec]);
  //             if (
  //               typeof parsedValue === "number" &&
  //               !Number.isNaN(parsedValue)
  //             ) {
  //               number_facets.push({
  //                 facet_name: spec,
  //                 facet_value: parsedValue,
  //               });
  //             } else {
  //               string_facets.push({
  //                 facet_name: spec,
  //                 facet_value: details[prop][spec],
  //               });
  //             }
  //           } else if (typeof details[prop][spec] === "object") {
  //             const parsedValue = details[prop][spec].value;
  //             if (typeof parsedValue === "number") {
  //               number_facets.push({
  //                 facet_name: spec,
  //                 facet_value: parsedValue,
  //               });
  //             } else {
  //               string_facets.push({
  //                 facet_name: spec,
  //                 facet_value: details[prop][spec].value,
  //               });
  //             }
  //           }
  //         });
  //       }
  //     }
  //   });

  //   return { string_facets, number_facets };
  // };

  // const { number_facets, string_facets } = check(props?.productDetails);
  // console.log(string_facets, number_facets);
 

  const productDetails = props?.productDetails;
  const [isIconOpen, setIsIconOpen] = useState(false);
  const openIcon = () => {
    setIsIconOpen(true);
  };
  const closeIcon = () => {
    setIsIconOpen(false);
  };

  return (
    <div className="flex flex-col shadow-lg   rounded-sm border border-gray-200 p-3 z-40">
      <div className=" flex  justify-between items-center	  ">
        <div>
          <h3 className="font-medium mb-3">More Details</h3>
        </div>
        {!isIconOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
            onClick={openIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
        {isIconOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
            onClick={closeIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        )}
      </div>
      {isIconOpen && (
        <DetailTable productDetails={productDetails}></DetailTable>
      )}
    </div>
  );
};

export default Fold;
