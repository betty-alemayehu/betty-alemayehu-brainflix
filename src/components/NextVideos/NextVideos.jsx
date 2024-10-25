import React from "react";
import "./NextVideos.scss";

// Test image icons
const userIcon = "src/assets/images/Icons/views.svg";

export default function NextVideos({ videos, onSelectVideo }) {
  return (
    <div className="next-videos">
      {/* Next Videos Section */}
      <h2 className="label">Next Videos</h2>
      <ul className="next-videos__list">
        {videos.map((video) => (
          <li
            key={video.id}
            className="next-videos__card"
            onClick={() => onSelectVideo(video.id)}
          >
            <div className="next-videos__thumbnail-wrapper">
              <img
                src={video.image}
                alt={video.title}
                className="next-videos__thumbnail"
              />
            </div>
            <div className="next-videos__info">
              <h3 className="next-videos__title">{video.title}</h3>
              <p className="next-videos__channel">{video.channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
