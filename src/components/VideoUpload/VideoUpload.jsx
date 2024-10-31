// components/VideoUpload/VideoUpload.jsx
import React from "react";
import uploadThumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";

export default function VideoUpload() {
  return (
    <div className="upload-video">
      <h1 className="upload-video__header">Upload Video</h1>
      <div className="upload-video__form">
        <div className="upload-video__thumbnail">
          {/* Video Thumbnail */}
          <div className="upload-video__field">
            <label htmlFor="thumbnail" className="upload-video__label label">
              <h2>Video thumbnail</h2>
            </label>
            <div className="upload-video__thumbnail-image">
              <img src={uploadThumbnail} alt="Video thumbnail placeholder" />
            </div>
          </div>{" "}
        </div>
        <div className="upload-video__fields">
          {/* Video Title */}
          <div className="upload-video__field">
            <label htmlFor="title" className="upload-video__label label">
              <h2>Title your video</h2>
            </label>
            <input
              id="title"
              type="text"
              className="upload-video__input"
              placeholder="Add a title to your video"
              required
            />
          </div>
          {/* Video Description */}
          <div className="upload-video__field">
            <label htmlFor="description" className="upload-video__label label">
              <h2>Add a video description</h2>
            </label>
            <textarea
              id="description"
              className="upload-video__textarea"
              placeholder="Add a description to your video"
              rows="4"
              required
            />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="upload-video__buttons">
        <button
          type="button"
          className="upload-video__button upload-video__button--publish"
        >
          <h4>Publish</h4>
        </button>
        <button
          type="button"
          className="upload-video__button upload-video__button--cancel"
        >
          <h4>Cancel</h4>
        </button>
      </div>
    </div>
  );
}

<div className="upload-video">
  <h1 className="upload-video__header">Upload Video</h1>
  <form className="upload-video__form">
    {/* Video Thumbnail */}
    <div className="upload-video__field">
      <label htmlFor="thumbnail" className="upload-video__label label">
        <h2>Video thumbnail</h2>
      </label>
      <div className="upload-video__thumbnail">
        <img src={uploadThumbnail} alt="Video thumbnail placeholder" />
      </div>
    </div>

    {/* Video Title */}
    <div className="upload-video__field">
      <label htmlFor="title" className="upload-video__label label">
        <h2>Title your video</h2>
      </label>
      <input
        id="title"
        type="text"
        className="upload-video__input"
        placeholder="Add a title to your video"
        required
      />
    </div>

    {/* Video Description */}
    <div className="upload-video__field">
      <label htmlFor="description" className="upload-video__label label">
        <h2>Add a video description</h2>
      </label>
      <textarea
        id="description"
        className="upload-video__textarea"
        placeholder="Add a description to your video"
        rows="4"
        required
      />
    </div>

    {/* Buttons */}
    <div className="upload-video__buttons">
      <button
        type="button"
        className="upload-video__button upload-video__button--publish"
      >
        <h4>Publish</h4>
      </button>
      <button
        type="button"
        className="upload-video__button upload-video__button--cancel"
      >
        <h4>Cancel</h4>
      </button>
    </div>
  </form>
</div>;
