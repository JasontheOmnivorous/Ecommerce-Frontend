import { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../components/layout/Layout";
import AuthGuard from "../pages/authGuard/AuthGuard";
import CartPage from "../pages/cart/CartPage";
import ItemListPage from "../pages/item-list/ItemListPage";
import Item from "./../pages/item-list/Item";

interface Props {
  id: number;
  path: string;
  component: ReactNode;
}

const AppRouter = () => {
  const routes = [
    { id: 1, path: "/item-list", component: <ItemListPage /> },
    { id: 2, path: "/item-list/:id", component: <Item /> },
    { id: 3, path: "/cart", component: <CartPage /> },
  ];

  const generateRoute = ({ id, path, component }: Props) => {
    return (
      <Route
        key={id}
        path={path}
        element={
          <AuthGuard>
            <Layout>{component}</Layout>
          </AuthGuard>
        }
      />
    );
  };

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
        {routes.map((item) => generateRoute(item))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
