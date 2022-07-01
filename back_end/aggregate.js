const aggs_special = (facet_name) => {
  return {
    aggs_special: {
      filter: {
        match: {
          "string_facets.facet_name": `${facet_name}`,
        },
      },
      aggs: {
        names: {
          terms: {
            field: "string_facets.facet_name",
          },
          aggs: {
            values: {
              terms: {
                field: "string_facets.facet_value",
              },
            },
          },
        },
      },
    },
  };
};

const aggregate = (facet_name, facet_value) => {
  return {
    nested: {
      path: "string_facets",
      query: {
        bool: {
          filter: [
            {
              term: {
                "string_facets.facet_name": `${facet_name}`,
              },
            },
            {
              term: {
                "string_facets.facet_value": `${facet_value}`,
              },
            },
          ],
        },
      },
    },
  };
};

// main function

const getArguments = (...arguments) => {
  const arrayArgs = Array.from(arguments);

  const nestedItems = arrayArgs.map((item) => {
    return aggregate(item[0], item[1]);
  });

  const firstByItem = arrayArgs.map((arg) => {
    return arg[0];
  });

  const filteredItem = firstByItem.map((item, i) => {
    const value = arrayArgs.filter((key) => {
      return item !== key[0];
    });

    const callAggs = value.map((item) => {
      return aggregate(item[0], item[1]);
    });

    return {
      [`aggs_${firstByItem[i]}`]: {
        filter: {
          bool: {
            filter: callAggs,
          },
        },
        aggs: {
          facets: {
            nested: {
              path: "string_facets",
            },
            aggs: aggs_special(firstByItem[i]),
          },
        },
      },
    };
  });

  const output = {
    post_filter: {
      bool: {
        filter: nestedItems,
      },
    },
    aggs: {
      aggs_all_filters: {
        filter: {
          bool: {
            filter: nestedItems,
          },
        },
        aggs: {
          facets: {
            nested: {
              path: "string_facets",
            },
            aggs: {
              names: {
                terms: {
                  field: "string_facets.facet_name",
                },
                aggs: {
                  values: {
                    terms: {
                      field: "string_facets.facet_value",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  filteredItem.forEach((item) => {
    output.aggs = { ...item, ...output.aggs };
  });
  return output;
};

const result = getArguments(
  ["make", "Omron"],
  ["roHs", "Compliant"],
  ["model", "CJ1W-NC414"]
);

console.log(JSON.stringify(result, null, 2));

//TASK THREE

const data = {
  post_filter: {
    bool: {
      filter: [aggregate("make", "Omron"), aggregate("roHs", "Compliant")],
    },
  },
  aggs: {
    aggs_all_filters: {
      filter: {
        bool: {
          filter: [aggregate("make", "Omron"), aggregate("roHs", "Compliant")],
        },
      },
      aggs: {
        facets: {
          nested: {
            path: "string_facets",
          },
          aggs: {
            names: {
              terms: {
                field: "string_facets.facet_name",
              },
              aggs: {
                values: {
                  terms: {
                    field: "string_facets.facet_value",
                  },
                },
              },
            },
          },
        },
      },
    },
    aggs_make: {
      filter: {
        bool: {
          filter: [aggregate("roHs", "Compliant")],
        },
      },
      aggs: {
        facets: {
          nested: {
            path: "string_facets",
          },
          aggs: aggs_special("make"),
        },
      },
    },
    aggs_roHs: {
      filter: {
        bool: {
          filter: [aggregate("make", "Omron")],
        },
      },
      aggs: {
        facets: {
          nested: {
            path: "string_facets",
          },
          aggs: aggs_special("roHs"),
        },
      },
    },
  },
};

//Second task
