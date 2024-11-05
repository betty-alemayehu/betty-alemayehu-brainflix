import express from "express";
import cors from "cors";
import videoRoutes from "./routes/videos.js";
import path from "path";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());

//reserved for static assets rom the public folder, e.g. upload page thumbnail
app.use("/public", express.static(path.resolve("public")));

//video routes
app.use("/videos", videoRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
