// ThemeToggle.js
import React, { useEffect } from "react";

const ThemeToggle = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
