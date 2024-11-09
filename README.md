# BrainFlix Project

A video streaming platform prototype developed over three sprints, focusing on responsive design, dynamic data rendering, and custom API integration.

## Project Overview

**Goal**: Build a prototype video streaming platform with essential features and a responsive design. Each sprint introduces new functionalities, resulting in a fully operational front-end and API by the final sprint.

**Tech Stack**: React, JavaScript, HTML, CSS (Sass), Node.js, Express, Axios, Flexbox, BEM, JSON for data persistence

---

## Sprint 1 - Static Prototype with Dynamic Data

**Objective**: Create a responsive, static prototype using React functional components, rendering data dynamically from provided sample data.

- **Key Features**:
  - **Video Player**: Renders the main video with the `<video>` tag and static controls.
  - **Next Video Sidebar**: Dynamically displays a list of "Next Videos" excluding the current video.
  - **Comments Section**: Renders comments dynamically from sample data.
  - **Responsive Design**: Mobile-first, styled with Sass, Flexbox, and BEM for class naming.

---

## Sprint 2 - API Integration and Multi-Page App with React Router

**Objective**: Extend the functionality using a mock API, add routing, and include a new Video Upload page.

- **New Features**:
  - **API Integration**: Fetch video and comment data dynamically from a mock API using Axios.
  - **React Router**: Adds multi-page routing with `react-router-dom`:
    - **Home Page**: Displays the default video.
    - **Video Details Page**: Displays detailed info and comments for selected videos.
    - **Video Upload Page**: Allows users to simulate video uploads (placeholder functionality).
  - **Routing Updates**:
    - Clicking "Next Video" updates the URL and displays selected video details.
    - "Upload" button links to the Video Upload Page.
    - Clicking the BrainFlix logo navigates to the Home Page.

---

## Sprint 3 - Custom API Development and Full Video Upload Functionality

**Objective**: Replace the mock API with a custom server API, implementing data persistence and a fully functional video upload feature.

- **New Features**:
  - **Custom API Development**:
    - Video Endpoints:
      - `GET /videos`: Returns all video metadata.
      - `GET /videos/:id`: Returns detailed data for a specific video.
      - `POST /videos`: Adds a new video to the list, saving data in JSON.
    - Comment Endpoints:
      - `POST /videos/:videoId/comments`: Adds a new comment to the specified video.
      - `DELETE /videos/:videoId/comments/:commentId`: Deletes a specific comment from the specified video.
    - **Static Assets**: Serves video thumbnail images from the Node server.
  - **Data Persistence**:
    - Video and comment data persist across server restarts using a JSON file for storage.
  - **Enhanced Video Upload**:
    - The Video Upload form posts title and description to the API, creating new videos with placeholder images.
  - **Incorporated Feedback**:
    - Enhanced responsiveness, consistency with design mockups, and additional styling based on feedback from previous sprints.

---

## Future Enhancements

- Custom video player controls, including custom play/pause, volume, and scrubber bar.
- Allow image uploads for video thumbnails with file persistence.

**Feedback is always welcome!**
