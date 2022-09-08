import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./compents.css";

// Main card layout -  This is the format used on the main app homescreen
const Product = (props) => {
  // This sets localStorage to 0 for a first time user

  function loadLocalStorage() {
    Number.isInteger(parseInt(localStorage.state))
      ? console.log("LocalStorage Loaded")
      : localStorage.setItem("state", 0);
  }
  useEffect(() => {
    loadLocalStorage();
  }, []);

  // scroll to the top of the page
  window.scrollTo(0, 0);

  // conditional render of sold out banner
  let banner =
    props.stock === 0
      ? "SOLD OUT"
      : props.stock < 30
      ? `ONLY ${props.stock} LEFT`
      : null;
  let style =
    banner !== "SOLD OUT"
      ? { backgroundColor: "yellow", color: "black" }
      : { backgroundColor: "red" };

  return (
    <div className="productCard">
      <Link
        to={{
          pathname: `/SingleProductScreen/${props.id}`,
        }}
      >
        {banner && (
          <div style={style} className="conditional-banner">
            {banner}
          </div>
        )}
        <img
          className="productCardImages"
          src={props.thumbnail}
          alt={props.title}
        />
      </Link>
      <p id="productTitle">
        <a href="#" alt={props.title}>
          {props.title}
        </a>
      </p>
      <p id="productRating">
        <span id="MainPageStar">({props.rating}/5) ⭐ </span>
      </p>
      <p id="productPrice">${props.price}</p>
    </div>
  );
};

export default Product;
