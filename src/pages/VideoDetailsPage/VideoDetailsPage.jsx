import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../utils";
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import NowPlayingCopy from "../components/NowPlayingCopy/NowPlayingCopy";
import CommentForm from "../components/CommentForm/CommentForm";
import NextVideos from "../components/NextVideos/NextVideos";

export default function VideoDetailsPage() {
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [nextVideos, setNextVideos] = useState([]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const videoResponse = await axios.get(
          `${API_URL}/videos/${videoId}?api_key=${API_KEY}`
        );
        const videosResponse = await axios.get(
          `${API_URL}/videos?api_key=${API_KEY}`
        );
        setCurrentVideo(videoResponse.data);
        setNextVideos(
          videosResponse.data.filter((video) => video.id !== videoId)
        );
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  if (!currentVideo) return <p>Loading...</p>;

  return (
    <div className="video-details-page">
      <header className="video-details-page__header">
        <NavBar />
      </header>

      <main className="video-details-page__main-content">
        <section className="video-details-page__video-player">
          <VideoPlayer currentVideo={currentVideo} />
        </section>

        <div className="video-details-page__layout">
          <div className="video-details-page__video-copy">
            <section className="video-details-page__now-playing">
              <NowPlayingCopy currentVideo={currentVideo} />
            </section>

            <section className="video-details-page__comments">
              <CommentForm currentVideo={currentVideo} />
            </section>
          </div>
          <aside className="video-details-page__next-videos">
            <NextVideos
              videos={nextVideos}
              onSelectVideo={(id) => setCurrentVideo(id)}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}
