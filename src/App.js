import React from "react";
import Header from "./components/Header";

// import ProductScreen from "./components/ProductScreen";
// import React, { useEffect, useState } from "react";
// import { commerce } from "./lib/commerce";
// import ProductsCommerce from "./products/ProductsCommerce";

const App = () => {
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

  return (
    <div>
      <Header count={localStorage.length} />
    </div>
  );
};

export default App;
