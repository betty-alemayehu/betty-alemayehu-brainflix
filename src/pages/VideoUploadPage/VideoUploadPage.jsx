// pages/VideoUploadPage/VideoUploadPage.jsx
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import VideoUpload from "../../components/VideoUpload/VideoUpload";
import "./VideoUploadPage.scss";

export default function VideoUploadPage() {
  useEffect(() => {
    document.title = "BrainFlix | Upload";
  }, []);

  return (
    <div className="video-upload-page">
      <main className="video-upload-page__content">
        <VideoUpload />
      </main>
    </div>
  );
}
