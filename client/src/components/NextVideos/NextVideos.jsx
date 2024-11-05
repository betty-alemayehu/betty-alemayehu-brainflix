import { Link } from "react-router-dom";
import React from "react";
import "./NextVideos.scss";

export default function NextVideos({ videos, currentVideo }) {
  const filteredVideos = videos.filter((video) => video.id !== currentVideo.id);

  return (
    <div className="next-videos">
      {/* Next Videos Section */}
      <h2 className="label">Next Videos</h2>
      <ul className="next-videos__list">
        {filteredVideos.map((video) => (
          <Link
            to={`/videos/${video.id}`}
            key={video.id}
            className="next-videos__card"
          >
            <div className="next-videos__link next-videos__thumbnail-wrapper">
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
          </Link>
        ))}
      </ul>
    </div>
  );
}
