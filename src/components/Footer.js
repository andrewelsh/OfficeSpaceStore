import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "rgba(33,37,41)" }}
    >
      <MDBContainer className="p-4"></MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "white" }}
      >
        Andre Welsh © 2022 Copyright:
      </div>
    </MDBFooter>
  );
}
