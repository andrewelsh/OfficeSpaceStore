import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Data from "../Data";
import "./compents.css";

// This is the indivdual product screen / Single product layout / Page
const SingleProductScreen = () => {
  const { id } = useParams();
  window.scrollTo(0, 0);
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
  const [cart, setCart] = React.useState(0);

  function handleAddToCart() {
    setCart((prev) => (prev = prev + 1));
  }

  function handleFeatureImageClick(image) {
    SetfeaturedImage(image);
  }
  let a = discountPercentage * 0.01 + 1;
  let b = price;
  return (
    <div className="productScreenBG">
      <Header props={() => handleAddToCart()} state={cart} />

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
                    class="btn btn-primary"
                    onClick={handleAddToCart}
                  >
                    <span id="plus"></span> ADD TO CART
                  </button>
                  <Link to="/">
                    <button
                      id="productScreenBtn"
                      type="button"
                      class="btn btn-dark"
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
