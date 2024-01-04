import { Box, CircularProgress } from "@mui/material";
import { ReactNode, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AuthGuard from "../pages/authGuard/AuthGuard";
const App = lazy(() => import("./../App"));
const ItemListPage = lazy(() => import("./../pages/item-list/ItemListPage"));
const CartPage = lazy(() => import("./../pages/cart/CartPage"));
const Item = lazy(() => import("./../pages/item-list/Item"));

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
            <Suspense
              fallback={
                <Box
                  sx={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress color="inherit" />
                </Box>
              }
            >
              <Layout>
                <App />
              </Layout>
            </Suspense>
          }
        />
        {routes.map((item) => generateRoute(item))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
