import React from "react";
import "./NowPlayingCopy.scss";
import "../../App.jsx";

//test image icons
const viewsIcon = "src/assets/images/Icons/views.svg";
const likeIcon = "src/assets/images/Icons/likes.svg";

export default function NowPlayingCopy({ videoDetails }) {
  return (
    <div className="video-player">
      {/* Video Title */}
      <div>
        <h1 className="video-player__title">{videoDetails[0].title}</h1>
      </div>

      {/* Video Details Section */}
      <div className="video-player__details">
        <div className="video-player__publisher-date">
          <p className="video-player__publisher av-bold">
            {videoDetails[0].channel}
          </p>
          <p className="video-player__date text-secondary">
            {new Date(videoDetails[0].timestamp).toLocaleDateString()}
          </p>
        </div>

        {/* Stats Section */}
        <div className="video-player__stats">
          <div className="video-player__stat">
            <img
              src={viewsIcon}
              alt="View count"
              className="video-player__icon"
            />
            <p className="video-player__watch-count text-secondary">
              {videoDetails[0].views}
            </p>
          </div>
          <div className="video-player__stat">
            <img src={likeIcon} alt="Likes" className="video-player__icon" />
            <p className="video-player__likes text-secondary">
              {videoDetails[0].likes}
            </p>
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="video-player__description-container">
        <p className="video-player__description">
          {videoDetails[0].description}
        </p>
      </div>
    </div>
  );
}
