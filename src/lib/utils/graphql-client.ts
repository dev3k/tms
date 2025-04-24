import { GraphQLClient } from "graphql-request";

const API_URL = import.meta.env.VITE_GRAPHQL_API_URL;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const graphqlClient = new GraphQLClient(API_URL, {
  headers: {
    "Content-Type": "application/json",
    Authorization: `JWT  ${ACCESS_TOKEN}`,
  },
});

// Function to set auth token
export const setAuthToken = (token: string) => {
  if (token) {
    console.log("n");
  }
  graphqlClient.setHeader("Authorization", `JWT ${ACCESS_TOKEN}`);
  // } else {
  //   graphqlClient.setHeader("Authorization", "");
  // }
};
