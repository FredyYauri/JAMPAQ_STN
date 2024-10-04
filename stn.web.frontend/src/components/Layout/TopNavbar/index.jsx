"use client";

import React from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import SearchForm from "./SearchForm";
import AppsMenu from "./AppsMenu";
import ChooseLanguage from "./ChooseLanguage";
import FullscreenButton from "./FullscreenButton";
import Notifications from "./Notifications";
import Profile from "./Profile";
import ControlPanel from "../ControlPanel";

const TopNavbar = ({ toogleActive }) => {
  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("sticky");
      } else {
        elementId.classList.remove("sticky");
      }
    });
  });

  return (
    <>
      <header
        className="header-area bg-white mb-4 rounded-bottom-15"
        id="header"
      >
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6">
            <div className="left-header-content">
              <ul className="d-flex align-items-center ps-0 mb-0 list-unstyled justify-content-center justify-content-sm-start">
                <li>
                  <button
                    className="header-burger-menu bg-transparent p-0 border-0"
                    onClick={toogleActive}
                  >
                    <MaterialSymbol icon="menu" size={24} />
                  </button>
                </li>

                <li>
                  <SearchForm />
                </li>

                <li>
                  <AppsMenu />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8 col-sm-6">
            <div className="right-header-content mt-2 mt-sm-0">
              <ul className="d-flex align-items-center justify-content-center justify-content-sm-end ps-0 mb-0 list-unstyled">
                <li className="header-right-item">
                  <ChooseLanguage />
                </li>

                <li className="header-right-item">
                  <FullscreenButton />
                </li>

                <li className="header-right-item">
                  <Notifications />
                </li>

                <li className="header-right-item">
                  <Profile />
                </li>

                <li className="header-right-item">
                  <ControlPanel />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopNavbar;
