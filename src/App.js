import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ProductSinglePage from "./Pages/ProductSinglePage";
import UserDetails from "./Pages/UserDetails";

function App() {
  window.onresize = () => { window.location.reload()}
 
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductSinglePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/user/detail" element={<UserDetails />} />
    </Routes>
    </>
  );
}

export default App;
