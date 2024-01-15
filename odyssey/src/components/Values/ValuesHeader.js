import React, { useState } from "react";
import "./ValuesHeader.css";

function ValuesHeader() {
  return (
    <div className="container-values">
      <img
        src={"/images/C. Dagg (27 of 35) (1).png"}
        className="img-hdr"
        alt="logo"
      ></img>
      <div className="content-overlay">
        <h1 className="h1-content">Our Values.</h1>
        <h4>
          With years of academic, competitive, educational and real-world
          experience, we’re ready to help you achieve your goals.
        </h4>
      </div>
      {/* <div className="image-header-container-overlay"></div> */}
    </div>
  );
}

export default ValuesHeader;
