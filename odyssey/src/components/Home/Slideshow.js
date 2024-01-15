import React, { useState, useEffect } from "react";

const Slideshow = ({ interval, startingIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(startingIndex);

  const images = [
    "/images/Promo (5 of 20) Small.jpeg",
    "/images/J.Butler (36 of 41) Small.jpeg",
    "/images/J.Butler (30 of 41) Small.jpeg",
    "/images/J.Butler (23 of 41) Small.jpeg",
    "/images/J.Butler (7 of 41) Small.jpeg",
    "/images/J.Butler (5 of 41) Small.jpeg",
    "/images/J_V (33 of 41) Small.jpeg",
    "/images/J_V (18 of 41) Small.jpeg",
    "/images/J_V (17 of 41) Small.jpeg",
    "/images/J_V (15 of 41) Small.jpeg",
    "/images/J_V (12 of 41) Small.jpeg",
    "/images/J_V (4 of 41) Small.jpeg",
    "/images/J_C (39 of 42) Small.jpeg",
    "/images/J_C (37 of 42) Small.jpeg",
    "/images/J_C (10 of 42) Small.jpeg",
    "/images/J_C (7 of 42) Small.jpeg",
    "/images/IrishPF (1 of 16) Small.jpeg",
    "/images/DSC01016 Small.jpeg",
    "/images/DSC00995 Small.jpeg",
    "/images/DSC00994 Small.jpeg",
    "/images/DSC00993 Small.jpeg",
    "/images/DSC00992 Small.jpeg",
    "/images/DSC00936 Small.jpeg",
    "/images/DSC00847 Small.jpeg",
    "/images/DSC00846 Small.jpeg",
    "/images/DSC00845 Small.jpeg",
    "/images/DSC00844 Small.jpeg",
    "/images/DSC00843 Small.jpeg",
    "/images/DSC00842 Small.jpeg",
    "/images/DSC00841 Small.jpeg",
    "/images/DSC00840 Small.jpeg",
    "/images/C. Dagg (27 of 35) Small.jpeg",
    "/images/C. Dagg (27 of 35) (1) Small.jpeg",
    "/images/C. Dagg (24 of 35)(1) Small.jpeg",
    "/images/C. Dagg (24 of 35)(1) (1) Small.jpeg",
    "/images/C. Dagg (5 of 35)(1) Small.jpeg",
    "/images/C. Dagg (5 of 35)(1) (1) Small.jpeg",
    "/images/C. Dagg (3 of 35) Small.jpeg",
    "/images/C. Dagg (3 of 35) (1) Small.jpeg",
    "/images/Adam Phillips (37 of 39)(1) Small.jpeg",
    "/images/Adam Phillips (37 of 39)(1) (1) Small.jpeg",
    "/images/A_R (37 of 39) Small.jpeg",
    "/images/A_R (37 of 39) (1) Small.jpeg",
    "/images/A_R (19 of 39)(1) Small.jpeg",
    "/images/A_R (19 of 39)(1) (1) Small.jpeg",
    "/images/A_R (10 of 39)(1) Small.jpeg",
    "/images/A_R (10 of 39)(1) (1) Small.jpeg",
    "/images/A_R (3 of 39) Small.jpeg",
    "/images/A_L (44 of 44) Small.jpeg",
    "/images/A_L (42 of 44) Small.jpeg",
    "/images/A_L (41 of 44) Small.jpeg",
    "/images/A_L (30 of 44) Small.jpeg",
    "/images/A_L (26 of 44) Small.jpeg",
    "/images/A_L (17 of 44) Small.jpeg",
    "/images/A_L (4 of 44) Small.jpeg",
    "/images/Promo (5 of 20) Small.jpeg",
    "/images/J.Butler (36 of 41) Small.jpeg",
    "/images/J.Butler (30 of 41) Small.jpeg",
    "/images/J.Butler (23 of 41) Small.jpeg",
    "/images/J.Butler (7 of 41) Small.jpeg",
    "/images/J.Butler (5 of 41) Small.jpeg",
    "/images/J_V (33 of 41) Small.jpeg",
    "/images/J_V (18 of 41) Small.jpeg",
    "/images/J_V (17 of 41) Small.jpeg",
    "/images/J_V (15 of 41) Small.jpeg",
    "/images/J_V (12 of 41) Small.jpeg",
    "/images/J_V (4 of 41) Small.jpeg",
    "/images/J_C (39 of 42) Small.jpeg",
    "/images/J_C (37 of 42) Small.jpeg",
    "/images/J_C (10 of 42) Small.jpeg",
    "/images/J_C (7 of 42) Small.jpeg",
    "/images/IrishPF (1 of 16) Small.jpeg",
    "/images/DSC01016 Small.jpeg",
    "/images/DSC00995 Small.jpeg",
    "/images/DSC00994 Small.jpeg",
    "/images/DSC00993 Small.jpeg",
    "/images/DSC00992 Small.jpeg",
    "/images/DSC00936 Small.jpeg",
    "/images/DSC00847 Small.jpeg",
    "/images/DSC00846 Small.jpeg",
    "/images/DSC00845 Small.jpeg",
    "/images/DSC00844 Small.jpeg",
    "/images/DSC00843 Small.jpeg",
    "/images/DSC00842 Small.jpeg",
    "/images/DSC00841 Small.jpeg",
    "/images/DSC00840 Small.jpeg",
    "/images/C. Dagg (27 of 35) Small.jpeg",
    "/images/C. Dagg (27 of 35) (1) Small.jpeg",
    "/images/C. Dagg (24 of 35)(1) Small.jpeg",
    "/images/C. Dagg (24 of 35)(1) (1) Small.jpeg",
    "/images/C. Dagg (5 of 35)(1) Small.jpeg",
    "/images/C. Dagg (5 of 35)(1) (1) Small.jpeg",
    "/images/C. Dagg (3 of 35) Small.jpeg",
    "/images/C. Dagg (3 of 35) (1) Small.jpeg",
    "/images/Adam Phillips (37 of 39)(1) Small.jpeg",
    "/images/Adam Phillips (37 of 39)(1) (1) Small.jpeg",
    "/images/A_R (37 of 39) Small.jpeg",
    "/images/A_R (37 of 39) (1) Small.jpeg",
    "/images/A_R (19 of 39)(1) Small.jpeg",
    "/images/A_R (19 of 39)(1) (1) Small.jpeg",
    "/images/A_R (10 of 39)(1) Small.jpeg",
    "/images/A_R (10 of 39)(1) (1) Small.jpeg",
    "/images/A_R (3 of 39) Small.jpeg",
    "/images/A_L (44 of 44) Small.jpeg",
    "/images/A_L (42 of 44) Small.jpeg",
    "/images/A_L (41 of 44) Small.jpeg",
    "/images/A_L (30 of 44) Small.jpeg",
    "/images/A_L (26 of 44) Small.jpeg",
    "/images/A_L (17 of 44) Small.jpeg",
    "/images/A_L (4 of 44) Small.jpeg"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    }, interval); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    objectFit: "fill",
    transition: "opacity 1s ease-out",
    opacity: 0
  };

  imageStyle.opacity = 1;

  const containerStyle = {
    position: "relative",
    height: "100%", // Subtract the footer height from the screen height
    width: "100%"
  };
  return (
    <div style={containerStyle}>
      {/* <h1>{interval}</h1> */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={"Slideshow image ${index + 1}"}
          style={{
            ...imageStyle,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0
          }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
