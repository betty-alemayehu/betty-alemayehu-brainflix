import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./NavBar.scss";

const URL = import.meta.env.VITE_API_URL;

export default function NavBar() {
  const [searchValue, setSearchValue] = useState("");
  const [isError, setisError] = useState(false);

  const handleInputChange = (error) => {
    const value = error.target.value;
    setSearchValue(value);

    setisError(value.trim() === "");
  };

  return (
    <header className="nav-bar">
      {/* Home Icon: inserting link in place of image */}
      <div className="nav-bar__container">
        <NavLink to="/" className="nav-bar__logo logo-icon">
          <img src={`${URL}/Logo/Brainflix-logo.svg`} alt="BrainFlix Logo" />
        </NavLink>
        <div
          className={`nav-bar__search-container ${
            isError ? "nav-bar__error" : ""
          }`}
        >
          <img
            src={`${URL}/Icons/search.svg`}
            alt="Search Icon"
            className="nav-bar__search-icon"
          />
          <input
            required
            value={searchValue}
            onChange={handleInputChange}
            className="nav-bar__search"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
          <img
            className="nav-bar__user-icon avatar"
            src={`${URL}/images/Mohan-muruge.jpg`}
            alt="user icon"
          />
        </div>

        {/* Search bar: inserting link in place of image */}
        <NavLink to="/upload" className="nav-bar__link">
          <button className="nav-bar__button">
            <img
              src={`${URL}/Icons/upload.svg`}
              alt="Upload Icon"
              className="nav-bar__button-icon"
            />
            <h4 className="nav-bar__button-copy">Upload</h4>
          </button>
        </NavLink>
        {/* User Avatar */}
        <img
          className="nav-bar__user-icon--tablet avatar"
          src={`${URL}/images/Mohan-muruge.jpg`}
          alt="user icon"
        />
      </div>
    </header>
  );
}
