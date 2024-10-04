"use client";

import React from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <Dropdown className="admin-profile">
        <Dropdown.Toggle
          className="d-xxl-flex align-items-center bg-transparent border-0 text-start p-0 cursor"
        >
          <div className="flex-shrink-0">
            <img
              className="rounded-circle wh-40 administrator"
              src="/images/administrator.jpg"
              alt="admin"
              width={40}
              height={40}
            />
          </div>

          <div className="flex-grow-1 ms-2">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-none d-xxl-block">
                <div className="d-flex align-content-center">
                  <h3>Olivia</h3>
                </div>
              </div>
            </div>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="border-0 bg-white dropdown-menu-end">
          <div className="d-flex align-items-center info">
            <div className="flex-shrink-0">
              <img
                className="rounded-circle wh-30 administrator"
                src="/images/administrator.jpg"
                alt="admin"
                width={30}
                height={30}
              />
            </div>
            <div className="flex-grow-1 ms-2">
              <h3 className="fw-medium">Olivia John</h3>
              <span className="fs-12">Marketing Manager</span>
            </div>
          </div>

          <ul className="admin-link ps-0 mb-0 list-unstyled">
            <li>
              <Link
                className="dropdown-item d-flex align-items-center text-body"
                href="/my-profile/"
              > 
                <MaterialSymbol icon="account_circle" />
                <span className="ms-2">My Profile</span>
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item d-flex align-items-center text-body"
                href="/apps/chat/"
              > 
                <MaterialSymbol icon="chat" />
                <span className="ms-2">Messages</span>
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item d-flex align-items-center text-body"
                href="/apps/to-do-list/"
              >
                <MaterialSymbol icon="format_list_bulleted" />
                <span className="ms-2">My Task</span>
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item d-flex align-items-center text-body"
                href="/ecommerce/checkout/"
              > 
                <MaterialSymbol icon="credit_card" />
                <span className="ms-2">Billing</span>
              </Link>
            </li>
          </ul>

          <ul className="admin-link ps-0 mb-0 list-unstyled">
            <li>
              <Link
                className="dropdown-item d-flex align-items-center text-body"
                href="/settings/account-settings/"
              > 
                <MaterialSymbol icon="settings" />
                <span className="ms-2">Settings</span>
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item d-flex align-items-center text-body"
                href="/helpdesk/tickets/"
              > 
                <MaterialSymbol icon="support" />
                <span className="ms-2">Support</span>
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item d-flex align-items-center text-body"
                href="/authentication/lock-screen/"
              > 
                <MaterialSymbol icon="lock" />
                <span className="ms-2">Lock Screen</span>
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item d-flex align-items-center text-body"
                href="/authentication/logout/"
              >
                <MaterialSymbol icon="logout" />
                <span className="ms-2">Logout</span>
              </Link>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Profile;
