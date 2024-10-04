"use client";

import React, { useState, useEffect } from "react";

const DarkMode = () => {
  // Light/Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("theme");
    if (storedPreference === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update the class on the <html> element to apply the selected mode
    const htmlElement = document.querySelector("html");
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="mb-4 pb-2">
        <h4 className="fs-15 fw-semibold border-bottom pb-2 mb-3">
          Dark/Light Mode
        </h4>

        <button
          onClick={handleToggle}
          variant="contained"
          sx={{
            textTransform: "capitalize",
            fontSize: '13px'
          }}
          className="header-light-dark settings-btn header-dark-btn"
        >
          Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
};

export default DarkMode;