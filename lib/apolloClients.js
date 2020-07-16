import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/link-context";

import { SYSTEM_URL, CLIENT_URL } from "../config";

const httpClientLink = createHttpLink({
  uri: CLIENT_URL, // Server URL (must be absolute)
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
});

const httpSystemLink = createHttpLink({
  uri: SYSTEM_URL, // Server URL (must be absolute)
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
});

const authLinkUser = setContext((_, { headers }) => {
  const token = localStorage.getItem("userToken");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem("userToken");
  const token =
    "dXNlcj0xMTUyNjk2Nixyb2xlPWFkbWluLHByb2plY3Q9ODU5OTA4NjE3LHQ9MTU4NzgzMzgzNjQ3MjMwMjAwMA=";

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// clients

export const apolloUserClient = new ApolloClient({
  link: authLinkUser.concat(httpClientLink),
  cache: new InMemoryCache(),
});

export const apolloSystemClient = new ApolloClient({
  link: authLink.concat(httpSystemLink),
  cache: new InMemoryCache(),
});
