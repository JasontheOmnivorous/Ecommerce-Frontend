import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../components/layout/Layout";
import AboutPage from "../pages/about/AboutPage";
import AddToCart from "../pages/addToCart/AddToCart";
import ContactPage from "../pages/contact/ContactPage";
import ItemListPage from "../pages/item-list/ItemListPage";
import LandingPage from "../pages/landing/LandingPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Layout><App /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/item-list" element={<Layout><ItemListPage /></Layout>} />
        <Route path="/add-cart" element={<Layout><AddToCart /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
