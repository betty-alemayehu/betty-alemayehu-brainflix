import React, { useState } from "react";
// import uploadThumbnail from "../../assets/images/Upload-video-preview.jpg"; //front-end rendering
import "./VideoUpload.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import uploadIcon from "../../assets/Images/Icons/upload.svg";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export default function VideoUpload({ fetchVideos }) {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [titleP, setTitleP] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check for missing inputs and set error states accordingly
    const isTitleValid = titleP.trim() !== "";
    const isDescriptionValid = description.trim() !== "";

    if (isTitleValid && isDescriptionValid) {
      try {
        const videoData = {
          title: titleP,
          description: description,
        };
        axios.post(`${import.meta.env.VITE_API_URL}/videos`, videoData);

        alert("Video successfully uploaded!");

        setTitleP("");
        setDescription("");
        setTitleError(false);
        setDescriptionError(false);
        fetchVideos();
        navigate("/");
      } catch (error) {
        console.log("Error uploading video: ", error);
      }
    } else {
      setTitleError(!isTitleValid);
      setDescriptionError(!isDescriptionValid);
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
    <div className="upload-video">
      <form className="upload-video__form" onSubmit={handleFormSubmit}>
        <h1 className="upload-video__header">Upload Video</h1>
        <div className="upload-video__form-container">
          <div className="upload-video__thumbnail">
            {/* Video Thumbnail */}
            <div className="upload-video__field">
              <label htmlFor="thumbnail" className="upload-video__label label">
                Video thumbnail
              </label>
              <div className="upload-video__thumbnail-image">
                <img
                  src={`${URL}/images/sample-thumbnail.jpg`}
                  alt="Video thumbnail placeholder"
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
                required
                id="description"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
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
              src={uploadIcon}
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
  );
}
