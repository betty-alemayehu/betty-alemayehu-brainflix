import React from "react";
import "./VideoPlayer.scss";

export default function VideoPlayer({ currentVideo }) {
  if (!currentVideo) {
    return <p>Loading video...</p>;
  }

  const { image, video, id } = currentVideo;

  // Dynamically append the api_key from the environment variable to allow for video playing
  // const videoUrlWithKey = `${video}?api_key=${import.meta.env.VITE_API_KEY}`;

  return (
    <div className="video-player">
      {/* Video Section */}
      <div className="video-player__video-container">
        <figure>
          <video
            key={id}
            className="video-player__video"
            controls
            poster={image}
          >
            <source src={video} type="video/mp4" />
            Uh-oh...loading error!
          </video>
        </figure>
      </div>
    </div>
  );
}
