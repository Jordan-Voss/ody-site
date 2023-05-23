import React, { useEffect, useRef, useState } from "react";
import "./Team.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Team() {
  const [isHovered, setIsHovered] = useState(false);
  const [slide, setSlide] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (event) => {
    console.log(`Slide changed to index ${event.item}.`);
    setSlideIndex(event.item);
  };

  // const handleMouseEnter = () => {
  //   setSlideIndex(-1);
  // };

  // const handleMouseLeave = () => {
  //   setSlideIndex(0);
  // };
  const [textMain, setTextMain] = useState("Meet Our Team");
  const [textRest, setTextRest] = useState(
    "Our dedicated coaches here to help you on your journey as an athlete"
  );
  const onSlideChange = (e) => {
    setSlide(e.slide);
  };

  const onHover = ({ main, rest }) => {
    setIsHovered(true);
    setTextMain(main);
    setTextRest(rest);
    setSlideIndex(-1);
  };

  const onLeave = () => {
    setIsHovered(false);
    setTextMain("Meet Our Team");
    setTextRest(
      "Our dedicated coaches here to help you on your journey as an athlete"
    );
    setSlideIndex(0);
  };

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div
      key={1}
      className="item"
      // key={index}
      onMouseEnter={() =>
        onHover({
          main: "Adam",
          rest: "Head Coach Owner",
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
      <img
        src="/images/coach.png"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div
      key={2}
      className="item"
      onMouseEnter={() =>
        onHover({
          main: "Jono",
          rest: "Stong",
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
      <img
        src="/images/coach2.png"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div
      key={3}
      className="item"
      onMouseEnter={() =>
        onHover({
          main: "Jordan",
          rest: "Me",
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
      <img
        src="/images/coach3.png"
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
  ];
  const carouselItems = [
    { src: "/images/coach.png", main: "Adam", rest: "Head Coach Owner" },
    { src: "/images/coach2.png", main: "Jono", rest: "Stong" },
    { src: "/images/coach3.png", main: "Jordan", rest: "Me" },
    { src: "/images/coach.png", main: "Adam", rest: "Head Coach Owner" },
    { src: "/images/coach2.png", main: "Jono", rest: "Stong" },
    { src: "/images/coach3.png", main: "Jordan", rest: "Me" },
  ];
  const handleSwipe = (event) => {
    if (isHovered) {
      setIsHovered(false);
    }
  };
  const options = {
    // infinite: false,
    // disableDotsControls: true,
    autoplay: true,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3, // Number of items to show on screens smaller than 768px
      },
      1024: {
        items: 4, // Number of items to show on screens smaller than 1024px
      },
    },
    // disableDotsControls: true,
    // disableButtonsControls: true,
    // mouseDragEnabled: true,
    // disableSlideInfo: slideIndex !== 0,
    // onSlideChanged: handleSlideChange(),
  };
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
        {/* <AliceCarousel
          mouseTracking
          items={items}
          {...options}
          infinite
          disableDotsControls
          disableButtonsControls={isHovered}
          mouseDragEnabled={!isHovered}
          disableSlideInfo={!isHovered}
          disableSlideGestures={isHovered}
          swipeDelta={0.5}
          onSlideChanged={handleSlideChange}
          onSlideEnd={handleSwipe}
        ></AliceCarousel> */}
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={500}
          emulateTouch={true}
          showStatus={false}
          dynamicHeight={true}
        >
          {carouselItems.map((item, index) => (
            <div key={index}>
              <img src={item.src} alt={item.caption} />
              <p className="legend">{item.caption}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Team;
