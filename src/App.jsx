import "./App.scss";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import NowPlayingCopy from "./components/NowPlayingCopy/NowPlayingCopy";
import CommentForm from "./components/CommentForm/CommentForm";
function App() {
  return (
    <div className="app">
      <VideoPlayer videoDetails={videoDetails} />
      <NowPlayingCopy videoDetails={videoDetails} />
      <CommentForm videoDetails={videoDetails} />
      <NextVideos videos={videos} />
    </div>
  );
}

export default App;
