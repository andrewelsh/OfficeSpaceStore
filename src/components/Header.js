import "./Header.css";
import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header(props) {
  useEffect(() => {
    localStorage.setItem("cart count", props.state);
  }, [props.state]);
  console.log(localStorage);

  return (
    <Nav id="header" className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        OFFICE SPACE
      </Link>
      <span id="shoppingCart" onClick={props.handleAddToCart}>
        <span id="shoppingCartState">{props.state}</span>
        🛒
      </span>
    </Nav>
  );
}

export default Header;
