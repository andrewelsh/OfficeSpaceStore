import "./Header.css";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header({ count }) {
  console.log("This is the cart count from Header: " + localStorage.length - 1);
  return (
    <Nav id="header" className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand" state={localStorage.length - 1}>
        OFFICE SPACE
      </Link>
      <span id="shoppingCart">
        <span id="shoppingCartState">
          {localStorage.length === 0 ? null : localStorage.length - 1}
        </span>

        <Link to="/checkout">🛒</Link>
      </span>
    </Nav>
  );
}

export default Header;
