import React, { Fragment } from "react";
const DetailTable = (props) => {
  const checkPointResult = props.checkPointResult;

  // const CheckProperty = (Property) => {
  //   if (typeof Property === "string") {
  //     if (Property === "undefined undefined") {
  //       return (Property = "Null");
  //     }
  //     return Property;
  //   } else {
  //     return "will come";
  //   }
  // };

  const SentenceCase = (text) => {
    let result = text.replace(/([A-Z])/g, " $1");
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
  return (
    <Fragment>
      {checkPointResult.map((innerArrays, i) => {
        return (
          <Fragment key={i}>
            {innerArrays.map((itemArrays, j) => {
              return (
                <Fragment key={j}>
                  <div
                    className="grid grid-cols-2	auto-cols-fr  text-sm		"
                    key={i}
                  >
                    <div className="shadow-sm rounded-sm border border-gray-200 p-2">
                      {SentenceCase(itemArrays.facet_name)}
                      {/* {SentenceCase(entry[0])} */}
                      {/* {console.log(itemArrays)} */}
                    </div>
                    <div
                      className="shadow-sm rounded-sm border border-gray-200 p-2"
                      key={i}
                    >
                      {itemArrays.facet_value}

                      {/* {CheckProperty(entry[1])} */}
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default DetailTable;

// {results.map((itemArray, i) => {
//   item.map((innerArrays) => {
//     <div className="grid grid-cols-2	auto-cols-fr  text-sm		" key={i}>
//       <div className="shadow-sm rounded-sm border border-gray-200 p-2">
//         {SentenceCase(entry[0])}
//       </div>
//       <div
//         className="shadow-sm rounded-sm border border-gray-200 p-2"
//         key={i}
//       >
//         {CheckProperty(entry[1])}
//       </div>
//     </div>;
//   });
// })}
{
  /* {entries.map((entry, i) => (
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
        </div> */
}
