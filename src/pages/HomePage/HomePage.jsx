import { useState } from "react";
import videoDetails from "../data/video-details.json";
import videos from "../data/videos.json";
import NavBar from "../components/NavBar/NavBar";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import NowPlayingCopy from "../components/NowPlayingCopy/NowPlayingCopy";
import CommentForm from "../components/CommentForm/CommentForm";
import NextVideos from "../components/NextVideos/NextVideos";

export default function HomePage() {
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);

  const currentVideo = videoDetails.find(
    (video) => video.id === currentVideoId
  );
  const filteredNextVideos = videos.filter(
    (video) => video.id !== currentVideo.id
  );

  const handleVideoSelect = (id) => {
    setCurrentVideoId(id);
  };

  return (
    <div className="home-page">
      <header className="home-page__header">
        <NavBar />
      </header>

      <main className="home-page__main-content">
        <section className="home-page__video-player">
          <VideoPlayer currentVideo={currentVideo} />
        </section>

        <div className="home-page__layout">
          <div className="home-page__video-copy">
            <section className="home-page__now-playing">
              <NowPlayingCopy currentVideo={currentVideo} />
            </section>

            <section className="home-page__comments">
              <CommentForm currentVideo={currentVideo} />
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
