"use client";

import React, { useState, useEffect } from "react";

const LeftSidebarDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("leftSidebarDarkTheme");
    if (storedPreference === "LeftSidebarDark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem("leftSidebarDarkTheme", isDarkMode ? "LeftSidebarDark" : "light");

    // Update the class on the top navbar element to apply the selected mode
    const leftSidebarElement = document.querySelector("html");
    if (isDarkMode) {
      leftSidebarElement.classList.add("left-sidebar-dark");
    } else {
      leftSidebarElement.classList.remove("left-sidebar-dark");
    }
  }, [isDarkMode]);

  return (
    <div className="mb-4 pb-2">
      <h4 className="fs-15 fw-semibold border-bottom pb-2 mb-3">
        Left Sidebar Dark/Light Mode
      </h4>

      <button
        className="boxed-style settings-btn" 
        onClick={handleToggle}
      >
        Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default LeftSidebarDark;
