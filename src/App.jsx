import { useState } from "react";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import NavBar from "./components/NavBar/NavBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import NowPlayingCopy from "./components/NowPlayingCopy/NowPlayingCopy";
import CommentForm from "./components/CommentForm/CommentForm";
import NextVideos from "./components/NextVideos/NextVideos";

export default function App() {
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);

  //matching video id in seperate JSONs to set current video
  const currentVideo = videoDetails.find(
    (video) => video.id === currentVideoId
  );

  //filtering the current video out of the next videos array using an id
  const filteredNextVideos = videos.filter(
    (video) => video.id !== currentVideo.id
  );

  // Update the state with the selected video ID from OnClick
  const handleVideoSelect = (id) => {
    setCurrentVideoId(id);
  };

  return (
    <div className="app">
      <NavBar />
      <VideoPlayer currentVideo={currentVideo} />

      <NowPlayingCopy currentVideo={currentVideo} />
      <CommentForm currentVideo={currentVideo} />

      <NextVideos
        videos={filteredNextVideos}
        onSelectVideo={handleVideoSelect}
      />
    </div>
  );
}
