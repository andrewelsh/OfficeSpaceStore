import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import "./Footer.css";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "rgba(33,37,41)" }}
    >
      <div
        id="footerLogo"
        className="navbar navbar-dark bg-dark navbar-expand-lg"
      >
        {" "}
        OFFICE SPACE
      </div>
      <MDBContainer id="centerText" className="p-4">
        <div id="footerText"> SIGN UP FOR OUR CUSTOMER DEALS</div>
        <input className="footerInput" placeholder="rockinglife@everyday.com" />
      </MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "white" }}
      >
        Andre Welsh © 2022 Copyright:
      </div>
    </MDBFooter>
  );
}
