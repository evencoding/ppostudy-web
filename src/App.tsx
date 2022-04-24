import React from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atoms";
import Layout from "./components/Layout";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
