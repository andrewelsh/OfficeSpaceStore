import React from "react";

let style = { color: "red" };
let img = (
  <img
    src="https://cdn0.iconfinder.com/data/icons/smiley-emoticons-handdrawn/100/27-512.png"
    alt="lost emoji"
    width="100px"
  />
);
const Error = () => {
  React.useEffect(() => {
    setInterval(() => {
      window.location.replace("http://localhost:3000/");
    }, 2000);
  }, []);
  return (
    <div>
      <center>
        <br />
        <br />
        <br />
        <h1>
          ERROR 404. <span style={style}>YOU'RE OFFICALLY LOST</span>.{img}
          <hr />
          <p> Prepare to be re-directed somewhere more useful. :) </p>
          <hr />
        </h1>
      </center>
    </div>
  );
};

export default Error;
