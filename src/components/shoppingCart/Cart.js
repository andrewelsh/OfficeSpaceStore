import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./cart.css";
import Header from "../Header";
import Footer from "../Footer";

const Cart = () => {
  const location = useLocation();
  // Need to set localStorage as the state for the value to be recalled on refresh / reload.
  const [count, setCount] = useState(localStorage.state);

  function handleCartCount() {
    setCount(location.state > 0 ? location.state : 0);
  }

  function sub() {
    setCount((prev) => (prev > 0 ? parseInt(prev) - 1 : prev));
  }
  function add() {
    setCount((prev) => parseInt(prev) + 1);
  }

  function reset() {
    setCount(0);
  }

  // This will load localStorage with current count.
  useEffect(() => {
    localStorage.setItem("state", count);
    console.log("Shopping Cart Count is :" + localStorage.state);
  }, [count]);

  return (
    <div>
      <Header count={count} />
      <div className="shoppingCart">
        <img
          className="shoppingCartImage"
          src="https://i.shgcdn.com/e5911dbd-c7a4-4daa-a774-292d9157456f/-/format/auto/-/preview/3000x3000/-/quality/better/"
          alt="some random pic"
        />
        <div>
          <h4>{count > 0 ? "(" + count + " x) Key Board" : "Key Board"}</h4>
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
          <button
            type="button"
            id="cartCountBtn"
            className="btn btn-secondary"
            onClick={reset}
          >
            {" "}
            RESET{" "}
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

            <button id="cartCountBtn" type="button" className="btn btn-success">
              Place Your Order
            </button>
            <Link to="/" state={count}>
              <button id="cartCountBtn" type="button" className="btn btn-dark">
                Cancel
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