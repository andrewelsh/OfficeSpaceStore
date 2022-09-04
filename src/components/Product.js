import React from "react";
import { Link } from "react-router-dom";
import "./compents.css";

// Main card layout -  This is the format used on the main app homescreen

const Product = (props) => {
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
          state: props.cartCount,
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
