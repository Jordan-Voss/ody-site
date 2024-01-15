import React, { useEffect, useState } from "react";
import SpotifyComponent from "../Home/Spotify";

const ScrollContentComponent = () => {
  // state to store the content
  const [content, setContent] = useState([]);

  // effect to add content when scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Add new content to the array
        setContent((prevContent) => [
          ...prevContent,
          <SpotifyComponent></SpotifyComponent>,
        ]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Render the content */}
      {content.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {/* Render the table */}
      <table>
        <tbody>
          {content.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollContentComponent;
