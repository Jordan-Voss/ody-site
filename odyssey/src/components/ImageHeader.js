import React from "react";
// import "../App.css";
import "./ImageHeader.css";

function ImageHeader(source) {
  const styles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
    backgroundImage: `url('${source}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="coaches-container">
      <img src={source.source} className="img-hdr" alt="logo"></img>
      <div className="content-overlay">
        <h1 className="h1-content">Coaches.</h1>
        <h4>
          With years of academic, competitive, educational and real-world
          experience, we’re ready to help you achieve your goals.
        </h4>
      </div>
      {/* <div className="image-header-container-overlay"></div> */}
    </div>
  );
}

export default ImageHeader;
