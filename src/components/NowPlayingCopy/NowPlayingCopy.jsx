import React from "react";
import "./NowPlayingCopy.scss";
import "../../App.jsx";

//test image icons
const viewsIcon = "src/assets/images/Icons/views.svg";
const likeIcon = "src/assets/images/Icons/likes.svg";

export default function NowPlayingCopy({ currentVideo }) {
  const { title, channel, timestamp, views, likes, description } = currentVideo;

  return (
    <div className="now-playing-copy">
      {/* Video Title */}
      <div>
        <h1 className="now-playing-copy__title">{title}</h1>
      </div>

      {/* Video Details Section */}
      <div className="now-playing-copy__details">
        <div className="now-playing-copy__publisher-date">
          <h3 className="now-playing-copy__publisher">{channel}</h3>
          <p className="now-playing-copy__date text-secondary">
            {new Date(timestamp).toLocaleDateString()}
          </p>
        </div>

        {/* Stats Section */}
        <div className="now-playing-copy__stats">
          <div className="now-playing-copy__stat">
            <img
              src={viewsIcon}
              alt="View count"
              className="now-playing-copy__icon"
            />
            <p className="now-playing-copy__watch-count text-secondary">
              {views}
            </p>
          </div>
          <div className="now-playing-copy__stat">
            <img
              src={likeIcon}
              alt="Likes"
              className="now-playing-copy__icon"
            />
            <p className="now-playing-copy__likes text-secondary">{likes}</p>
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="now-playing-copy__description-container">
        <p className="now-playing-copy__description">{description}</p>
      </div>
    </div>
  );
}
