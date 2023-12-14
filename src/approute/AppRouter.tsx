import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../components/layout/Layout";
import AboutPage from "../pages/about/AboutPage";
import CartPage from "../pages/cart/CartPage";
import ContactPage from "../pages/contact/ContactPage";
import ItemListPage from "../pages/item-list/ItemListPage";
import LandingPage from "../pages/landing/LandingPage";
import Item from "./../pages/item-list/Item";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/item-list"
          element={
            <Layout>
              <ItemListPage />
            </Layout>
          }
        />
        <Route
          path="/item-list/:id"
          element={
            <Layout>
              <Item />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
