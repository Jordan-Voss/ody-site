import React, { useRef, useEffect, useState } from "react";
import Slideshow from "./Slideshow";
import "./Gallery.css";
import Counter from "./Counter";

function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Gallery = () => {
  const components = [];
  const randomOrder = () => Math.random() - 0.5;

  // Sort the list randomly
  for (let i = 0; i < 112; i++) {
    components.push(
      <Slideshow
        interval={randomNumberInRange(1000, 45000)}
        key={i}
        startingIndex={i}
      />
    );
  }
  const componentsRandom = components.sort(randomOrder);

  return (
    <div className="gallery-container">
      <div className="gallery-images">
        <>{componentsRandom}</>
      </div>
      <div className="gallery-overlay">
        <div className="overlay-container">
          <div className="text1">
            <h1 className="h11">
              <Counter cnt={187} />
            </h1>
            <h3 className="h31"> Athletes (And Counting!)</h3>
          </div>
          <div className="text2">
            <h1 className="h12">
              <Counter cnt={50} />
            </h1>
            <h3 className="h31">National Champions</h3>
          </div>

          <div className="text3">
            <h1 className="h13">
              <Counter cnt={9} />
            </h1>
            <h3 className="h31">International Athletes</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
