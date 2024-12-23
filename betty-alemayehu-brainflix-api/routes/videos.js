import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const videosFilePath = process.env.DATA_FILE_PATH;

//reading videos aka parse
const readVideos = () => {
  const data = fs.readFileSync(videosFilePath);
  return JSON.parse(data);
};

//writing videos aka stringify
const writeVideos = (videos) => {
  fs.writeFileSync(videosFilePath, JSON.stringify(videos, null, 2));
};

//GET /videos - returning the array of videos
router.get("/", (req, res) => {
  const videos = readVideos();
  const videoSummaries = videos.map(({ id, title, channel, image }) => ({
    id,
    title,
    channel,
    image,
  }));
  res.json(videoSummaries);
});

//GET /video/:id - returns the specified video (:id - param) for the video details page
router.get("/:id", (req, res) => {
  const videos = readVideos();
  const video = videos.find((v) => v.id === req.params.id);
  if (!video)
    return res.status(404).json({ message: "Uh oh - video not found!" });
  res.json(video);
});

//POST /videos - upload page functionality, adding a new video
router.post("/", (req, res) => {
  const videos = readVideos();
  const newVideo = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    channel: "User Channel", //Hard coded placeholder re assignment instructions
    image: `${process.env.BASE_URL}/images/sample-thumbnail.jpg`,
    views: "0",
    likes: "0",
    duration: "0:00",
    video: `${process.env.BASE_URL}/videos/BrainStation_Sample_Video.mp4`,
    timestamp: Date.now(),
    comments: [],
  };
  videos.push(newVideo);
  writeVideos(videos);
  //set to 201 re status code note
  res.status(201).json(newVideo);
});

//COMMENTS

//POST /videos/:id/comments - adding new comment to specific video in json
router.post("/:id/comments", (req, res) => {
  const videos = readVideos();
  const video = videos.find((v) => v.id === req.params.id);

  if (!video) {
    return res
      .status(404)
      .json({ message: "Cannot upload comment - associated video not found." });
  }

  const newComment = {
    id: uuidv4(),
    name: "Mohan Muruge",
    comment: req.body.comment,
    channel: "User Channel", //Hard coded placeholder re assignment instructions
    timestamp: Date.now(),
  };

  video.comments.unshift(newComment); //replaced push with unshift so new comment gets added to top
  writeVideos(videos);
  //set to 201 re status code note
  res.status(201).json(newComment);
});

//DELETE COMMENTS - /videos/:videoId/comments/:commentId *note ":/commentId" is new for this diving deeper
router.delete("/:videoId/comments/:commentId", (req, res) => {
  const videos = readVideos();
  const video = videos.find((v) => v.id === req.params.videoId);

  console.log("Video found:", video ? video.id : "No video found with this ID");

  if (!video) {
    return res
      .status(404)
      .json({ message: "Cannot delete comment - associated video not found." });
  }

  const commentIndex = video.comments.findIndex(
    (comment) => comment.id === req.params.commentId
  );

  if (commentIndex === -1) {
    return res.status(404).json({ message: "Associated comment not found." });
  }

  //remove comment from array
  const deleteCommentInArray = video.comments.splice(commentIndex, 1)[0];

  writeVideos(videos); //do not remove - this is here to update json data with the updated comments

  res.status(200).json(deleteCommentInArray);
});

export default router;
