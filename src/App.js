import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Data from "./Data";
import "./App.css";
import Announcement from "./components/Announcement";
import Featured from "./components/Featured";
import { useLocation } from "react-router-dom";
// import ProductScreen from "./components/ProductScreen";
// import React, { useEffect, useState } from "react";
// import { commerce } from "./lib/commerce";
// import ProductsCommerce from "./products/ProductsCommerce";

const App = (props) => {
  const location = useLocation();
  // ***********************************************************
  // CommerceJS is handling backend

  // async function fetchProducts() {
  //   const { data } = await commerce.products.list();
  //   setProducts(data);
  // }
  // // Fetching propduct list with useEffect hook.  This will only run once [] on load.
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // ***********************************************************
  // let mappedProducts = products.map((items) => (
  //   <ProductsCommerce {...items} key={items.id} />
  // ));

  let mappedData = Data.products.map((items) => (
    <Product key={Math.random(10) * 10} {...items} />
  ));

  return (
    <div>
      <Announcement />
      <Header count={location.state} />
      <Featured />
      <div className="app">{mappedData}</div>
      <Footer />
    </div>
  );
};

export default App;
