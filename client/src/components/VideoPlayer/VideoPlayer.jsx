import React from "react";
import "./VideoPlayer.scss";

export default function VideoPlayer({ currentVideo }) {
  const { image, video } = currentVideo;

  if (!currentVideo) {
    return <p>Loading video...</p>;
  }

  // Dynamically append the api_key from the environment variable to allow for video playing
  const videoUrlWithKey = `${video}?api_key=${import.meta.env.VITE_API_KEY}`;

  return (
    <div className="video-player">
      {/* Video Section */}
      <div className="video-player__video-container">
        <figure>
          <video className="video-player__video" controls poster={image}>
            <source src={videoUrlWithKey} type="video/mp4" />
            Some error message here...
          </video>
        </figure>
      </div>
    </div>
  );
}
