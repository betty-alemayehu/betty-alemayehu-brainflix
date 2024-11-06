import { useEffect } from "react";
import VideoUpload from "../../components/VideoUpload/VideoUpload";
import "./VideoUploadPage.scss";

export default function VideoUploadPage() {
  // const { videoId } = useParams();

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
