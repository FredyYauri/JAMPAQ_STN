"use client";

import React from "react";
import { Link } from "react-router-dom";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const Pagination = () => {
  return (
    <>
      <div className="p-4">
        <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
          <span className="fs-12 fw-medium">Showing 5 of 30 Results</span>

          <nav aria-label="Page navigation example">
            <ul className="pagination mb-0 justify-content-center">
              <li className="page-item">
                <Link
                  className="page-link icon"
                  href="#"
                  aria-label="Previous"
                >
                  <MaterialSymbol icon="keyboard_arrow_left" />
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link active" href="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  4
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link icon" href="#" aria-label="Next">
                  <MaterialSymbol icon="keyboard_arrow_right" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;
