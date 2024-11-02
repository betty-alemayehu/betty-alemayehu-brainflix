import { useState } from "react";
import React from "react";
import "./CommentForm.scss";
import { formatDistanceToNow } from "date-fns";
import userIcon from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/Icons/add_comment.svg";

export default function CommentForm({ currentVideo }) {
  const { comments } = currentVideo;
  if (!currentVideo) {
    return <p>Loading comments...</p>;
  }
  //Error state for submissions - copied from Nav Bar
  const [commentValue, setCommentValue] = useState("");
  const [isError, setIsError] = useState(false);

  // Function for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    const newComment = event.target.elements["new-comment"].value.trim(); // Get value directly from the form

    if (newComment) {
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
    <div className="comment-form">
      {/* Comments Section */}
      <div className="comment-form__">
        <h3 className="comment-form__count">{comments.length} Comments</h3>

        <div className="comment-form__form-area">
          <img
            src={userIcon}
            alt="user icon"
            className="comment-form__user-icon avatar"
          />
          {/* Form to add new comment */}
          <form className="comment-form__form" onSubmit={handleSubmit}>
            <label
              htmlFor="new-comment"
              className="comment-form__form-label label"
            >
              Join the Conversation
            </label>
            <div className="comment-form__inputs">
              <textarea
                required
                id="new-comment"
                name="new-comment" // Using name to access the value via event.target.elements
                value={commentValue}
                onChange={handleInputChange}
                className={`comment-form__textarea ${
                  isError ? "comment-form__error" : ""
                }`}
                placeholder="Add a new comment"
              ></textarea>
              <button
                name="submit"
                type="submit"
                className="comment-form__submit"
              >
                <img
                  src={commentIcon}
                  alt="Add comment icon"
                  className="comment-form__submit-icon"
                />
                <h4>Comment</h4>
              </button>
            </div>
          </form>
        </div>
        {/* Pulling comments from JSON Data */}
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="comment-form__comment">
              <div className="comment-form__user-icon-wrapper">
                <img
                  className="comment-form__user-icon avatar"
                  src=""
                  alt={`${comment.name}'s profile image`}
                />
              </div>
              <div className="comment-form__comment-copy">
                <div className="comment-form__name-date">
                  <h3 className="comment-form__name">{comment.name}</h3>
                  {/* Sprint 1 Diving deeper: imported date formatter (formatDistanceToNow), converting the previous toLocaleDateString to a more refined approach */}
                  <p className="comment-form__date text-secondary">
                    {formatDistanceToNow(new Date(comment.timestamp), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
                <p className="comment-form__text">{comment.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
