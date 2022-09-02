import React from "react";
import { Link } from "react-router-dom";
import Data from "../Data";

const Featured = () => {
  let i = 1;
  let title = Data.products[i].title;
  let description = Data.products[i].description;
  let dataImages = Data.products[i].images[0];
  return (
    <div>
      <center>
        <Link to={"/SingleProductScreen/2"}>
          <h1 id="featuredTitle">THE NEW 2022 {title.toUpperCase()}</h1>
          <div className="flex">
            <img id="featuredImage" src={dataImages} alt={title} />
            <img
              id="featuredImage"
              src={Data.products[i].images[1]}
              alt={title}
            />
            <img
              id="featuredImage"
              src={Data.products[i].images[2]}
              alt={title}
            />
          </div>
        </Link>
        <p id="featuredDescription">{description}</p>
        <hr />
        <hr />
      </center>
    </div>
  );
};

export default Featured;
