import React from "react";
import "./NowPlayingCopy.scss";
import "../../App.jsx";

//test image icons
const viewsIcon = "src/assets/images/Icons/views.svg";
const likeIcon = "src/assets/images/Icons/likes.svg";

export default function NowPlayingCopy({ currentVideo }) {
  const { title, channel, timestamp, views, likes, description } = currentVideo;

  return (
    <div className="video-player">
      {/* Video Title */}
      <div>
        <h1 className="video-player__title">{title}</h1>
      </div>

      {/* Video Details Section */}
      <div className="video-player__details">
        <div className="video-player__publisher-date">
          <h3 className="video-player__publisher">{channel}</h3>
          <p className="video-player__date text-secondary">
            {new Date(timestamp).toLocaleDateString()}
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
            <p className="video-player__watch-count text-secondary">{views}</p>
          </div>
          <div className="video-player__stat">
            <img src={likeIcon} alt="Likes" className="video-player__icon" />
            <p className="video-player__likes text-secondary">{likes}</p>
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="video-player__description-container">
        <p className="video-player__description">{description}</p>
      </div>
    </div>
  );
}
