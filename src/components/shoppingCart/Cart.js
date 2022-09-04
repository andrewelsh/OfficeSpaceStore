import React from "react";
import ReactDOM from "react-dom";

const Cart = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>CART </h1>
    </div>,
    document.getElementById("portal")
  );
};

export default Cart;
