import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { API_URL, API_KEY } from "../../../utils";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import NowPlayingCopy from "../../components/NowPlayingCopy/NowPlayingCopy";
import CommentForm from "../../components/CommentForm/CommentForm";
import NextVideos from "../../components/NextVideos/NextVideos";
import "./VideoDetailsPage.scss";
export default function VideoDetailsPage({ videos }) {
  //document.title
  useEffect(() => {
    if (currentVideo) {
      document.title = `BrainFlix | ${currentVideo.title}`;
    } else {
      document.title = "BrainFlix | Video";
    }
  });

  //useParams from App.jsx routing /:videoId
  const { videoId } = useParams();
  const id = videoId ?? videos[0].id;

  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    async function getCurrentVideo() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/videos/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setCurrentVideo(data);
      } catch (error) {
        console.error("Error fetching in VideoDetailsPage: ", error);
      }
    }
    getCurrentVideo();
  }, [videoId]);

  //Render Loading... if no current video
  if (!currentVideo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="video-details-page">
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
            <NextVideos videos={videos} currentVideo={currentVideo} />
          </aside>
        </div>
      </main>
    </div>
  );
}
