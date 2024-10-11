"use client";

import React from "react"; 

const Footer = () => {
  return (
    <>
      <div className="flex-grow-1"></div>

      <footer className="footer-area bg-white text-center rounded-top-7">
        <p className="fs-14">
          © <span className="text-primary-div">CeciSoft</span> desarrollado por{" "}
          <a
            href="https://jampaq.pe/"
            target="_blank"
            className="text-decoration-none text-primary"
          >
            JAMPAQ S.A.C.
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
