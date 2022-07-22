// const aggs_special = (facet_name) => {
//   return {
//     aggs_special: {
//       filter: {
//         match: {
//           "string_facets.facet_name": `${facet_name}`,
//         },
//       },
//       aggs: {
//         names: {
//           terms: {
//             field: "string_facets.facet_name",
//           },
//           aggs: {
//             values: {
//               terms: {
//                 field: "string_facets.facet_value",
//               },
//             },
//           },
//         },
//       },
//     },
//   };
// };

// const aggregate = (facet_name, facet_value) => {
//   return {
//     nested: {
//       path: "string_facets",
//       query: {
//         bool: {
//           filter: [
//             {
//               term: {
//                 "string_facets.facet_name": `${facet_name}`,
//               },
//             },
//             {
//               term: {
//                 "string_facets.facet_value": `${facet_value}`,
//               },
//             },
//           ],
//         },
//       },
//     },
//   };
// };

// // main function

// const getArguments = (...arguments) => {
//   const arrayArgs = Array.from(arguments);

//   const nestedItems = arrayArgs.map((item) => {
//     return aggregate(item[0], item[1]);
//   });

//   const firstByItem = arrayArgs.map((arg) => {
//     return arg[0];
//   });

//   const filteredItem = firstByItem.map((item, i) => {
//     const value = arrayArgs.filter((key) => {
//       return item !== key[0];
//     });

//     const callAggs = value.map((item) => {
//       return aggregate(item[0], item[1]);
//     });

//     return {
//       [`aggs_${firstByItem[i]}`]: {
//         filter: {
//           bool: {
//             filter: callAggs,
//           },
//         },
//         aggs: {
//           facets: {
//             nested: {
//               path: "string_facets",
//             },
//             aggs: aggs_special(firstByItem[i]),
//           },
//         },
//       },
//     };
//   });

//   const output = {
//     // post_filter: {
//     //   bool: {
//     //     filter: nestedItems,
//     //   },
//     // },
//     post_filter: {
//       bool: {
//         filter: nestedItems,
//       },
//     },
//     aggs: {
//       aggs_all_filters: {
//         filter: {
//           bool: {
//             filter: nestedItems,
//           },
//         },
//         aggs: {
//           facets: {
//             nested: {
//               path: "string_facets",
//             },
//             aggs: {
//               names: {
//                 terms: {
//                   field: "string_facets.facet_name",
//                 },
//                 aggs: {
//                   values: {
//                     terms: {
//                       field: "string_facets.facet_value",
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   };

//   filteredItem.forEach((item) => {
//     output.aggs = { ...item, ...output.aggs };
//   });
//   return output;
// };

// const result = getArguments(
//   ["make", "Omron"],
//   ["roHs", "Compliant"],
//   ["model", "CJ1W-NC414"]
// );

// console.log(JSON.stringify(result, null, 2));

//TASK THREE

// const data = {
//   post_filter: {
//     bool: {
//       filter: [aggregate("make", "Omron"), aggregate("roHs", "Compliant")],
//     },
//   },
//   aggs: {
//     aggs_all_filters: {
//       filter: {
//         bool: {
//           filter: [aggregate("make", "Omron"), aggregate("roHs", "Compliant")],
//         },
//       },
//       aggs: {
//         facets: {
//           nested: {
//             path: "string_facets",
//           },
//           aggs: {
//             names: {
//               terms: {
//                 field: "string_facets.facet_name",
//               },
//               aggs: {
//                 values: {
//                   terms: {
//                     field: "string_facets.facet_value",
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//     aggs_make: {
//       filter: {
//         bool: {
//           filter: [aggregate("roHs", "Compliant")],
//         },
//       },
//       aggs: {
//         facets: {
//           nested: {
//             path: "string_facets",
//           },
//           aggs: aggs_special("make"),
//         },
//       },
//     },
//     aggs_roHs: {
//       filter: {
//         bool: {
//           filter: [aggregate("make", "Omron")],
//         },
//       },
//       aggs: {
//         facets: {
//           nested: {
//             path: "string_facets",
//           },
//           aggs: aggs_special("roHs"),
//         },
//       },
//     },
//   },
// };

//Second task graphql model for same functions

const aggs_special_g = (facet_name) => {
  return {
    aggs: {
      key: "aggs_special",
      value: {
        filter: {
          term: { string_facets__facet_name: { value: `${facet_name}` } },
        },
        aggs: {
          key: "names",
          value: {
            terms: { field: "string_facets__facet_name" },
            aggs: {
              key: "values",
              value: { terms: { field: "string_facets__facet_value" } },
            },
          },
        },
      },
    },
  };
};

const aggregate_g = (facet_name, facet_value) => {
  return {
    nested: {
      path: "string_facets",
      query: {
        bool: {
          filter: [
            {
              term: {
                string_facets__facet_name: { value: `${facet_name}` },
              },
            },
            {
              term: {
                string_facets__facet_value: { value: `${facet_value}` },
              },
            },
          ],
        },
      },
    },
  };
};

// main function

export const getArguments_g = (...args) => {
  const arrayArgs = Array.from(args);
  const nestedItems = arrayArgs.map((item) => {
    return aggregate_g(item[0], item[1]);
  });

  const firstByItem = arrayArgs.map((arg) => {
    return arg[0];
  });
  const filteredItem = firstByItem.map((item, i) => {
    const value = arrayArgs.filter((key) => {
      return item !== key[0];
    });
    const callAggs = value.map((item) => {
      return aggregate_g(item[0], item[1]);
    });

    return {
      key: `aggs_${firstByItem[i]}`,
      value: {
        filter: {
          bool: {
            filter: callAggs,
          },
        },
        aggs: {
          key: `facet`,
          value: {
            nested: {
              path: "string_facets",
            },
            aggs: aggs_special_g(firstByItem[i]),
          },
        },
      },
    };
  });
  const output = {
    aggs: [
      {
        key: "aggs_all_filters",
        value: {
          filter: {
            bool: {
              filter: nestedItems,
            },
          },
          aggs: {
            key: "facets",
            value: {
              nested: { path: "string_facets" },
              aggs: {
                key: "names",
                value: {
                  terms: { field: "string_facets__facet_name" },
                  aggs: {
                    key: "values",
                    value: { terms: { field: "string_facets__facet_value" } },
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  filteredItem.forEach((item) => {
    output.aggs.push({ ...item });
    // output.aggs.push({ ...item });
    // output.aggs = { ...item, ...output.aggs };
  });
  return output;
};

const result_g = getArguments_g(["make", "Omron"], ["roHs", "Compliant"]);
// console.log(JSON.stringify(result_g, null, 2));
