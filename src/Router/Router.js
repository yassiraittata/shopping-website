import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "../pages/Auth";
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
};

export default Router;
