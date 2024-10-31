import { Link } from "react-router-dom";
import React from "react";
import "./NextVideos.scss";

export default function NextVideos({ filteredNextVideos, onSelectVideo }) {
  return (
    <div className="next-videos">
      {/* Next Videos Section */}
      <h2 className="label">Next Videos</h2>
      <ul className="next-videos__list">
        {filteredNextVideos.map((video) => (
          <li
            key={video.id}
            className="next-videos__card"
            // onClick={() => onSelectVideo(video.id)}
          >
            <Link
              to={`/videos/${video.id}`}
              className="next-videos__link next-videos__thumbnail-wrapper"
            >
              <img
                src={video.image}
                alt={video.title}
                className="next-videos__thumbnail"
              />
            </Link>
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
