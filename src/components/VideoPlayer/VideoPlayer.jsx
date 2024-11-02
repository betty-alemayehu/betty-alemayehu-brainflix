import React from "react";
import "./VideoPlayer.scss";

export default function VideoPlayer({ currentVideo }) {
  const { image, video } = currentVideo;

  if (!currentVideo) {
    return <p>Loading video...</p>;
  }

  return (
    <div className="video-player">
      {/* Video Section */}
      <div className="video-player__video-container">
        <figure>
          <video className="video-player__video" controls poster={image}>
            <source src={video} type="video/mp4" />
            Some error message here...
          </video>
        </figure>
      </div>
    </div>
  );
}
