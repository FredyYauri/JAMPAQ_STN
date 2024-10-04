"use client";

import React, { useState, useEffect } from "react";

const RTLMode = () => {

  const [dirAttribute, setDirAttribute] = useState('ltr');

  useEffect(() => {
    const storedDirAttribute = localStorage.getItem('dirAttribute');
    if (storedDirAttribute) {
      setDirAttribute(storedDirAttribute);
      document.documentElement.setAttribute('dir', storedDirAttribute);
    }
  }, []);

  const handleButtonClick = () => {
    const newDirAttribute = dirAttribute === 'ltr' ? 'rtl' : 'ltr';
    setDirAttribute(newDirAttribute);
    localStorage.setItem('dirAttribute', newDirAttribute);
    document.documentElement.setAttribute('dir', newDirAttribute);
  };

  return (
    <>
      <div className="mb-4 pb-2">
        <h4 className="fs-15 fw-semibold border-bottom pb-2 mb-3">
          RTL/LTR Mode
        </h4>
        <button
          className="boxed-style settings-btn" 
          onClick={handleButtonClick}
        >
          Switch To RTL/LTR
        </button>
      </div>
    </>
  );
};

export default RTLMode;
