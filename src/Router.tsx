import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Room from "./pages/Room";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="room"
          element={
            <Layout>
              <Room />
            </Layout>
          }
        />
        <Route
          path="profile"
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
