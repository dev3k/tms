import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";
dotenv.config();
const schemaUrl =
  process.env.VITE_GRAPHQL_API_URL || "https://staging.salalem.com/graphql";

const config: CodegenConfig = {
  overwrite: true,
  schema: schemaUrl,
  documents: ["src/features/**/gql/**/*.ts"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        fetcher: "graphql-request",
        reactQueryVersion: 5,
        exposeQueryKeys: true,
        exposeFetcher: true,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
