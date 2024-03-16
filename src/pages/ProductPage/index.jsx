import React from "react";
import "./style.css";
import Header from "../../components/Header";
import IndustriesLimited from "../../components/IndustriesLIimted";
import ProductDetail from "../../components/ProductDetail";
import Footer from "../../components/Footer/index";
const ProductPage = () => {
  return (
    <>
      <Header />
      <IndustriesLimited />
      <ProductDetail />
      <Footer />
    </>
  );
};
export default ProductPage;
