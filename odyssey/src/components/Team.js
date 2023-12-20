import React, { useEffect, useRef, useState } from "react";
import "./Team.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CoachCard from "./CoachCard";

function Team() {
  const coaches = [
    {
      name: "Adam Phillips",
      position: "Owner / Head Coach",
      image: "/images/C. Dagg (3 of 35).png",
      colour: "red",
      fname: "Adam",
      link: "/",
    },
  ];
  // {
  //   name: "Conor Campbell",
  //   position: "Coach",
  //   image: "/images/coach2.png",
  //   colour: "blue",
  //   fname: "Conor",
  //   link: "/",
  // },
  // {
  //   name: "Clarice Tighe",
  //   position: "Coach",
  //   image: "/images/coach3.png",
  //   colour: "green",
  //   fname: "Clarice",
  //   link: "/",
  // },
  // {
  //   name: "Nathan Keenan",
  //   position: "Coach",
  //   image: "/images/coach.png",
  //   colour: "orange",
  //   fname: "Nathan",
  //   link: "/",
  // },
  // {
  //   name: "Andrew Roe",
  //   position: "Coach",
  //   image: "/images/coach2.png",
  //   colour: "yellow",
  //   fname: "Andrew",
  //   link: "/",
  // },
  // {
  //   name: "Dermot Scagg",
  //   position: "Coach",
  //   image: "/images/coach3.png",
  //   colour: "purple",
  //   fname: "Dermot",
  //   link: "/",
  // },
  return (
    <div className="hero-team">
      <div className="hero-team__inner">
        <h1 className="hero-team__title">Meet Our Team</h1>
        <p className="hero-team__subtitle">
          <span className="hero-team-text">
            Our dedicated coaches here to help you on your journey as an athlete
          </span>
        </p>
      </div>
      <div className="box-container">
        {coaches.map((coach) => (
          <CoachCard coach={coach} />
        ))}
      </div>
    </div>
  );
}

export default Team;
