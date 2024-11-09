import React, { useState, useEffect } from "react";
import "./VideoUploadPage.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export default function VideoUploadPage({ fetchVideos }) {
  // const { videoId } = useParams();

  useEffect(() => {
    document.title = "BrainFlix | Upload";
  }, []);

  const navigate = useNavigate();

  const [titleP, setTitleP] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);

  const [thumbnail, setThumbnail] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check for missing inputs and set error states accordingly
    // const isTitleValid = titleP.trim() !== "";
    // const isDescriptionValid = description.trim() !== "";

    if (!titleP.trim() || !description.trim()) {
      setTitleError(!titleP.trim());
      setDescriptionError(!description.trim());
      return;
    }

    const formData = newFormData();
    formData.append("title", titleP);
    formData.append("description", description);
    if (thumbnail) formData.append("thumbnail", thumbnail);

    // if (isTitleValid && isDescriptionValid) {
    try {
      // const videoData = {
      //   title: titleP,
      //   description: description,
      // };
      await axios.post(`${URL}/videos`, formData);

      alert("Video successfully uploaded!");

      setTitleP("");
      setDescription("");
      // setTitleError(false);
      // setDescriptionError(false);
      setThumbnail(null);
      fetchVideos();
      navigate("/");
    } catch (error) {
      console.log("Error uploading video: ", error);
    }
  };
  // else {
  //   setTitleError(!isTitleValid);
  //   setDescriptionError(!isDescriptionValid);
  // }

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    if (event.target.value.trim()) {
      setDescriptionError(false); // Remove error when input is valid
    }
  };

  const handleTitlePChange = (event) => {
    setTitleP(event.target.value);
    if (event.target.value.trim()) {
      setTitleError(false); // Remove error when input is valid
    }
  };
  return (
    <div className="video-upload-page">
      <main className="video-upload-page__content">
        <div className="upload-video">
          <form className="upload-video__form" onSubmit={handleFormSubmit}>
            <h1 className="upload-video__header">Upload Video</h1>
            <div className="upload-video__form-container">
              <div className="upload-video__thumbnail">
                {/* Video Thumbnail */}
                <div className="upload-video__field">
                  <label
                    htmlFor="thumbnail"
                    className="upload-video__label label"
                  >
                    Video thumbnail
                  </label>
                  <div className="upload-video__thumbnail-image">
                    <img
                      src={`${URL}/images/sample-thumbnail.jpg`}
                      alt="Video thumbnail placeholder"
                    />
                    <input
                      type="file"
                      id="thumbnail"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                    />
                  </div>
                </div>{" "}
              </div>
              <div className="upload-video__fields">
                {/* Video Title */}
                <div className="upload-video__field--title">
                  <label htmlFor="title" className="upload-video__label label">
                    Title your video
                  </label>
                  <input
                    id="titleP"
                    type="titleP"
                    value={titleP}
                    onChange={handleTitlePChange}
                    className={`upload-video__input ${
                      titleError ? "upload-video__error" : ""
                    }`}
                    placeholder="Add a title to your video"
                    required
                  />
                </div>
                {/* Video Description */}
                <div className="upload-video__field">
                  <label
                    htmlFor="description"
                    className="upload-video__label label"
                  >
                    Add a video description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`upload-video__textarea ${
                      descriptionError ? "upload-video__error" : ""
                    }`}
                    placeholder="Add a description to your video"
                    rows="4"
                  />
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="upload-video__buttons">
              <button
                type="submit"
                className="upload-video__button upload-video__button--publish"
              >
                <img
                  src={`${URL}/Icons/upload.svg`}
                  alt="Upload Icon"
                  className="upload-video__button-icon"
                />
                <h4>Publish</h4>
              </button>
              <Link
                to="/"
                className="upload-video__button upload-video__button--cancel"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
