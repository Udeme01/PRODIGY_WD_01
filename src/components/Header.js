import React, { useState } from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [rotateBar, setRotateBar] = useState(false);

  // change nav menu background color
  const [color, setColor] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
    setRotateBar(!rotateBar);
  };

  const changeColor = () => {
    let innerHeight = 170;
    if (window.scrollY >= innerHeight) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      {/* header container element */}
      <header className={color ? "header active" : "header"}>
        {/* Loopstudios logo */}
        {/* <div className="log"> */}
          <img className="outerLogo" src={logo} alt="Loopstudios" />
        {/* </div> */}

        {/* Mobile Navigation Menu */}
        <nav className={`${navbarOpen ? "active" : ""}`}>
            <img className="logo" src={logo} alt="Loopstudios" />
          <ul>
            <li>
              <button>
                <a href="/">Home</a>
                <div className="line"></div>
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
        </nav>

        {/* hamburger menu btn */}
        <button
          className={`menu-btn ${rotateBar ? "rotate" : ""}`}
          onClick={toggleNavbar}
        >
          <div className={`bar bar-2 ${rotateBar}`}></div>
          <div className={`bar bar-3 ${rotateBar}`}></div>
          <div className={`bar bar-1 ${rotateBar}`}></div>
        </button>
      </header>
    </>
  );
};

export default Header;
