import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../components/layout/Layout";
import AuthGuard from "../pages/authGuard/AuthGuard";
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
            <AuthGuard>
              <Layout>
                <ItemListPage />
              </Layout>
            </AuthGuard>
          }
        />
        <Route
          path="/item-list/:id"
          element={
            <AuthGuard>
              <Layout>
                <Item />
              </Layout>
            </AuthGuard>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthGuard>
              <Layout>
                <CartPage />
              </Layout>
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
