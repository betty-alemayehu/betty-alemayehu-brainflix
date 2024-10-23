import React from "react";
import "./NextVideos.scss";

// Test image icons
const userIcon = "src/assets/images/Icons/views.svg";

export default function NextVideos({ videos }) {
  return (
    <div className="next-videos">
      {/* Next Videos Section */}
      <h4 className="label">Next Videos</h4>
      <ul className="next-videos__list">
        {videos.map((video) => (
          <li key={video.id} className="next-videos__card">
            <div className="next-videos__thumbnail-wrapper">
              <img
                src={video.image}
                alt="video thumbnail image"
                className="next-videos__thumbnail"
              />
            </div>
            <div className="next-videos__info">
              <p className="next-videos__title av-demi">{video.title}</p>
              <p className="next-videos__channel">{video.channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
