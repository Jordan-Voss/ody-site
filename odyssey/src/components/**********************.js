import React, { useEffect, useRef, useState } from "react";
import "./Team.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Team() {
  const [isHovered, setIsHovered] = useState(false);
  const [textMain, setTextMain] = useState("Meet Our Team");
  const [textRest, setTextRest] = useState(
    "Our dedicated coaches here to help you on your journey as an athlete"
  );
  const options = {
    items: 2,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    // startPosition: 1,
    navText: [
      '<i class="fa fa-chevron-left fa-lg"></i>', // Left arrow icon or text
      '<i class="fa fa-chevron-right fa-lg"></i>', // Right arrow icon or text
    ],
    responsive: {
      0: {****************************************************************************************
        items: 2, // Number of items to show on screens smaller than 0px
      },
      768: {
        items: 3, // Number of items to show on screens smaller than 768px
      },
      1024: {
        items: 4, // Number of items to show on screens smaller than 1024px
      },
    },
    // margin: 20, // Adjust as needed
    // stagePadding: 50, // Adjust as needed
    mouseDrag: false,
  };
  const onHover = ({ main, rest }) => {
    setIsHovered(true);
    setTextMain(main);
    setTextRest(rest);
  };

  const onLeave = () => {
    setIsHovered(false);
    setTextMain("Meet Our Team");
    setTextRest(
      "Our dedicated coaches here to help you on your journey as an athlete"
    );
  };

  const carouselItems = [
    { src: "/images/coach.png", main: "Adam", rest: "Head Coach Owner" },
    { src: "/images/coach2.png", main: "Jono", rest: "Stong" },
    { src: "/images/coach3.png", main: "Jordan", rest: "Me" },
    { src: "/images/coach.png", main: "Adam", rest: "Head Coach Owner" },
    { src: "/images/coach2.png", main: "Jono", rest: "Stong" },
    { src: "/images/coach3.png", main: "Jordan", rest: "Me" },
  ];
  return (
    <div className="hero-team">
      <div className="hero-team__inner">
        <h1 className="hero-team__title">
          {isHovered ? textMain : "Meet Our Team"}
        </h1>
        <p className="hero-team__subtitle">
          <span className="hero-team__subtitle--trim">
            {isHovered
              ? textRest
              : "Our dedicated coaches here to help you on your journey as an athlete"}
          </span>
        </p>
        <p className="hero-team__subtitle">{isHovered.toString()}</p>
      </div>
      <div className="carousel-container">
        <OwlCarousel className="owl-theme" {...options}>
          {carouselItems.map((item, index) => (
            <div
              className="item"
              key={index}
              onMouseEnter={() =>
                onHover({
                  main: item.main,
                  rest: item.rest,
                  isHoveredItem: true,
                })
              }
              onMouseLeave={() =>
                onLeave({
                  main: "Meet Our Team",
                  rest: "Our dedicated coaches here to help you on your journey as an athlete",
                  isHoveredItem: false,
                })
              }
            >
              <img src={item.src} alt={`Image '${index}'`} />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Team;
