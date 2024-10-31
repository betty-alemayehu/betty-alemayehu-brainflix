import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./NavBar.scss";
import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/Icons/search.svg";
import userIcon from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/Icons/upload.svg";

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
      {/* inserting link in place of image */}
      <NavLink to="/" className="nav-bar__logo logo-icon">
        <img src={logo} alt="BrainFlix Logo" />
      </NavLink>
      <div
        className={`nav-bar__search-container ${
          isError ? "nav-bar__error" : ""
        }`}
      >
        <img
          src={searchIcon}
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
          src={userIcon}
          alt="user icon"
        />
      </div>

      {/* inserting link in place of image */}
      <NavLink to="/upload" className="nav-bar__link">
        <button className="nav-bar__button">
          <img
            src={uploadIcon}
            alt="Upload Icon"
            className="nav-bar__button-icon"
          />
          <h4 className="nav-bar__button-copy">Upload</h4>
        </button>
      </NavLink>
      <img
        className="nav-bar__user-icon--tablet avatar"
        src={userIcon}
        alt="user icon"
      />
    </header>
  );
}
