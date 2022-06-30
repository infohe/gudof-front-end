const { checkPrime } = require("crypto");
const { runMain } = require("module");
const { parse } = require("path");

const products = [
  {
    _id: { $oid: "61f426ab2d4954d854ac244e" },
    type: "Product",
    title: "Omron CJ1W-NC414",
    url: "/industrial-control/plc/omron-cj-1-w-nc-414",
    assets: { image: [], datasheet: [] },
    parentUrl: "/industrial-control/plc",
    slug: "omron-cj-1-w-nc-414",
    meta: {
      InsertedBy: {
        name: "Varsha Chandran",
        email: "varsha.chandran@infohe.com",
      },
      UpdatedBy: "Ashiq",
      CategoryName: "IndustrialControl",
      FileName: "IndustrialControl-ProgrammableLogicControllers(PLC).json",
    },
    productDetails: {
      make: "Omron",
      model: "CJ1W-NC414",
      Physical: {
        casePackage: "Module",
        mount: "DIN Rail",
        weight: { unit: "g", value: "219.992299" },
      },
      Technical: {
        maxOperatingTemperature: { unit: "°C", value: "55" },
        minOperatingTemperature: { unit: "°C", value: "0" },
        termination: "Connector",
      },
      Compliance: { approvals: "CE, UL", roHs: "Compliant" },
    },
    createdAt: { $date: { $numberLong: "1643390635000" } },
    updatedAt: { $date: { $numberLong: "1647870572853" } },
  },
];

const productDetails = products.map((item) => {
  return item.productDetails;
});

const oneForLoop = productDetails[0];
const results = Object.entries(oneForLoop);

// function isNumeric(num) {
//   return !isNaN(num);
// }

const checkProperty = (key, field) => {
  // if (key !== "unit" && key !== "value") {
  if (typeof key === "string" && typeof field === "string") {
    string_facets.push({ facet_name: key, facet_value: field });
  } else {
    const innerObj = Object.entries(field);
    innerObj.map((entry, i) => {
      if (typeof entry[0] === "string" && entry[1].hasOwnProperty("unit")) {
        let newValue = `${entry[1].value}${entry[1].unit}`;
        checkProperty(entry[0], newValue);
      } else {
        checkProperty(entry[0], entry[1]);
      }
    });
  }
};

const check = (details) => {
  const string_facets = [];
  const number_facets = [];
  const props = Object.keys(details);

  props.forEach((prop) => {
    if (typeof details[prop] === "string") {
      string_facets.push({
        facet_name: prop,
        facet_value: details[prop],
      });
    } else if (typeof details[prop] === "object") {
      const specs = Object.keys(details[prop]);
      specs.forEach((spec) => {
        console.log(details[prop][spec]);
        if (typeof details[prop][spec] === "string") {
          const parsedValue = parseFloat(details[prop][spec]);

          if (typeof parsedValue === "number" && !Number.isNaN(parsedValue)) {
            number_facets.push({ facet_name: spec, facet_value: parsedValue });
          } else {
            string_facets.push({
              facet_name: spec,
              facet_value: details[prop][spec],
            });
          }
        } else if (typeof details[prop][spec] === "object") {
          const parsedValue = parseFloat(details[prop][spec].value);

          if (typeof parsedValue === "number") {
            number_facets.push({ facet_name: spec, facet_value: parsedValue });
          } else {
            string_facets.push({
              facet_name: spec,
              facet_value: details[prop][spec].value,
            });
          }
        }
      });
    }
  });

  return { string_facets, number_facets };
};

const { number_facets, string_facets } = check(products[0].productDetails);
// console.log(string_facets);
// console.log(number_facets);
//  else {
//   number_facets.push({ facet_name: key, facet_value: field });
// }}

// results.map((entry, i) => {
//   checkProperty(entry[0], entry[1]);
// });

// number_facets.push({ facet_name: "model", facet_value: model });
