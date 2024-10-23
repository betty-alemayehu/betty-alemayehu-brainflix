import "./App.scss";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import NavBar from "./components/NavBar/NavBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import NowPlayingCopy from "./components/NowPlayingCopy/NowPlayingCopy";
import CommentForm from "./components/CommentForm/CommentForm";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  return (
    <div className="app">
      <NavBar />
      <VideoPlayer videoDetails={videoDetails} />
      <NowPlayingCopy videoDetails={videoDetails} />
      <CommentForm videoDetails={videoDetails} />
      <NextVideos videos={videos} />
    </div>
  );
}

export default App;
