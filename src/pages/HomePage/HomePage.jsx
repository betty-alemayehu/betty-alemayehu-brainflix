import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import NowPlayingCopy from "../../components/NowPlayingCopy/NowPlayingCopy";
import CommentForm from "../../components/CommentForm/CommentForm";
import NextVideos from "../../components/NextVideos/NextVideos";

export default function HomePage({ currentVideo, videos, setCurrentVideo }) {
  useEffect(() => {
    document.title = "BrainFlix | Home";
  }, []);

  const handleVideoSelect = (id) => {
    const selectedVideo = videos.find((video) => video.id === id);
    setCurrentVideo(selectedVideo);
  };

  const filteredNextVideos = videos.filter(
    (video) => video.id !== currentVideo?.id
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
              filteredNextVideos={filteredNextVideos}
              onSelectVideo={handleVideoSelect}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}
