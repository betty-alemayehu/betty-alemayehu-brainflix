import { useState } from "react";
import "./Videoplayer.scss";

// Test video data moved here (will possibly pull from an API in the future)
const testVideoData = {
  title: "The Future of Artificial Intelligence",
  publisher: "By: Aiden Thompson",
  date: "8/8/2023",
  views: "980,544",
  likes: "22,479",
  description:
    "Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.",
  url: "src/assets/images/Upload-video-preview.jpg",
  poster: "src/assets/images/Upload-video-preview.jpg",
};

//test image icons
const viewsIcon = "src/assets/images/Icons/views.svg";
const likeIcon = "src/assets/images/Icons/likes.svg";

//Notes:
////video.poster = image before video plays
////controls = default controls for play/pause, etc.

function VideoPlayer() {
  const [video] = useState(testVideoData);

  return (
    <div className="video-player">
      {/* Video Section */}
      <div className="video-player__video-container">
        <figure>
          <video className="video-player__video" controls poster={video.poster}>
            <source src={video.url} type="video/mp4" />
            Some error message here...
          </video>
        </figure>
      </div>
      <div>
        <h1 className="video-player__title">{video.title}</h1>
      </div>

      {/* Video Details Section */}
      <div className="video-player__details">
        <div className="video-player__publisher-date">
          <p className="video-player__publisher bold">{video.publisher}</p>
          <p className="video-player__date text-secondary">{video.date}</p>
        </div>

        {/* Stats Section with Placeholder Icons */}
        <div className="video-player__stats">
          <div className="video-player__stat">
            <img
              src={viewsIcon}
              alt="View count"
              className="video-player__icon"
            />
            <p className="video-player__watch-count text-secondary">
              {video.views}
            </p>
          </div>
          <div className="video-player__stat">
            <img src={likeIcon} alt="Likes" className="video-player__icon" />
            <p className="video-player__likes text-secondary">{video.likes}</p>
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="video-player__description-container">
        <p className="video-player__description">{video.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
