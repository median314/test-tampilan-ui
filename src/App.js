import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ProductSinglePage from "./Pages/ProductSinglePage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductSinglePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </>
  );
}

export default App;
