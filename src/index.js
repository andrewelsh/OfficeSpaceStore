import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import SingleProductScreen from "./components/SingleProductScreen";
import Cart from "./components/shoppingCart/Cart";

// Fetching Data from URL

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout/*" element={<Cart />} />

        <Route
          path="/SingleProductScreen/:id"
          element={<SingleProductScreen />}
        />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
