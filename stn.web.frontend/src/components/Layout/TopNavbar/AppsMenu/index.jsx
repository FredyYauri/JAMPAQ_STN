import React from 'react';
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Dropdown from 'react-bootstrap/Dropdown';

const AppsMenu = () => {
  return (
    <>
      <Dropdown className="dropdown notifications apps">
        <Dropdown.Toggle 
          variant="secondary" 
          id="dropdown-basic"
          className="border-0 p-0 position-relative"
        >
          <MaterialSymbol icon="apps" />
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="dropdown-menu dropdown-lg p-0 border-0 py-4 px-3 max-h-312"
          data-simplebar
        >
          <div className="notification-menu d-flex flex-wrap justify-content-between gap-4">
            <a
              href="https://www.figma.com/"
              target="_blank"
              className="dropdown-item p-0 text-center"
            >
              <img
                src="/images/figma.svg" 
                alt="Figma"
                className='wh-25'
                width={25}
                height={25}
              />
              <span>Figma</span>
            </a>

            <a
              href="https://www.dribbble.com/"
              target="_blank"
              className="dropdown-item p-0 text-center"
            >
              <img
                src="/images/dribbble.svg" 
                alt="Dribbble"
                className='wh-25'
                width={25}
                height={25}
              />
              <span>Dribbble</span>
            </a>

            <a
              href="https://www.spotify.com/"
              target="_blank"
              className="dropdown-item p-0 text-center"
            >
              <img
                src="/images/spotify.svg" 
                alt="Spotify"
                className='wh-25'
                width={25}
                height={25}
              />
              <span>Spotify</span>
            </a>

            <a
              href="https://www.github.com/"
              target="_blank"
              className="dropdown-item p-0 text-center"
            >
              <img
                src="/images/github.svg" 
                alt="Github"
                className='wh-25'
                width={25}
                height={25}
              />
              <span>Github</span>
            </a>

            <a
              href="https://www.google.com/drive/"
              target="_blank"
              className="dropdown-item p-0 text-center"
            >
              <img
                src="/images/gdrive.svg" 
                alt="GDrive"
                className='wh-25'
                width={25}
                height={25}
              />
              <span>GDrive</span>
            </a>

            <a
              href="https://www.trello.com/"
              target="_blank"
              className="dropdown-item p-0 text-center"
            >
              <img
                src="/images/trello.svg" 
                alt="Trello"
                className='wh-25'
                width={25}
                height={25}
              />
              <span>Trello</span>
            </a>

            <a
              href="https://www.slak.com/"
              target="_blank"
              className="dropdown-item p-0 text-center"
            >
              <img
                src="/images/slak.svg" 
                alt="Slak"
                className='wh-25'
                width={25}
                height={25}
              />
              <span>Slak</span>
            </a>

            <a
              href="https://www.pinterest.com/"
              target="_blank"
              className="dropdown-item p-0 text-center"
            >
              <img
                src="/images/pinterest.svg" 
                alt="Pinterest"
                className='wh-25'
                width={25}
                height={25}
              />
              <span>Pinterest</span>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="dropdown-item p-0 text-center"
            >
              <img
                src="/images/facebook.svg" 
                alt="Facebook"
                className='wh-25'
                width={25}
                height={25}
              />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="dropdown-item p-0 text-center"
            >
              <img
                src="/images/linkedin.svg" 
                alt="Linkedin"
                className='wh-25'
                width={25}
                height={25}
              />
              <span>Linkedin</span>
            </a>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default AppsMenu;