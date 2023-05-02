import "./index.css";
import React from "react";
import Index from "./pages/Index";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
