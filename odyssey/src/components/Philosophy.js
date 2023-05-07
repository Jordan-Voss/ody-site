import React, { useState } from "react";
import "./Philosophy.css";
import { BtnPhilosophy } from './BtnPhilosophy';

function Philosophy() {
  return (
    <div className="container-phspy">
      <img src="/images/phspy.JPG" className="phspy-img" alt="logo" />
      <div className="overlay">
        <h3 className="phspy-text">
          We believe in working with the individual and provide an empathy
          driven powerlifting coaching service and a meaningful support network.
        </h3>
        <BtnPhilosophy
					className='btns'
					text={"Our Philosophy"}
				>
					
				</BtnPhilosophy>
      </div>
    </div>
  );
}

export default Philosophy;
