import React from "react";
import "./CommentForm.scss";

// Test image icons
const userIcon = "src/assets/images/Icons/views.svg";

export default function CommentForm({ videoDetails }) {
  // Function for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    const newComment = event.target.elements["new-comment"].value.trim(); // Get value directly from the form

    if (newComment) {
      console.log("Comment submitted via Browser:", newComment); // Log the new comment to the console
      event.target.reset(); // Clear the textarea after submitting
    }
  };

  return (
    <div className="video-player">
      {/* Comments Section */}
      <div className="video-player__comments">
        <p className="video-player__comment-count av-bold">
          {videoDetails[0].comments.length} Comments
        </p>
        <h4 className="label">Join the Conversation</h4>

        <div className="video-player__comments-form-area">
          <img
            src={userIcon}
            alt="user icon"
            className="video-player__user-icon"
          />
          {/* Form to add new comment */}
          <form className="video-player__form" onSubmit={handleSubmit}>
            <label htmlFor="new-comment" className="video-player__form-label">
              Join the Conversation
            </label>
            <textarea
              id="new-comment"
              name="new-comment" // Using name to access the value via event.target.elements
              className="video-player__form-textarea"
              placeholder="Add a new comment"
            ></textarea>
            <button type="submit" className="video-player__form-submit">
              Submit
            </button>
          </form>
        </div>
        {/* Pulling comments from JSON Data */}
        <ul>
          {videoDetails[0].comments.map((comment) => (
            <li key={comment.id} className="video-player__comment">
              <p className="video-player__comment-name av-demi">
                {comment.name}
              </p>
              <p className="video-player__comment-date text-secondary">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
              <p className="video-player__comment-text">{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
