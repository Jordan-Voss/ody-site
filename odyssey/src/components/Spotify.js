import React from "react";
import "./Spotify.css";

const Spotify = () => {
  return (
    <div className="spotify-container">
      <h1>Check Out Our Podcast!</h1>
      <iframe
        style={{ borderRadius: "12px", marginBottom: "5%" }}
        src="https://open.spotify.com/embed/show/7D5k6HgKinuD14Z6UWlYzV?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoPlay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
