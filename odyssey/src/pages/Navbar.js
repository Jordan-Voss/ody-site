import React, { useState, useEffect } from "react";
import { Button } from "./Home/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./All/Dropdown";

import HamburgerMenu from "react-hamburger-menu";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [isNavScrolled, setisNavScrolled] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setisNavScrolled(true);
    } else {
      setisNavScrolled(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav className="navbar">
        <div
          className={
            isNavScrolled ? "navbar-container scrolled" : "navbar-container"
          }
        >
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* TRVL
						<i className='fab fa-typo3' /> */}
            <img src="/images/ody2.png" className="lgo" alt="logo"></img>
          </Link>
          <div className="menu-icon">
            <HamburgerMenu
              isOpen={click}
              menuClicked={handleClick}
              width={30}
              height={20}
              strokeWidth={1}
              rotate={0}
              color="white"
              borderRadius={5}
              animationDuration={0.5}
            />
          </div>
          {/* <Hamburger
						className='menu-icon'
						toggled={isOpen}
						toggle={setIsOpen}
						direction='left'
					/> */}

          {/* <div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Join Now
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Join Now</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
