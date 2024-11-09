import express from "express";
import cors from "cors";
import videoRoutes from "./routes/videos.js";
import dotenv from "dotenv";

//load environment variables
dotenv.config();

//middleware
const app = express();
app.use(cors());
app.use(express.json());

//reserved for static assets rom the public folder, e.g. upload page thumbnail
app.use(express.static("public"));

//video routes
app.use("/videos", videoRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
