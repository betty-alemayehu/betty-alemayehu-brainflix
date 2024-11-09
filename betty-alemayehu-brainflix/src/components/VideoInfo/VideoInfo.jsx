import React from "react";
import "./VideoInfo.scss";
import "../../App.jsx";
// import viewsIcon from "../../assets/images/Icons/views.svg";
// import likeIcon from "../../assets/images/Icons/likes.svg";
import { formatDistanceToNow } from "date-fns";

const URL = import.meta.env.VITE_API_URL;

export default function VideoInfo({ currentVideo }) {
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
            {/* {new Date(timestamp).toLocaleDateString()} */}
            {formatDistanceToNow(new Date(timestamp), {
              addSuffix: true,
            })}
          </p>
        </div>

        {/* Stats Section */}
        <div className="now-playing-copy__stats">
          <div className="now-playing-copy__stat">
            <img
              src={`${URL}/Icons/views.svg`}
              alt="View count"
              className="now-playing-copy__icon"
            />
            <p className="now-playing-copy__watch-count text-secondary">
              {views}
            </p>
          </div>
          <div className="now-playing-copy__stat">
            <img
              src={`${URL}/Icons/likes.svg`}
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
