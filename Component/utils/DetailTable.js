import React, { Fragment } from "react";

const DetailTable = (props) => {
  let entries = [];
  if (props.ProductReady) {
    console.log(props.ProductReady);

    entries = Object.entries(props.ProductReady);
  }
  console.log(entries);
  const CheckProperty = (Property) => {
    if (typeof Property === "string") {
      return Property;
    } else {
      console.log(Property);

      return "will come";
    }
  };

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
            {CheckProperty(entry[1])}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default DetailTable;
