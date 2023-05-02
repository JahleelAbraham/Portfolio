import React from "react";
import { useEffect } from "react";

function Theme() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ?? "night"
  );
  const [checkState, setCheckState] = React.useState(
    localStorage.getItem("theme") === "night" ? true : false
  );

  const toggleTheme = () => {
    setTheme(theme === "night" ? "light" : "night");
    setCheckState(checkState ? false : true);
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <input
      type="checkbox"
      className="toggle toggle-lg"
      checked={checkState}
      onClick={toggleTheme}
    />
  );
}

export default Theme;
