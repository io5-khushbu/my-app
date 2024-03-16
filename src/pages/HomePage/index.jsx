import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IndustriesLimited from "../../components/IndustriesLIimted";
import "./style.css";
import Product from "../../components/Product";
import Tractor from "../../components/Tractor";
import Professional from "../../components/Professional";

const HomePage = () => {
  return (
    <>
      <div className="bodyPart">
        <Header />
        <IndustriesLimited />
        <Product />
        <Tractor />
        <Professional />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
