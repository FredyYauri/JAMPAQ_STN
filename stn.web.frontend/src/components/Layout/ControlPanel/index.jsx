"use client";

import React, { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Button from "react-bootstrap/Button";
import RTLMode from "./RTLMode"; 
import DarkMode from "./DarkMode";
import TopNavbarDark from "./TopNavbarDark";
import LeftSidebarDark from "./LeftSidebarDark";

const ControlPanel = () => {
  const [isActiveControlPanel, setActiveControlPanel] = useState("false");
  const handleToggleControlPanel = () => {
    setActiveControlPanel(!isActiveControlPanel);
  };

  return (
    <>
      <Button
        variant="primary"
        className="theme-settings-btn p-0 border-0 bg-transparent" 
        onClick={handleToggleControlPanel}
      >
        <MaterialSymbol icon="settings" size={24} />
      </Button>
  
      <div
        className={`control-panel-modal ${
          isActiveControlPanel ? "" : "show"
        }`}
      >
        <div className="cpm-content">
          <div className="modal-header bg-body-bg py-3 px-4 justify-content-between">
            <h1 className="fs-18 mb-0">Theme Settings</h1>
            <button type="button" className="btn-close" onClick={handleToggleControlPanel}></button>
          </div>

          <div className="modal-body p-4">
            <RTLMode />

            <DarkMode />

            <TopNavbarDark /> 

            <LeftSidebarDark /> 
          </div> 
        </div>

        <div className="btn-full-close" onClick={handleToggleControlPanel}></div>
      </div>
    </>
  );
};

export default ControlPanel;
