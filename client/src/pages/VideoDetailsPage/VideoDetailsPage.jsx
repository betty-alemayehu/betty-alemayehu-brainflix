import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentForm from "../../components/CommentForm/CommentForm";
import NextVideos from "../../components/NextVideos/NextVideos";
import "./VideoDetailsPage.scss";

export default function VideoDetailsPage({ videos }) {
  //useParams from App.jsx routing /:videoId
  const { videoId } = useParams();
  const id = videoId ?? videos[0].id;

  const [currentVideo, setCurrentVideo] = useState(null);

  const getCurrentVideo = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/videos/${id}`
      );
      setCurrentVideo(data);
    } catch (error) {
      console.error("Error fetching video in VideoDetailsPage: ", error);
    }
  };
  useEffect(() => {
    getCurrentVideo();
  }, [videoId]);

  //document.title
  useEffect(() => {
    if (currentVideo) {
      document.title = `BrainFlix | ${currentVideo.title}`;
    } else {
      document.title = "BrainFlix | Video";
    }
  }, [currentVideo]); // Update document title when currentVideo changes

  //Render Loading... if no current video
  if (!currentVideo) {
    return <p>VidDeets Loading...</p>;
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
              <VideoInfo currentVideo={currentVideo} />
            </section>

            <section className="video-details-page__comments">
              <CommentForm
                currentVideo={currentVideo}
                refreshVideoData={getCurrentVideo}
              />
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
