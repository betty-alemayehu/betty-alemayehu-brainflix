import express from "express";
import fs from "fs";
import path from "path";
import uuidv4 from "uuid";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const videosFilePath = path.resolve(process.env.DATA_FILE_PATH);

const readVideos = () => {
  const data = fs.readFileSync(videosFilePath);
  return JSON.parse(data);
};

const writeVideos = (videos) => {
  fs.writeFileSync(videosFilePath, JSON.stringify(videos));
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
    image: "/public/images/sample-thumbnail.jpg",
    views: "0",
    likes: "0",
    duration: "0:00",
    video: "/public/images/sample-thumbnail.jpg",
    timestamp: Date.now(),
    comments: [],
  };
  videos.push(newVideo);
  writeVideos(videos);
  //set to 201 re status code note
  res.status(201).json(newVideo);
});

export default router;
