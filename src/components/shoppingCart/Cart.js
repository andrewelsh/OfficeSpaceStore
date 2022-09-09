import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./cart.css";
import Header from "../Header";
import Footer from "../Footer";
import Data from "../../Data";

const Cart = () => {
  const location = useLocation();
  // Need to set localStorage as the state for the value to be recalled on refresh / reload.
  const [count, setCount] = useState(parseInt(localStorage.length) - 1);

  let cartStorageArray = [];
  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      cartStorageArray.push(localStorage.getItem(localStorage.key(i)));
    }
  }, [localStorage.length]);
  console.log(cartStorageArray);

  const singleProduct = Data.products.find((items) => items.id === parseInt(1));

  function handleClearCart() {
    alert("Your Shopping Cart Has Been Cleared Of All Items");
    localStorage.clear();
  }

  function handleCartCount() {
    setCount(location.state > 0 ? location.state : 0);
  }

  function sub() {
    setCount((prev) => (prev > 0 ? parseInt(prev) - 1 : prev));
  }
  function add() {
    setCount((prev) => parseInt(prev) + 1);
  }

  function handlePlaceOrder() {
    alert(
      "Payments will be handled by Stripe (3rd Party Software) \n\n\n https://stripe.com/"
    );
  }
  // This will load localStorage with current count.
  useEffect(() => {
    localStorage.setItem("state", count);
    console.log("localStorage.length (items in cart) is: " + count);
  }, [count]);

  return (
    <div>
      <Header count={localStorage.length - 1} />
      <div className="shoppingCart">
        <img
          className="shoppingCartImage"
          src="https://i.shgcdn.com/e5911dbd-c7a4-4daa-a774-292d9157456f/-/format/auto/-/preview/3000x3000/-/quality/better/"
          alt="some random pic"
        />
        <div>
          <h4>
            {count > 0 ? "(" + count + " x) Items In Cart" : "No Items In Cart"}
          </h4>
          <h4>{singleProduct.title}</h4>
          <button
            onClick={add}
            type="button"
            id="cartCountBtn"
            className="btn btn-secondary"
          >
            {" "}
            +{" "}
          </button>
          <button
            type="button"
            id="cartCountBtn"
            className="btn btn-secondary"
            onClick={sub}
          >
            {" "}
            -{" "}
          </button>

          <div>
            <p>Price 109.99 </p>
            <p>
              Taxes{" "}
              {count > 0 ? (109.99 * 0.15).toFixed(2) : "$" + (0).toFixed(2)}{" "}
            </p>
            <p>Shipping Free</p>
            <p>
              Total :
              <strong> $ {Math.floor(count * 109.99 * 1.15).toFixed(2)}</strong>
            </p>

            <button
              onClick={handlePlaceOrder}
              id="cartCountBtn"
              type="button"
              className="btn btn-success"
            >
              Place Your Order
            </button>
            <Link to="/" state={count}>
              <button id="cartCountBtn" type="button" className="btn btn-dark">
                Cancel
              </button>
              <button
                id="cartCountBtn"
                type="button"
                className="btn btn-danger"
                onClick={handleClearCart}
              >
                Clear Your Cart
              </button>
            </Link>
            <p id="subText">
              By placing your order you agree to OfficeSpace's privacy notice
              and conditions of use.
            </p>

            <div className="cartCount" onClick={() => handleCartCount}></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
