import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../components/layout/Layout";
import CartPage from "../pages/cart/CartPage";
import ItemListPage from "../pages/item-list/ItemListPage";
import Item from "./../pages/item-list/Item";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <App />
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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
