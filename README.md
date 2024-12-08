# BrainFlix Project

A video streaming platform prototype developed over three sprints, focusing on responsive design, dynamic data rendering, and custom API integration.

---

## **Project Overview**

**Goal**: Build a prototype video streaming platform with essential features and a responsive design. Each sprint introduces new functionalities, resulting in a fully operational front-end and API by the final sprint.

### **Tech Stack**
- **Frontend**: ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
- **Backend**: ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
- **Tools**: Axios, Flexbox, BEM
- **Storage**: JSON for data persistence

---

## **Sprints Overview**

### **Sprint 1 - Static Prototype with Dynamic Data**

**Objective**: Create a responsive, static prototype using React functional components, rendering data dynamically from provided sample data.

#### Key Features:
- **Video Player**: Renders the main video with the `<video>` tag and static controls.
- **Next Video Sidebar**: Dynamically displays a list of "Next Videos" excluding the current video.
- **Comments Section**: Renders comments dynamically from sample data.
- **Responsive Design**: Mobile-first, styled with Sass, Flexbox, and BEM for class naming.

---

### **Sprint 2 - API Integration and Multi-Page App with React Router**

**Objective**: Extend the functionality using a mock API, add routing, and include a new Video Upload page.

#### New Features:
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

### **Sprint 3 - Custom API Development and Full Video Upload Functionality**

**Objective**: Replace the mock API with a custom server API, implementing data persistence and a fully functional video upload feature.

#### New Features:
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

## **Setup Instructions**

### Frontend
1. Clone the repository:
   `git clone https://github.com/your-username/brainflix-client`
2. Navigate to the project directory:
   `cd brainflix-client`
3. Install dependencies:
   `npm install`
4. Start the development server:
   `npm run dev`
5. Access the app at:
   `http://localhost:3000`

---

### Backend
1. Clone the repository:
   `git clone https://github.com/your-username/brainflix-server`
2. Navigate to the project directory:
   `cd brainflix-server`
3. Install dependencies:
   `npm install`
4. Create a `.env` file and configure the following: PORT=5050
5. Start the server:
`npm run dev`
6. API available at:
`http://localhost:5050`

---

## **Future Enhancements**

- Custom video player controls, including custom play/pause, volume, and scrubber bar.
- Allow image uploads for video thumbnails with file persistence.

---

**Feedback is always welcome!**


