import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../components/layout/Layout";
import AboutPage from "../pages/about/AboutPage";
import AddToCart from "../pages/addToCart/AddToCart";
import ContactPage from "../pages/contact/ContactPage";
import ItemListPage from "../pages/item-list/ItemListPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/item-list" Component={ItemListPage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/add-cart" Component={AddToCart} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
