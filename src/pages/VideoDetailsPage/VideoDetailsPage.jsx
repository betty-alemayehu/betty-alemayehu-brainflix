import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "../../components/NavBar/NavBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import NowPlayingCopy from "../../components/NowPlayingCopy/NowPlayingCopy";
import CommentForm from "../../components/CommentForm/CommentForm";
import NextVideos from "../../components/NextVideos/NextVideos";

export default function VideoDetailsPage(videos) {
  //document.title
  useEffect(() => {
    if (currentVideo) {
      document.title = `BrainFlix | ${currentVideo.title}`;
    } else {
      document.title = "BrainFlix | Video";
    }
  });
  // const { videos } = useParams();
  //        setVideos(videoData.data.filter((video) => video.id !== videoId));

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
