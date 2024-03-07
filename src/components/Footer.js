import React from "react";
import logo from "../images/logo.svg";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* logo & button menu */}
        <div className="logoNlinks">
          <div className="logo">
            <img src={logo} alt="footer logo" />
          </div>
          <ul className="footer-links">
            <li>
              <button>
                <a href="/">Home</a> <div className="line"></div>
              </button>
            </li>
            <li>
              <button>
                <a href="/about">About</a>
                <div className="line"></div>
              </button>
            </li>
            <li>
              <button>
                <a href="/support">Support</a>
                <div className="line"></div>
              </button>
            </li>
          </ul>
        </div>

        {/* icons & copyright section */}
        <div className="footer-icons">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/emmanuel.udeme.902"
                target="_blank"
                rel="noreferrer"
              >
                <GrFacebookOption />
              </a>
              <div className="line"></div>
            </li>
            <li>
              <a
                href="https://twitter.com/quietdev_udy"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <div className="line"></div>
            </li>
            <li>
              <a
                href="https://github.com/Udeme01"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <div className="line"></div>
            </li>
            <li>
              <a
                href="https://www.instagram.com/quietdev_udy"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <div className="line"></div>
            </li>
          </ul>
          <div className="copyright">
            <p>&copy; 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
