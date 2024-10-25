import { useState } from "react";
import React from "react";
import "./CommentForm.scss";

// Test image icons
const userIcon = "src/assets/images/Mohan-muruge.jpg";
const commentIcon = "src/assets/images/Icons/add_comment.svg";

export default function CommentForm({ currentVideo }) {
  const { comments } = currentVideo;

  //Error state for submissions - copied from Nav Bar
  const [commentValue, setCommentValue] = useState("");
  const [isError, setIsError] = useState(false);

  // Function for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    const newComment = event.target.elements["new-comment"].value.trim(); // Get value directly from the form

    if (newComment) {
      console.log("Comment submitted via Browser:", newComment); // Test log the new comment to the console
      //Error state for submissions
      setCommentValue("");
      setIsError(false);
      event.target.reset(); // Clear the textarea after submitting
    } else {
      setIsError(true);
    }
  };

  const handleInputChange = (error) => {
    const value = error.target.value;
    setCommentValue(value);

    setIsError(value.trim() === "");
  };

  return (
    <div className="video-player">
      {/* Comments Section */}
      <div className="video-player__comments">
        <h3 className="video-player__comment-count av-bold">
          {comments.length} Comments
        </h3>

        <div className="video-player__comments-form-area">
          <img
            src={userIcon}
            alt="user icon"
            className="video-player__user-icon avatar"
          />
          {/* Form to add new comment */}
          <form className="video-player__form" onSubmit={handleSubmit}>
            <label
              htmlFor="new-comment"
              className="video-player__form-label label av-bold"
            >
              <h2>Join the Conversation</h2>
            </label>
            <textarea
              required
              id="new-comment"
              name="new-comment" // Using name to access the value via event.target.elements
              value={commentValue}
              onChange={handleInputChange}
              className={`video-player__form-textarea ${
                isError ? "error" : ""
              }`}
              placeholder="Add a new comment"
            ></textarea>
            <button type="submit" className="video-player__form-submit">
              <img
                src={commentIcon}
                alt="Add comment icon"
                className="video-player__form-submit-icon"
              />
              <h4>Comment</h4>
            </button>
          </form>
        </div>
        {/* Pulling comments from JSON Data */}
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="video-player__comment">
              <div className="video-player__comment-user-icon-wrapper">
                <img
                  className="video-player__comment-user-icon avatar"
                  src=""
                  alt={`${comment.name}'s profile image`}
                />
              </div>
              <div className="video-player__comment-copy">
                <div className="video-player__comment-copy-name-date">
                  <h3 className="video-player__comment-name">{comment.name}</h3>
                  <p className="video-player__comment-date text-secondary">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <p className="video-player__comment-text">{comment.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
