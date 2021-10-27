import { ApolloClient } from "@apollo/client";

import { cache } from "../common/cache";

const client = new ApolloClient({
  uri: "https://pangaea-interviews.vercel.app/api/graphql",
  cache,
});

export default client;
