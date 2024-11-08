// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import React from "react";
// import "./NavBar.scss";
// // import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
// // import searchIcon from "../../assets/images/Icons/search.svg";
// // import userIcon from "../../assets/images/Mohan-muruge.jpg";
// // import uploadIcon from "../../assets/images/Icons/upload.svg";

// const URL = import.meta.env.VITE_API_URL;

// export default function NavBar() {
//   const [searchValue, setSearchValue] = useState("");
//   const [isError, setisError] = useState(false);

//   const handleInputChange = (error) => {
//     const value = error.target.value;
//     setSearchValue(value);

//     setisError(value.trim() === "");
//   };

//   return (
//     <header className="nav-bar">
//       {/* Home Icon: inserting link in place of image */}
//       <div className="nav-bar__container">
//         <NavLink to="/" className="nav-bar__logo logo-icon">
//           <img src={`${URL}/Logo/Brainflix-logo.svg`} alt="BrainFlix Logo" />
//         </NavLink>
//         <div
//           className={`nav-bar__search-container ${
//             isError ? "nav-bar__error" : ""
//           }`}
//         >
//           <img
//             src={`${URL}/Icons/search.svg`}
//             alt="Search Icon"
//             className="nav-bar__search-icon"
//           />
//           <input
//             required
//             value={searchValue}
//             onChange={handleInputChange}
//             className="nav-bar__search"
//             type="text"
//             name="search"
//             id="search"
//             placeholder="Search"
//           />
//           <img
//             className="nav-bar__user-icon avatar"
//             src={`${URL}/images/Mohan-muruge.jpg`}
//             alt="user icon"
//           />
//         </div>

//         {/* Search bar: inserting link in place of image */}
//         <NavLink to="/upload" className="nav-bar__link">
//           <button className="nav-bar__button">
//             <img
//               src={`${URL}/Icons/upload.svg`}
//               alt="Upload Icon"
//               className="nav-bar__button-icon"
//             />
//             <h4 className="nav-bar__button-copy">Upload</h4>
//           </button>
//         </NavLink>
//         {/* User Avatar */}
//         <img
//           className="nav-bar__user-icon--tablet avatar"
//           src={`${URL}/images/Mohan-muruge.jpg`}
//           alt="user icon"
//         />
//       </div>
//     </header>
//   );
// }
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./NavBar.scss";

const URL = import.meta.env.VITE_API_URL;

export default function NavBar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  // Fetch videos once when the component mounts
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get(`${URL}/videos`);
        setAllVideos(data); // Store all videos for filtering
      } catch (error) {
        console.error("Error fetching videos for search: ", error);
      }
    };
    fetchVideos();
  }, []);

  // Update search results based on search input
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value.trim() === "") {
      setSearchResults([]);
    } else {
      // Filter videos by title based on input value
      const filteredResults = allVideos.filter((video) =>
        video.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  // Handle clearing search on clicking a search result
  const handleResultClick = () => {
    setSearchValue(""); // Reset search input
    setSearchResults([]); // Clear search results
  };

  // Handle clearing search on blur
  const handleBlur = () => {
    setTimeout(() => {
      setSearchValue("");
      setSearchResults([]);
    }, 200); // Delay to allow click event on links
  };

  return (
    <header className="nav-bar">
      <div className="nav-bar__container">
        <NavLink to="/" className="nav-bar__logo logo-icon">
          <img src={`${URL}/Logo/Brainflix-logo.svg`} alt="BrainFlix Logo" />
        </NavLink>

        <div className="nav-bar__search-container">
          <img
            src={`${URL}/Icons/search.svg`}
            alt="Search Icon"
            className="nav-bar__search-icon"
          />
          <input
            value={searchValue}
            onChange={handleInputChange}
            onBlur={handleBlur} // Clear on blur
            className="nav-bar__search"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
          {/* Search Results Dropdown */}
          {searchResults.length > 0 && (
            <div className="nav-bar__search-results">
              {searchResults.map((video) => (
                <Link
                  key={video.id}
                  to={`/videos/${video.id}`}
                  className="nav-bar__search-result"
                  onClick={handleResultClick} // Reset search on selection
                >
                  {video.title}
                </Link>
              ))}
            </div>
          )}
          <img
            className="nav-bar__user-icon avatar"
            src={`${URL}/images/Mohan-muruge.jpg`}
            alt="user icon"
          />
        </div>

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

        <img
          className="nav-bar__user-icon--tablet avatar"
          src={`${URL}/images/Mohan-muruge.jpg`}
          alt="user icon"
        />
      </div>
    </header>
  );
}
