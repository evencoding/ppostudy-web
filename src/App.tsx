import React from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atoms";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
