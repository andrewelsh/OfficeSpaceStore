import React from "react";
import "./compents.css";

// This is where some conditional rendering can happen for each card.

const Card = (props) => {
  // Conditional formatting
  let maybe;
  if (props.openSpots === 0) {
    maybe = "SOLD OUT";
  } else {
    maybe = "AVAILABLE";
  }
  return <div>{maybe && <div className="maybe">{maybe}</div>}</div>;
};

export default Card;
