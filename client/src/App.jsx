import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
// import { API_KEY, API_URL } from "../utils";
import axios from "axios";
import "./App.scss";

export default function App() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const { data } = await axios.get(
        // `${API_URL}/videos/${videoId}?api_key=${API_KEY}`
        `${import.meta.env.VITE_API_URL}/videos
        }`
      );

      setVideos(data);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (videos.length === 0) {
    return <div>App.jsx Loading...</div>;
  }

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          {/* HomePage */}
          <Route path="/" element={<VideoDetailsPage videos={videos} />} />
          {/* VideoDetailsPage with dynamic routing */}
          <Route
            path="/videos/:videoId"
            element={<VideoDetailsPage videos={videos} />}
          />
          {/* VideoUploadPage */}
          <Route
            path="/upload"
            element={<VideoUploadPage fetchVideos={fetchVideos} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
