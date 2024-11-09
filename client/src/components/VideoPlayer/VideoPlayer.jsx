import React from "react";
import "./VideoPlayer.scss";

export default function VideoPlayer({ currentVideo }) {
  if (!currentVideo) {
    return <p>Loading video...</p>;
  }

  const { image, video, id } = currentVideo;

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
