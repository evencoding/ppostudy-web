import { ApolloProvider } from "@apollo/client";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { client } from "./apollo";
import { isDarkAtom } from "./atoms";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
