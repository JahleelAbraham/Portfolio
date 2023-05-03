import "./index.css";
import React from "react";
import Index from "./pages/Index";
import ReactDOM from "react-dom/client";
import { Keybinds, KeybindsContext } from "./context/Keybinds";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <KeybindsContext.Provider value={Keybinds}>
      <Index />
    </KeybindsContext.Provider>
  </React.StrictMode>
);
