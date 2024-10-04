"use client";

import React, { useState, useEffect } from "react";

const TopNavbarDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("topNavbarDarkTheme");
    if (storedPreference === "TopNavbarDark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem("topNavbarDarkTheme", isDarkMode ? "TopNavbarDark" : "light");

    // Update the class on the top navbar element to apply the selected mode
    const topNavbarElement = document.querySelector("html");
    if (isDarkMode) {
      topNavbarElement.classList.add("dark-top-navbar");
    } else {
      topNavbarElement.classList.remove("dark-top-navbar");
    }
  }, [isDarkMode]);

  return (
    <div className="mb-4 pb-2">
      <h4 className="fs-15 fw-semibold border-bottom pb-2 mb-3">
        Top Navbar Dark/Light Mode
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

export default TopNavbarDark;
