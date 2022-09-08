import "./Header.css";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header({ count }) {
  return (
    <Nav id="header" className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand" state={count}>
        OFFICE SPACE
      </Link>
      <span id="shoppingCart">
        <span id="shoppingCartState">{parseInt(count)}</span>

        <Link to="/checkout">🛒</Link>
      </span>
    </Nav>
  );
}

export default Header;
