import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import "./styles/partials/_global.scss";
import App from "./App.jsx";
import "./App.scss";
import "./styles/partials/_global.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
