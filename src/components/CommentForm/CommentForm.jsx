import React from "react";
import "./CommentForm.scss";

// Test image icons
const userIcon = "src/assets/images/Mohan-muruge.jpg";
const commentIcon = "src/assets/images/Icons/add_comment.svg";

export default function CommentForm({ currentVideo }) {
  const { comments } = currentVideo;

  // Function for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    const newComment = event.target.elements["new-comment"].value.trim(); // Get value directly from the form

    if (newComment) {
      console.log("Comment submitted via Browser:", newComment); // Test log the new comment to the console
      event.target.reset(); // Clear the textarea after submitting
    }
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
              id="new-comment"
              name="new-comment" // Using name to access the value via event.target.elements
              className="video-player__form-textarea"
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
                <h3 className="video-player__comment-name">{comment.name}</h3>
                <p className="video-player__comment-date text-secondary">
                  {new Date(comment.timestamp).toLocaleDateString()}
                </p>
                <p className="video-player__comment-text">{comment.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
