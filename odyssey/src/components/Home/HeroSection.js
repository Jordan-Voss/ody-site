import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/ody2.mp4" autoPlay={true} loop muted />
      <h1>&nbsp;Odysey Strength&nbsp;</h1>
      <p>An Epic Journey</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Join Today
        </Button>
        {/* <Button
					className='btns'
					buttonStyle='btn--primary'
					buttonSize='btn--large'
					onClick={console.log('hey')}
				>
					WATCH TRAILER <i className='far fa-play-circle' />
				</Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
