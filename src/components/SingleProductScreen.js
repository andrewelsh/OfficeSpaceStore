import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Data from "../Data";
import "./compents.css";

// This is the indivdual product screen / Single product layout / Page
const SingleProductScreen = () => {
  const { id } = useParams();

  // scroll to the top of the page
  // window.scrollTo(0, 0);

  const singleProduct = Data.products.find(
    (items) => items.id === parseInt(id)
  );

  const {
    discount,
    title,
    description,
    images,
    rating,
    price,
    brand,
    discountPercentage,
  } = singleProduct;
  const [featuredImage, SetfeaturedImage] = React.useState(images[0]);

  const [cartArry, setCartArry] = useState([]);
  function handleAddtoCart() {
    setCartArry((prev) => [...prev, id]);
    localStorage.setItem("Cart Item" + id, id);

    console.log(
      "Cart count from singleProductScreen " + parseInt(localStorage.length - 1)
    );

    console.log(localStorage);
  }

  function handleFeatureImageClick(image) {
    SetfeaturedImage(image);
  }
  let a = discountPercentage * 0.01 + 1;
  let b = price;
  return (
    <div className="productScreenBG">
      <Header count={localStorage.length - 1} />

      <div className="productScreen">
        <div className="productScreenImage">
          <a href={images[0]}>
            <img
              className="singleProductImage"
              src={featuredImage}
              alt={title}
            />
          </a>

          <div className="productScreenImageBottom">
            <div className="productScreenSmallImages">
              {images[1] && (
                <img
                  onClick={() => handleFeatureImageClick(images[0])}
                  className="productScreenSmallImagesNested"
                  src={images[0]}
                  alt={title}
                />
              )}

              {images[2] && (
                <img
                  onClick={() => handleFeatureImageClick(images[1])}
                  className="productScreenSmallImagesNested"
                  src={images[1]}
                  alt={title}
                />
              )}
              {images[3] && (
                <img
                  onClick={() => handleFeatureImageClick(images[2])}
                  className="productScreenSmallImagesNested"
                  src={images[2]}
                  alt={title}
                />
              )}
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2 className="productScreenText">{title}</h2>
          <p id="brand">Brand : {brand}</p>

          <p className="productScreenSmallText">
            {description}
            {description}
            {description}
            {description}
          </p>
          <hr />
          <hr />
          <div>
            <span id="star"> ⭐⭐⭐⭐⭐ ({rating}) / 5 </span>
            <br />
            <div className="btnStarContainer">
              <div className="productScreenbuttons">
                {discount && (
                  <dicount className="discount">
                    {" "}
                    {Math.floor(a * b) + ".00"}{" "}
                  </dicount>
                )}
                <strong>
                  <span id="price"> ${price}</span>
                </strong>
                <div className="flex">
                  <button
                    id="productScreenBtn"
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddtoCart}
                  >
                    <span id="plus"></span> ADD TO CART
                  </button>
                  <button
                    id="productScreenBtn"
                    type="button"
                    className="btn btn-primary"
                  >
                    <span id="plus"></span> BUY NOW
                  </button>
                  <Link to="/" state={localStorage.length - 1}>
                    <button
                      id="productScreenBtn"
                      type="button"
                      className="btn btn-dark"
                    >
                      CANCEL
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProductScreen;
