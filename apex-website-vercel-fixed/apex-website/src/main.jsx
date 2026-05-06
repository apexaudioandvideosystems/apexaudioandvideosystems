import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import ApexAudioVideoWebsite from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApexAudioVideoWebsite />
  </React.StrictMode>
);
