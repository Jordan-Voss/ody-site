import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SpotifyPlayer from "react-spotify-web-playback";

function PodcastPlayer() {
  const [accessToken, setAccessToken] = useState(null);
  const [latestEpisodeUri, setLatestEpisodeUri] = useState(null);

  useEffect(() => {
    // Initialize the Spotify Web API client with your access token
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(accessToken);

    // Get the latest episode of your podcast
    spotifyApi.getEpisodes("your-podcast-id", { limit: 1 }).then(data => {
      const latestEpisode = data.items[0];
      setLatestEpisodeUri(latestEpisode.uri);
    });
  }, [accessToken]);

  return (
    <div>
      {latestEpisodeUri && (
        <SpotifyPlayer
          token={accessToken}
          uris={[latestEpisodeUri]}
          play={true}
          magnifySliderOnHover={true}
        />
      )}
    </div>
  );
}
export default PodcastPlayer;
