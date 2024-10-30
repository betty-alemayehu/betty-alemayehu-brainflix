import NavBar from "../../components/NavBar/NavBar";
import { useEffect } from "react";

export default function VideoUploadPage() {
  useEffect(() => {
    document.title = "BrainFlix | Upload";
  }, []);
  return (
    <div className="video-upload-page">
      <header className="video-upload-page__header">
        <NavBar />
      </header>

      <main className="video-upload-page__content">
        <h1>Upload a Video</h1>
        <p>This page will allow users to upload new videos.</p>
      </main>
    </div>
  );
}
