import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const TOKEN = "token";
const USERNAME = "ppostudy-username";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const usernameVar = makeVar(localStorage.getItem(USERNAME));

export const logUserIn = (token, username) => {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(USERNAME, username);
  usernameVar(username);
  isLoggedInVar(true);
};

export const LogUserOut = (history) => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USERNAME);
  usernameVar("");
  isLoggedInVar(false);
};

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://ppostudy-backend.herokuapp.com/graphql"
      : "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        keyFields: (obj) => `User:${obj.username}`,
      },
    },
  }),
});
