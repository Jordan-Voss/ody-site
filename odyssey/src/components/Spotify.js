import React from "react";
import "./Spotify.css";
import { useState, useEffect } from "react";
import { SpotifyPlayer } from "react-spotify-web-playback";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "7D5k6HgKinuD14Z6UWlYzV";
const redirectUri = "http://localhost:3000/callback";
const scopes = ["user-read-currently-playing", "user-read-playback-state"];

const Spotify = () => {
  const token = "your access token goes here";
  const uris = ["spotify:show:7D5k6HgKinuD14Z6UWlYzV"];

  return (
    <SpotifyPlayer
      token={token}
      uris={uris}
      onError={e => console.log("Error", e)}
    />
  );
};
// useEffect(() => {
//     async function getEpisode() {
//       const response = await spotifyApi.getShowEpisodes("YOUR_SHOW_ID_HERE");
//       setEpisode(response.items[0]);
//     }
//     getEpisode();
//   }, []);

//   return (
//     <div className="spotify-container">
//       <h1>Check Out Our Podcast!</h1>
//       <iframe
//         style={{ borderRadius: "12px", marginBottom: "5%" }}
//         src="https://open.spotify.com/embed/show/7D5k6HgKinuD14Z6UWlYzV?utm_source=generator&theme=0"
//         width="100%"
//         height="352"
//         frameBorder="0"
//         allowfullscreen=""
//         allow="auto{}lay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//         loading="lazy"
//       ></iframe>
//     </div>
//   );
// };

export default Spotify;
