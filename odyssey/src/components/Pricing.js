import React from "react";
import "./Pricing.css";
import { BtnPhilosophy } from "./BtnPhilosophy";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="tier">
        <h2 className="title">ALL ACCESS COACHING</h2>
        <div className="price">€299 p/ 4 weeks</div>
        <ul className="features">
          <li>
            The most in-depth coaching experience that we offer. For individuals
            that wish to be highly invested in the coaching process.
          </li>
          <li>
            Daily one on one support with your coach via your communication
            medium of choice.
          </li>
          <li>Daily technical training analysis.</li>

          <li>
            Optional video conference after each block for a full debrief with
            coach.
          </li>
          <li>Full access to community groups and support structures.</li>
          <li>Meet day handling included.</li>
        </ul>
        <BtnPhilosophy className="butn" text="Get Started"></BtnPhilosophy>{" "}
      </div>
      <div className="tier featured">
        <h2 className="title">STANDARD COACHING</h2>
        <div className="price">€120 p/ 4 weeks</div>
        <ul className="features">
          <li>
            An individualized coaching experience. For athletes that are looking
            for a truly individualized style of coaching.
          </li>
          <li>
            Weekly check-in with your coach via your communication medium of
            choice.
          </li>
          <li>Weekly technical training analysis.</li>
          <li>
            Optional video conference after each block for a full debrief with
            coach.
          </li>
          <li>Full access to community groups and support structures.</li>
          <li className="bld">Student discount available!</li>
        </ul>
        <BtnPhilosophy className="butn" text="Get Started"></BtnPhilosophy>
      </div>
      <div className="tier">
        <h2 className="title">PROGRAMMING CONSULTATION</h2>
        <div className="price">€70 p/ 4 weeks</div>
        <ul className="features">
          <li>
            A fully individualized programming option for those who are limited
            by budget but interested in implementing our bottom's up approach to
            their training.
          </li>
          <li>
            Block to block video breakdown which includes a full debrief of
            previous training block and guidance on following training block.
          </li>
          <li>
            Access to Programming Consultation support groups and discord
            server. Not suitable for beginners.
          </li>
          <li className="bld">Student discount available!</li>
        </ul>
        <BtnPhilosophy className="butn" text="Get Started"></BtnPhilosophy>{" "}
      </div>
    </div>
  );
};

export default Pricing;
