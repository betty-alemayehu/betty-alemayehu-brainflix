import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../../../utils";
// import videoDetails from "../../data/video-details.json";
// import videos from "../../data/videos.json";
import NavBar from "../../components/NavBar/NavBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import NowPlayingCopy from "../../components/NowPlayingCopy/NowPlayingCopy";
import CommentForm from "../../components/CommentForm/CommentForm";
import NextVideos from "../../components/NextVideos/NextVideos";

export default function HomePage() {
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosResponse = await axios.get(
          `${API_URL}videos?api_key=${API_KEY}`
        );
        setVideos(videosResponse.data);

        //set default vid as the first vid in array [0]
        if (videosResponse.data.length > 0) {
          const defaultVideoId = videosResponse.data[0].id;
          setCurrentVideoId(defaultVideoId);
        }
      } catch (error) {
        console.error("Error fetching vid: ", error);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    if (!currentVideoId) return;

    const fetchCurrentVideo = async () => {
      try {
        const videoResponse = await axios.get(
          `${API_URL}videos/${currentVideoId}?api_key=${API_KEY}`
        );
        setCurrentVideo(videoResponse.data);
      } catch (error) {
        console.error("Error fetching vid: ", error);
      }
    };
    fetchCurrentVideo();
  }, [currentVideoId]);

  const handleVideoSelect = (id) => {
    setCurrentVideoId(id);
  };

  const filteredNextVideos = videos.filter(
    (video) => video.id !== currentVideoId
  );

  return (
    <div className="home-page">
      <header className="home-page__header">
        <NavBar />
      </header>

      <main className="home-page__main-content">
        <section className="home-page__video-player">
          {currentVideo ? (
            <VideoPlayer currentVideo={currentVideo} />
          ) : (
            <p>Loading video...</p>
          )}
        </section>

        <div className="home-page__layout">
          <div className="home-page__video-copy">
            <section className="home-page__now-playing">
              {currentVideo && <NowPlayingCopy currentVideo={currentVideo} />}
            </section>

            <section className="home-page__comments">
              {currentVideo && <CommentForm currentVideo={currentVideo} />}
            </section>
          </div>
          <aside className="home-page__next-videos">
            <NextVideos
              videos={filteredNextVideos}
              onSelectVideo={handleVideoSelect}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}
