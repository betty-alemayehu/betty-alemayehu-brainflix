import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import "./App.scss";
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../utils";
import axios from "axios";

export default function App() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { videoData } = await axios.get(
          `${API_URL}/videos/${videoId}?api_key=${API_KEY}`
          // `${API_URL}videos?api_key=${API_KEY}`
        );

        setCurrentVideo(videoData[0]);
        setVideos(videoData);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* HomePage */}
          <Route
            path="/"
            element={
              <HomePage
                currentVideo={currentVideo}
                videos={videos}
                setCurrentVideo={setCurrentVideo}
              />
            }
          />
          {/* VideoDetailsPage with dynamic routing */}
          <Route
            path="/videos/:videoId"
            element={<VideoDetailsPage videos={videos} />}
          />
          {/* VideoUploadPage */}
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// import { useState } from "react";
// import videoDetails from "./data/video-details.json";
// import videos from "./data/videos.json";
// import NavBar from "./components/NavBar/NavBar";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
// import NowPlayingCopy from "./components/NowPlayingCopy/NowPlayingCopy";
// import CommentForm from "./components/CommentForm/CommentForm";
// import Videos from "./components/Videos/Videos";

// export default function App() {
//   const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);

//   //matching video id in seperate JSONs to set current video
//   const currentVideo = videoDetails.find(
//     (video) => video.id === currentVideoId
//   );

//   //filtering the current video out of the next videos array using an id
//   const filteredVideos = videos.filter(
//     (video) => video.id !== currentVideo.id
//   );

//   // Update the state with the selected video ID from OnClick
//   const handleVideoSelect = (id) => {
//     setCurrentVideoId(id);
//   };

//   return (
//     <div className="app">
//       <header className="app__header">
//         <NavBar />
//       </header>

//       <main className="app__main-content">
//         <section className="app__video-player">
//           <VideoPlayer currentVideo={currentVideo} />
//         </section>

//         <div className="app__layout">
//           <div className="app__video-copy">
//             <section className="app__now-playing">
//               <NowPlayingCopy currentVideo={currentVideo} />
//             </section>

//             <section className="app__comments">
//               <CommentForm currentVideo={currentVideo} />
//             </section>
//           </div>
//           <aside className="app__next-videos">
//             <Videos
//               videos={filteredVideos}
//               onSelectVideo={handleVideoSelect}
//             />
//           </aside>
//         </div>
//       </main>
//     </div>
//   );
// }
