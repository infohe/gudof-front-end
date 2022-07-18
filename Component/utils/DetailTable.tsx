import React, { Fragment } from "react";
const DetailTable = (props) => {
  let entries = [];
  if (props.productDetails) {
    delete props.productDetails.productUrl;

    entries = Object.entries(props.productDetails);
  }
  /// added

  const checkingPoint = (key, field) => {
    const string_facets = [];
    if (typeof key === "string" && typeof field === "string") {
      string_facets.push({ facet_name: key, facet_value: field });
    } else {
      if (field !== null) {
        const innerObj: Array<any> = Object.entries(field);

        innerObj.map((entry, i) => {
          if (typeof entry === "string") {
          } else if (typeof entry === "object") {
            if (Array.isArray(entry)) {
              const { label, value } = entry[1];
              if (value === "string") {
                string_facets.push({ facet_name: label, facet_value: value });
                // console.log(string_facets);
              }
            }
          }
        });
      }
    }
  };

  ///

  const CheckProperty = (Property) => {

    if (typeof Property === "string") {
      if (Property === "undefined undefined") {
        return (Property = "Null");
      }
      return Property;
    } else {
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
        <div className="grid grid-cols-2	auto-cols-fr  text-sm		" key={i}>
          <div className="shadow-sm rounded-sm border border-gray-200 p-2">
            {SentenceCase(entry[0])}
          </div>
          <div
            className="shadow-sm rounded-sm border border-gray-200 p-2"
            key={i}
          >
            {CheckProperty(entry[1])}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default DetailTable;
