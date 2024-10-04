"use client";

import React from 'react';
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const Notifications = () => {
  return (
    <>
      <Dropdown className="dropdown notifications noti">
        <Dropdown.Toggle 
          variant="secondary" 
          id="dropdown-basic"
          className="border-0 p-0 position-relative badge"
        >
          <MaterialSymbol icon="notifications" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-lg p-0 border-0 p-0 dropdown-menu-end">
          <div className="d-flex justify-content-between align-items-center title">
            <span className="fw-semibold fs-15 text-secondary">
              Notifications{" "}
              <span className="fw-normal text-body fs-14">
                (03)
              </span>
            </span>
            <button className="p-0 m-0 bg-transparent border-0 fs-14 text-primary">
              Clear All
            </button>
          </div>

          <div className="max-h-217 scrollbar">
            <div className="notification-menu">
              <Link href="/notifications" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <MaterialSymbol icon="sms" className='text-primary' />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <p>
                      You have requested to{" "}
                      <span className="fw-semibold">
                        withdrawal
                      </span>
                    </p>
                    <span className="fs-13">2 hrs ago</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="notification-menu unseen">
              <Link href="/notifications" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <MaterialSymbol icon="person" className='text-info' />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <p>A new user added in Trezo</p>
                    <span className="fs-13">3 hrs ago</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="notification-menu">
              <Link href="/notifications" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <MaterialSymbol icon="mark_email_unread" className='text-success' />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <p>
                      You have requested to{" "}
                      <span className="fw-semibold">
                        withdrawal
                      </span>
                    </p>
                    <span className="fs-13">1 day ago</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="notification-menu">
              <Link href="/notifications" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <MaterialSymbol icon="sms" className='text-primary' />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <p>
                      You have requested to{" "}
                      <span className="fw-semibold">
                        withdrawal
                      </span>
                    </p>
                    <span className="fs-13">2 hrs ago</span>
                  </div>
                </div>
              </Link>
            </div> 
          </div>

          <Link
            href="/notifications"
            className="dropdown-item text-center text-primary d-block view-all fw-medium rounded-bottom-3"
          >
            <span>See All Notifications</span>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Notifications;