import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div class="aurora-container">
      <div class="aurora-layer"></div>
      <div class="aurora-layer"></div>
      <div class="aurora-layer"></div>
    </div>
    <App />
  </React.StrictMode>
);
