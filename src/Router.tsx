import { useReactiveVar } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isLoggedInVar } from "./apollo";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Room from "./pages/Room";

const routes = {
  home: "/",
  login: "/login",
  profile: "/profile",
  room: "/room",
};

function Router() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={routes.home}
          element={
            isLoggedIn ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <Layout>
                <Login />
              </Layout>
            )
          }
        />
        <Route
          path={routes.login}
          element={
            isLoggedIn ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <Layout>
                <Login />
              </Layout>
            )
          }
        />
        <Route
          path={routes.room}
          element={
            isLoggedIn ? (
              <Layout>
                <Room />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path={routes.profile}
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
