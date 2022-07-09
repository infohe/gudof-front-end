const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  node: "https://1c47j29ptl:fsttu4gebv@infohe-9213104094.eu-west-1.bonsaisearch.net:443",
  auth: {
    username: "1c47j29ptl",
    password: "fsttu4gebv",
  },
});

const filteredItems = async (type, parentUrl) => {
  const result = await client.search({
    body: {
      query: {
        bool: {
          filter: [
            {
              term: {
                type,
              },
            },
            {
              term: {
                parentUrl,
              },
            },
          ],
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
  });
  const bucket = result.body.aggregations.facets.names.buckets;
  console.log(bucket);
  return bucket;
};
export default filteredItems;
filteredItems("Product", "/industrial-control/plc");
const dataModel = {
  took: 4,
  timed_out: false,
  _shards: {
    total: 1,
    successful: 1,
    skipped: 0,
    failed: 0,
  },
  hits: {
    total: {
      value: 1000,
      relation: "eq",
    },
    max_score: 0,
    hits: [
      {
        _index: "pages",
        _type: "_doc",
        _id: "OnALmoEBYacDgEoxtl9E",
        _score: 0,
        _source: {
          title: "Omron CJ1W-IA111",
          url: "/industrial-control/plc/omron-cj-1-w-ia-111",
          parentUrl: "/industrial-control/plc",
          type: "Product",
          string_facets: [
            {
              facet_name: "make",
              facet_value: "Omron",
            },
            {
              facet_name: "model",
              facet_value: "CJ1W-IA111",
            },
            {
              facet_name: "casePackage",
              facet_value: "Module",
            },
            {
              facet_name: "mount",
              facet_value: "DIN Rail",
            },
            {
              facet_name: "termination",
              facet_value: "Screw",
            },
            {
              facet_name: "approvals",
              facet_value: "CE, UL",
            },
            {
              facet_name: "roHs",
              facet_value: "Compliant",
            },
          ],
          number_facets: [
            {
              facet_name: "weight",
              facet_value: 130.18101,
            },
          ],
        },
      },
      {
        _index: "pages",
        _type: "_doc",
        _id: "O3ALmoEBYacDgEoxtl9E",
        _score: 0,
        _source: {
          title: "Omron CP1L-M30DR-D",
          url: "/industrial-control/plc/omron-cp-1-l-m-30-dr-d",
          parentUrl: "/industrial-control/plc",
          type: "Product",
          string_facets: [
            {
              facet_name: "make",
              facet_value: "Omron",
            },
            {
              facet_name: "model",
              facet_value: "CP1L-M30DR-D",
            },
            {
              facet_name: "mount",
              facet_value: "Chassis Mount, DIN Rail, Panel",
            },
            {
              facet_name: "displayType",
              facet_value: "LCD",
            },
            {
              facet_name: "termination",
              facet_value: "Screw",
            },
            {
              facet_name: "approvals",
              facet_value: "CE, cULus",
            },
            {
              facet_name: "ratings",
              facet_value: "IP20",
            },
            {
              facet_name: "roHs",
              facet_value: "Compliant",
            },
          ],
          number_facets: [
            {
              facet_name: "weight",
              facet_value: 589.670081,
            },
            {
              facet_name: "maxOperatingTemperature",
              facet_value: 55,
            },
            {
              facet_name: "minOperatingTemperature",
              facet_value: 0,
            },
            {
              facet_name: "numberOfIOs",
              facet_value: 30,
            },
            {
              facet_name: "numberOfInputs",
              facet_value: 18,
            },
            {
              facet_name: "numberOfOutputs",
              facet_value: 12,
            },
            {
              facet_name: "outputCurrent",
              facet_value: 2,
            },
            {
              facet_name: "depth",
              facet_value: 85,
            },
            {
              facet_name: "length",
              facet_value: 110,
            },
            {
              facet_name: "width",
              facet_value: 130,
            },
          ],
        },
      },
      {
        _index: "pages",
        _type: "_doc",
        _id: "PHALmoEBYacDgEoxtl9E",
        _score: 0,
        _source: {
          title: "Omron CS1W-ID211",
          url: "/industrial-control/plc/omron-cs-1-w-id-211",
          parentUrl: "/industrial-control/plc",
          type: "Product",
          string_facets: [
            {
              facet_name: "make",
              facet_value: "Omron",
            },
            {
              facet_name: "model",
              facet_value: "CS1W-ID211",
            },
            {
              facet_name: "casePackage",
              facet_value: "Module",
            },
            {
              facet_name: "mount",
              facet_value: "PCB",
            },
            {
              facet_name: "termination",
              facet_value: "Screw",
            },
            {
              facet_name: "approvals",
              facet_value: "CE, cULus",
            },
            {
              facet_name: "roHs",
              facet_value: "Compliant",
            },
          ],
          number_facets: [
            {
              facet_name: "inputCurrent",
              facet_value: 7,
            },
            {
              facet_name: "numberOfIOs",
              facet_value: 16,
            },
            {
              facet_name: "numberOfInputs",
              facet_value: 16,
            },
            {
              facet_name: "outputCurrent",
              facet_value: 100,
            },
          ],
        },
      },
      {
        _index: "pages",
        _type: "_doc",
        _id: "PXALmoEBYacDgEoxtl9E",
        _score: 0,
        _source: {
          title: "Phoenix Contact 2861234",
          url: "/industrial-control/plc/phoenix-contact-2861234",
          parentUrl: "/industrial-control/plc",
          type: "Product",
          string_facets: [
            {
              facet_name: "make",
              facet_value: "Phoenix Contact",
            },
            {
              facet_name: "model",
              facet_value: "2861234",
            },
          ],
          number_facets: [],
        },
      },
      {
        _index: "pages",
        _type: "_doc",
        _id: "PnALmoEBYacDgEoxtl9E",
        _score: 0,
        _source: {
          title: "Phoenix Contact 2700775",
          url: "/industrial-control/plc/phoenix-contact-2700775",
          parentUrl: "/industrial-control/plc",
          type: "Product",
          string_facets: [
            {
              facet_name: "make",
              facet_value: "Phoenix Contact",
            },
            {
              facet_name: "model",
              facet_value: "2700775",
            },
          ],
          number_facets: [],
        },
      },
      {
        _index: "pages",
        _type: "_doc",
        _id: "P3ALmoEBYacDgEoxtl9E",
        _score: 0,
        _source: {
          title: "Phoenix Contact 2701043",
          url: "/industrial-control/plc/phoenix-contact-2701043",
          parentUrl: "/industrial-control/plc",
          type: "Product",
          string_facets: [
            {
              facet_name: "make",
              facet_value: "Phoenix Contact",
            },
            {
              facet_name: "model",
              facet_value: "2701043",
            },
          ],
          number_facets: [],
        },
      },
      {
        _index: "pages",
        _type: "_doc",
        _id: "QHALmoEBYacDgEoxtl9E",
        _score: 0,
        _source: {
          title: "Omron ZEN-20C1DT-D-V2",
          url: "/industrial-control/plc/omron-zen-20-c-1-dt-d-v-2",
          parentUrl: "/industrial-control/plc",
          type: "Product",
          string_facets: [
            {
              facet_name: "make",
              facet_value: "Omron",
            },
            {
              facet_name: "model",
              facet_value: "ZEN-20C1DT-D-V2",
            },
            {
              facet_name: "casePackage",
              facet_value: "Module",
            },
            {
              facet_name: "mount",
              facet_value: "Chassis Mount, DIN Rail, Surface Mount",
            },
            {
              facet_name: "displayType",
              facet_value: "LCD",
            },
            {
              facet_name: "approvals",
              facet_value: "CE, cULus",
            },
            {
              facet_name: "ratings",
              facet_value: "IP20",
            },
            {
              facet_name: "roHs",
              facet_value: "Compliant",
            },
          ],
          number_facets: [
            {
              facet_name: "weight",
              facet_value: 350.17331,
            },
            {
              facet_name: "maxOperatingTemperature",
              facet_value: 55,
            },
            {
              facet_name: "minOperatingTemperature",
              facet_value: 0,
            },
            {
              facet_name: "numberOfInputs",
              facet_value: 12,
            },
            {
              facet_name: "numberOfOutputs",
              facet_value: 8,
            },
            {
              facet_name: "operatingSupplyVoltage",
              facet_value: 28.8,
            },
            {
              facet_name: "outputCurrent",
              facet_value: 30,
            },
            {
              facet_name: "depth",
              facet_value: 56,
            },
            {
              facet_name: "length",
              facet_value: 122.5,
            },
            {
              facet_name: "width",
              facet_value: 90,
            },
          ],
        },
      },
      {
        _index: "pages",
        _type: "_doc",
        _id: "QXALmoEBYacDgEoxtl9E",
        _score: 0,
        _source: {
          title: "Omron CP1L-L20DR-A",
          url: "/industrial-control/plc/omron-cp-1-l-l-20-dr-a",
          parentUrl: "/industrial-control/plc",
          type: "Product",
          string_facets: [
            {
              facet_name: "make",
              facet_value: "Omron",
            },
            {
              facet_name: "model",
              facet_value: "CP1L-L20DR-A",
            },
            {
              facet_name: "mount",
              facet_value: "Chassis Mount, DIN Rail, Panel",
            },
            {
              facet_name: "displayType",
              facet_value: "LCD",
            },
            {
              facet_name: "termination",
              facet_value: "Screw",
            },
            {
              facet_name: "approvals",
              facet_value: "CE, cULus",
            },
            {
              facet_name: "ratings",
              facet_value: "IP20",
            },
            {
              facet_name: "roHs",
              facet_value: "Compliant",
            },
          ],
          number_facets: [
            {
              facet_name: "casePackage",
              facet_value: 100,
            },
            {
              facet_name: "weight",
              facet_value: 380.110406,
            },
            {
              facet_name: "maxOperatingTemperature",
              facet_value: 55,
            },
            {
              facet_name: "minOperatingTemperature",
              facet_value: 0,
            },
            {
              facet_name: "numberOfIOs",
              facet_value: 20,
            },
            {
              facet_name: "numberOfInputs",
              facet_value: 12,
            },
            {
              facet_name: "numberOfOutputs",
              facet_value: 8,
            },
            {
              facet_name: "outputCurrent",
              facet_value: 2,
            },
            {
              facet_name: "depth",
              facet_value: 85,
            },
            {
              facet_name: "length",
              facet_value: 86,
            },
            {
              facet_name: "width",
              facet_value: 110,
            },
          ],
        },
      },
      {
        _index: "pages",
        _type: "_doc",
        _id: "QnALmoEBYacDgEoxtl9E",
        _score: 0,
        _source: {
          title: "Omron ZEN-20C1AR-A-V2",
          url: "/industrial-control/plc/omron-zen-20-c-1-ar-a-v-2",
          parentUrl: "/industrial-control/plc",
          type: "Product",
          string_facets: [
            {
              facet_name: "make",
              facet_value: "Omron",
            },
            {
              facet_name: "model",
              facet_value: "ZEN-20C1AR-A-V2",
            },
            {
              facet_name: "mount",
              facet_value: "Chassis Mount, DIN Rail, Surface Mount",
            },
            {
              facet_name: "displayType",
              facet_value: "LCD",
            },
            {
              facet_name: "termination",
              facet_value: "Terminal Block",
            },
            {
              facet_name: "approvals",
              facet_value: "CE,",
            },
            {
              facet_name: "ratings",
              facet_value: "IP20",
            },
            {
              facet_name: "reachSvhc",
              facet_value: "Unknown",
            },
            {
              facet_name: "roHs",
              facet_value: "Compliant",
            },
          ],
          number_facets: [
            {
              facet_name: "weight",
              facet_value: 350.17331,
            },
            {
              facet_name: "maxOperatingTemperature",
              facet_value: 55,
            },
            {
              facet_name: "minOperatingTemperature",
              facet_value: 0,
            },
            {
              facet_name: "numberOfInputs",
              facet_value: 12,
            },
            {
              facet_name: "numberOfOutputs",
              facet_value: 8,
            },
            {
              facet_name: "operatingSupplyVoltage",
              facet_value: 240,
            },
            {
              facet_name: "depth",
              facet_value: 56,
            },
            {
              facet_name: "length",
              facet_value: 94.7,
            },
            {
              facet_name: "width",
              facet_value: 70,
            },
          ],
        },
      },
      {
        _index: "pages",
        _type: "_doc",
        _id: "Q3ALmoEBYacDgEoxtl9E",
        _score: 0,
        _source: {
          title: "Phoenix Contact 2700172",
          url: "/industrial-control/plc/phoenix-contact-2700172",
          parentUrl: "/industrial-control/plc",
          type: "Product",
          string_facets: [
            {
              facet_name: "make",
              facet_value: "Phoenix Contact",
            },
            {
              facet_name: "model",
              facet_value: "2700172",
            },
          ],
          number_facets: [],
        },
      },
    ],
  },
  aggregations: {
    facets: {
      doc_count: 5521,
      names: {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 195,
        buckets: [
          {
            key: "make",
            doc_count: 1000,
            values: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "Omron",
                  doc_count: 626,
                },
                {
                  key: "Phoenix Contact",
                  doc_count: 262,
                },
                {
                  key: "Crouzet",
                  doc_count: 77,
                },
                {
                  key: "Panasonic",
                  doc_count: 20,
                },
                {
                  key: "Red Lion Controls",
                  doc_count: 9,
                },
                {
                  key: "Molex",
                  doc_count: 6,
                },
              ],
            },
          },
          {
            key: "model",
            doc_count: 1000,
            values: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 990,
              buckets: [
                {
                  key: "112016-0018",
                  doc_count: 1,
                },
                {
                  key: "1120165000",
                  doc_count: 1,
                },
                {
                  key: "1120730001",
                  doc_count: 1,
                },
                {
                  key: "1120780001",
                  doc_count: 1,
                },
                {
                  key: "1120780002",
                  doc_count: 1,
                },
                {
                  key: "2311108",
                  doc_count: 1,
                },
                {
                  key: "2316050",
                  doc_count: 1,
                },
                {
                  key: "2316374",
                  doc_count: 1,
                },
                {
                  key: "2400361",
                  doc_count: 1,
                },
                {
                  key: "2688022",
                  doc_count: 1,
                },
              ],
            },
          },
          {
            key: "roHs",
            doc_count: 739,
            values: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "Compliant",
                  doc_count: 679,
                },
                {
                  key: "Non-Compliant",
                  doc_count: 60,
                },
              ],
            },
          },
          {
            key: "approvals",
            doc_count: 615,
            values: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "CE, cULus",
                  doc_count: 227,
                },
                {
                  key: "CE,",
                  doc_count: 162,
                },
                {
                  key: "CE, UL",
                  doc_count: 125,
                },
                {
                  key: "CE, KC, cULus",
                  doc_count: 66,
                },
                {
                  key: "CE",
                  doc_count: 29,
                },
                {
                  key: "CE, EN, IEC, cULus",
                  doc_count: 2,
                },
                {
                  key: "UL",
                  doc_count: 2,
                },
                {
                  key: "CSA,",
                  doc_count: 1,
                },
                {
                  key: "EN",
                  doc_count: 1,
                },
              ],
            },
          },
          {
            key: "mount",
            doc_count: 601,
            values: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 3,
              buckets: [
                {
                  key: "DIN Rail",
                  doc_count: 404,
                },
                {
                  key: "Chassis Mount, DIN Rail",
                  doc_count: 87,
                },
                {
                  key: "Chassis Mount, DIN Rail, Panel",
                  doc_count: 53,
                },
                {
                  key: "DIN Rail, Panel",
                  doc_count: 20,
                },
                {
                  key: "Chassis Mount, DIN Rail, Surface Mount",
                  doc_count: 13,
                },
                {
                  key: "DIN Rail, Surface Mount",
                  doc_count: 7,
                },
                {
                  key: "Panel",
                  doc_count: 5,
                },
                {
                  key: "DIN Rail, Rack",
                  doc_count: 4,
                },
                {
                  key: "Rack",
                  doc_count: 3,
                },
                {
                  key: "Chassis Mount",
                  doc_count: 2,
                },
              ],
            },
          },
          {
            key: "casePackage",
            doc_count: 522,
            values: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "Module",
                  doc_count: 522,
                },
              ],
            },
          },
          {
            key: "termination",
            doc_count: 484,
            values: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "Screw",
                  doc_count: 329,
                },
                {
                  key: "Connector",
                  doc_count: 69,
                },
                {
                  key: "D-Sub",
                  doc_count: 31,
                },
                {
                  key: "RJ45",
                  doc_count: 22,
                },
                {
                  key: "Terminal Block",
                  doc_count: 17,
                },
                {
                  key: "Circular",
                  doc_count: 6,
                },
                {
                  key: "USB",
                  doc_count: 4,
                },
                {
                  key: "Wire",
                  doc_count: 4,
                },
                {
                  key: "Lead",
                  doc_count: 2,
                },
              ],
            },
          },
          {
            key: "ratings",
            doc_count: 197,
            values: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "IP20",
                  doc_count: 106,
                },
                {
                  key: "IP40",
                  doc_count: 43,
                },
                {
                  key: "IP20, IP40",
                  doc_count: 23,
                },
                {
                  key: "IP30",
                  doc_count: 19,
                },
                {
                  key: "IP65",
                  doc_count: 4,
                },
                {
                  key: "IP00",
                  doc_count: 1,
                },
                {
                  key: "IP67",
                  doc_count: 1,
                },
              ],
            },
          },
          {
            key: "displayType",
            doc_count: 88,
            values: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "LCD",
                  doc_count: 88,
                },
              ],
            },
          },
          {
            key: "lifecycleStatus",
            doc_count: 80,
            values: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: "Production",
                  doc_count: 80,
                },
              ],
            },
          },
        ],
      },
    },
  },
};
export const resultDataFrom = dataModel.aggregations.facets.names.buckets;
console.log(resultDataFrom);
