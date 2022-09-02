import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Data from "../Data";
import "./compents.css";

// This is the indivdual product screen / Single product layout / Page
const SingleProductScreen = () => {
  const { id } = useParams();

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
          <img className="singleProductImage" src={featuredImage} alt={title} />

          <div className="productScreenImageBottom">
            <div className="productScreenSmallImages">
              {images[1] && (
                <img
                  onClick={() => handleFeatureImageClick(images[1])}
                  className="productScreenSmallImagesNested"
                  src={images[1]}
                  alt={title}
                />
              )}

              {images[2] && (
                <img
                  onClick={() => handleFeatureImageClick(images[2])}
                  className="productScreenSmallImagesNested"
                  src={images[0]}
                  alt={title}
                />
              )}
              {images[3] && (
                <img
                  onClick={() => handleFeatureImageClick(images[3])}
                  className="productScreenSmallImagesNested"
                  src={images[3]}
                  alt={title}
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <h2 className="productScreenText">{title}</h2>
          <p id="brand">Brand : {brand}</p>
          <p className="productScreenSmallText">
            {description}
            {description}
            {description}
            {description}
            <hr />
            <hr />
            <div className="btnStarContainer">
              <span id="star"> ⭐⭐⭐⭐⭐ </span>({rating}) / 5
              <div className="productScreenbuttons">
                {discount && (
                  <dicount className="discount">
                    {" "}
                    {Math.floor(a * b) + ".00"}{" "}
                  </dicount>
                )}
                <strong>
                  <span id="price"> $ {price}</span>
                </strong>
                <button
                  id="productScreenBtn"
                  type="button"
                  class="btn btn-success"
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
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProductScreen;
