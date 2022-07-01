const { Client } = require("@elastic/elasticsearch");

const ES_SERVER =
  "https://1c47j29ptl:fsttu4gebv@infohe-9213104094.eu-west-1.bonsaisearch.net:443";
const esClient = new Client({
  node: ES_SERVER,
  auth: {
    username: "1c47j29ptl",
    password: "fsttu4gebv",
  },
});

const filter = async () => {
  const result = await esClient.search({
    body: {
      query: {
        bool: {
          filter: [
            {
              term: {
                type: "Product",
              },
            },
            {
              term: {
                parentUrl: "/industrial-control/plc",
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
  bucket.map((item) => {
    const keyValues = item.values.buckets;
    const bucketName = item.key;
    console.log(keyValues, bucketName);
  });
};
filter();
