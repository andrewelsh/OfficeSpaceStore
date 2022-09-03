import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import "./Footer.css";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "rgba(33,37,41)" }}
    >
      <MDBContainer id="centerText" className="p-4">
        <div id="footerText"> SIGN UP FOR OUR CUSTOMER DEALS</div>
        <div className="footerInputBtn">
          <input
            className="footerInput"
            placeholder="rockinglife@everymoment.com"
          />
          <button type="button" class="btn btn-primary">
            JOIN US
          </button>
        </div>
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
