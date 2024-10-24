import React from "react";
import "./NextVideos.scss";

// Test image icons
const userIcon = "src/assets/images/Icons/views.svg";

export default function NextVideos({ nextVideo }) {
  const { title, channel, image, id } = nextVideo;

  return (
    <div className="next-videos">
      {/* Next Videos Section */}
      <h2 className="label">Next Videos</h2>
      <ul className="next-videos__list">
        {videos.map((video) => (
          <li key={id} className="next-videos__card">
            <div className="next-videos__thumbnail-wrapper">
              <img
                src={image}
                alt="video thumbnail image"
                className="next-videos__thumbnail"
              />
            </div>
            <div className="next-videos__info">
              <h3 className="next-videos__title">{title}</h3>
              <p className="next-videos__channel">{channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
