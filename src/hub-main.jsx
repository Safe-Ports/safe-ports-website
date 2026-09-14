import React from "react";
import { createRoot } from "react-dom/client";
import Hub from "./Hub.jsx";
import "./index.css";
import "./styles/luxury.css";
import "./styles/luxury-hub.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hub />
  </React.StrictMode>,
);
