import express from "express";
import cors from "cors";
import videoRoutes from "./routes/videos.js";
import path from "path";
import dotenv from "dotenv";

dotenv.config(); //load environment variables

const app = express();
app.use(cors());
app.use(express.json());

//reserved for static assets rom the public folder, e.g. upload page thumbnail
app.use("/public", express.static(path.resolve(process.env.PUBLIC_PATH)));

//video routes
app.use("/videos", videoRoutes);

const PORT = import.meta.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
