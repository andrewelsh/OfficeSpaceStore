import "./Header.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <Nav id="header" className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        OFFICE SPACE
      </Link>
      <span id="shoppingCart" onClick={props.handleAddToCart}>
        <span id="shoppingCartState">{props.cartCount}</span>
        🛒
      </span>
    </Nav>
  );
}

export default Header;
