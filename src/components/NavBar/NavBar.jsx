import React from "react";
import "./NavBar.scss";

const logo = "src/assets/images/Logo/BrainFlix-logo.svg";
const searchIcon = "src/assets/images/Icons/search.svg";
const userIcon = "src/assets/images/Mohan-muruge.jpg";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <img
        className="nav-bar__logo logo-icon"
        src={logo}
        alt="BrainFlix Logo"
      />
      <div className="nav-bar__search-container">
        <img
          src={searchIcon}
          alt="Search Icon"
          className="nav-bar__search-icon"
        />
        <input
          className="nav-bar__search"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <img className="nav-bar__user-icon" src={userIcon} alt="user icon" />
      </div>

      <button className="nav-bar__button">Upload</button>
      <img
        className="nav-bar__user-icon--tablet"
        src={userIcon}
        alt="user icon"
      />
    </div>
  );
}
