import { Client } from "@elastic/elasticsearch";
import dotenv from "dotenv";

dotenv.config();
export async function connectToElasticsearch(type, parentUrl) {
  const ESS_CLOUD_ID = process.env.ESS_CLOUD_ID;
  const ESS_CLOUD_USERNAME = process.env.ESS_CLOUD_USERNAME;
  const ESS_CLOUD_PASSWORD = process.env.ESS_CLOUD_PASSWORD;

  if (!ESS_CLOUD_ID || !ESS_CLOUD_USERNAME || !ESS_CLOUD_PASSWORD) {
    return "ERR_ENV_NOT_DEFINED";
  }

  return new Client({
    node: ESS_CLOUD_ID,
    auth: {
      username: ESS_CLOUD_USERNAME,
      password: ESS_CLOUD_PASSWORD,
    },
  });
}

const filteredItems = async (type, parentUrl) => {
  const client = await connectToElasticsearch();
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
filteredItems("Product", "/industrial-control/plc");
