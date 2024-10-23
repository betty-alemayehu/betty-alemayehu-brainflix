import React from "react";
import "./VideoPlayer.scss";
import "../../App.jsx";

function VideoPlayer({ videoDetails }) {
  return (
    <div className="video-player">
      {/* Video Section */}
      <div className="video-player__video-container">
        <figure>
          <video
            className="video-player__video"
            controls
            poster={videoDetails[0].image}
          >
            <source src={videoDetails[0].video} type="video/mp4" />
            Some error message here...
          </video>
        </figure>
      </div>
    </div>
  );
}

export default VideoPlayer;
