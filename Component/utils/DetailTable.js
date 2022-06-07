import React, { Fragment } from "react";

const DetailTable = (props) => {
  let entries = [];
  if (props.productDetails) {
    console.log(props.productDetails);

    entries = Object.entries(props.productDetails);
  }
  const SentenceCase = (text) => {
    let result = text.replace(/([A-Z])/g, " $1");
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
  return (
    <Fragment>
      {entries.map((entry, i) => (
        <div className="grid grid-cols-2	auto-cols-fr  text-sm		">
          <div className="shadow-sm rounded-sm border border-gray-200 p-2">
            {SentenceCase(entry[0])}
          </div>
          <div className="shadow-sm rounded-sm border border-gray-200 p-2">
            {SentenceCase(entry[1])}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default DetailTable;
