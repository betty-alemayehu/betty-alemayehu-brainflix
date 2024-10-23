import "./App.scss";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoPlayerContent from "./components/VideoPlayerContent/VideoPlayerContent";
import videoDetails from "./data/video-details.json";

function App() {
  return (
    <div className="app">
      <VideoPlayer videoDetails={videoDetails} />
      <VideoPlayerContent videoDetails={videoDetails} />
    </div>
  );
}

export default App;
