import React from "react";
import { Link, useParams } from "react-router-dom";

// This is the unique product page

const ProductsCommerce = (props) => {
  const { anything } = useParams();
  console.log(props);
  return (
    <div>
      <Link
        to={{
          pathname: `/ProductScreen/${props.title}`,
        }}
      >
        <img src={props.image.url} alt={props.name} />
      </Link>
      <h1>{anything}</h1>
    </div>
  );
};

export default ProductsCommerce;
