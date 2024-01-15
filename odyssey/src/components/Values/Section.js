import React, { useState } from "react";
import "./Section.css";

function Section() {
  return (
    <div className="cont">
      <h2>The Hits</h2>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "10px" }}>
          We are an online coaching organization, communicating remotely with
          athletes around the world and developing comprehensive training plans.
          We focus both on manipulating training variables over time and working
          with the athlete as they progress from beginner to advanced. All
          training plans include evidence-based guidance on technique,
          nutrition, sports psychology, and of course training.
        </div>
        <div style={{ flex: 1 }}>
          We serve athletes both in creating one-off training plans, and also in
          a weekly capacity creating yearly training and growth. We work with
          athletes just discovering powerlifting through athletes at the highest
          levels of competition. Outside training, we strive to educate and
          provide resources to drive the strength community forward and into the
          future.
        </div>
      </div>
    </div>
  );
}

export default Section;
