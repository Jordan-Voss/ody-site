import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import HamburgerMenu from "react-hamburger-menu";
import MobileDropdown from "./MobileDropdown";
import { useLocation } from "react-router-dom";

function Navbar(activePage, activeSubPage) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown1, setDropdown1] = useState(false);
  const [mobileDropdown1, setMobileDropdown1] = useState(false);

  const [dropdown2, setDropdown2] = useState(false);
  const [mobileDropdown2, setMobileDropdown2] = useState(false);

  const [dropdown3, setDropdown3] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setMobileDropdown1(false);
  };
  const closeMobileMenu = () => {
    setClick(false);
    setMobileDropdown1(false);
  };
  const [isNavScrolled, setisNavScrolled] = useState(false);

  const onMouseLeave1 = () => {
    if (window.innerWidth < 769) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };
  const onMouseEnter1 = () => {
    if (window.innerWidth < 769) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
      console.log("aaaa");
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 769) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 769) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 769) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 769) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };
  const showButton = () => {
    if (window.innerWidth <= 769) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const onClickMobile1 = () => {
    if (window.innerWidth < 769) {
      setMobileDropdown1(!mobileDropdown1);
      setMobileDropdown2(false);
    } else {
      setMobileDropdown1(false);
    }
  };
  const onClickMobile2 = () => {
    if (window.innerWidth < 769) {
      setMobileDropdown2(!mobileDropdown2);
      setMobileDropdown1(false);
    } else {
      setMobileDropdown2(false);
    }
  };
  useEffect(() => {
    showButton();
    window.addEventListener("scroll", changeNavbarColor);
    window.addEventListener("resize", showButton);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
      window.removeEventListener("resize", showButton);
    };
  }, []);
  //   window.addEventListener("resize", showButton);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setisNavScrolled(true);
    } else {
      setisNavScrolled(false);
    }
  };
  const location = useLocation();
  console.log(location.pathname);
  //   window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav className={isNavScrolled ? "scrolled" : "notScrolled"}>
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/images/ody2.png" className="lgo" alt="logo"></img>
        </NavLink>

        <div>
          <ul id="navbar" className={click ? "#navbar active" : "#navbar"}>
            {window.innerWidth < 769 ? (
              <li className="mble">
                <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
            ) : null}
            {window.innerWidth < 769 ? (
              <>
                <li className="mble" onClick={onClickMobile1}>
                  About &nbsp;
                  <i className="fas fa-caret-down" />
                </li>
                <div
                  className={`mb-dd-container ${
                    mobileDropdown1 ? "visible" : "hddn"
                  }`}
                >
                  <MobileDropdown
                    mobileDropdown={mobileDropdown1}
                    closeMobileMenu={closeMobileMenu}
                    menuItems="about"
                    subMenuItem="a"
                  ></MobileDropdown>
                </div>
              </>
            ) : (
              <li
                className="mble"
                onMouseEnter={onMouseEnter1}
                onMouseLeave={onMouseLeave1}
              >
                <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                  <span className="nav-text">About</span>
                  <i className="fas fa-caret-down" />
                </NavLink>
                {dropdown1 && <Dropdown menuItems="about" />}
              </li>
            )}
            {window.innerWidth < 769 ? (
              <>
                <li className="mble" onClick={onClickMobile2}>
                  Resources &nbsp;
                  <i className="fas fa-caret-down" />
                </li>
                <div
                  className={`mb-dd-container ${
                    mobileDropdown2 ? "visible" : "hddn"
                  }`}
                >
                  <MobileDropdown
                    mobileDropdown={mobileDropdown2}
                    closeMobileMenu={closeMobileMenu}
                    menuItems="coaching"
                  ></MobileDropdown>
                </div>
              </>
            ) : (
              <li
                className=""
                onMouseEnter={onMouseEnter2}
                onMouseLeave={onMouseLeave2}
              >
                <NavLink
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <span className="nav-text">Resources</span>
                  <i className="fas fa-caret-down" />
                </NavLink>
                {dropdown2 && <Dropdown menuItems="resources" />}
              </li>
            )}
            <li
              className=""
              onMouseEnter={onMouseEnter3}
              onMouseLeave={onMouseLeave3}
            >
              <NavLink
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <span className="nav-text">Coaching</span>
                <i className="fas fa-caret-down" />{" "}
              </NavLink>
              {dropdown3 && <Dropdown menuItems="coaching" />}
            </li>
            <li>
              <a
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a
                className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a
                className="social-icon-link email"
                to={`mailto:jordan@jordanvoss.online`}
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fas fa-envelope" />
              </a>
            </li>
          </ul>
        </div>

        <div id="mobile">
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
      </nav>
    </>
  );
}

//  <>
//       <nav className="navbar">
//         <div
//           className={
//             isNavScrolled ? "navbar-container scrolled" : "navbar-container"
//           }
//         >
//           <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
//             {/* TRVL
// 						<i className='fab fa-typo3' /> */}
//             <img src="/images/ody2.png" className="lgo" alt="logo"></img>
//           </NavLink>
//           <div className="menu-icon">
//             <HamburgerMenu
//               isOpen={click}
//               menuClicked={handleClick}
//               width={30}
//               height={20}
//               strokeWidth={1}
//               rotate={0}
//               color="white"
//               borderRadius={5}
//               animationDuration={0.5}
//             />
//           </div>
//           <ul
//             className={click ? "nav-menu active" : "nav-menu"}
//             style={{ height: click ? "100vh" : "80px", width: "100vw" }}
//           >
//             <li
//               className="nav-item"
//               onMouseEnter={onMouseEnter1}
//               onMouseLeave={onMouseLeave1}
//             >
//               <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
//                 About <i className="fas fa-caret-down" />
//               </NavLink>
//               {dropdown1 && <Dropdown menuItems="about" />}
//             </li>
//             <li
//               className="nav-item"
//               onMouseEnter={onMouseEnter2}
//               onMouseLeave={onMouseLeave2}
//             >
//               <NavLink
//                 to="/services"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Resources <i className="fas fa-caret-down" />
//               </NavLink>
//               {dropdown2 && <Dropdown menuItems="resources" />}
//             </li>
//             <li
//               className="nav-item"
//               onMouseEnter={onMouseEnter3}
//               onMouseLeave={onMouseLeave3}
//             >
//               <NavLink
//                 to="/services"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Coaching <i className="fas fa-caret-down" />
//               </NavLink>
//               {dropdown3 && <Dropdown menuItems="coaching" />}
//             </li>
//             <div className="social-icons nav-item">
//               <NavLink
//                 className="social-icon-link facebook"
//                 to="/"
//                 target="_blank"
//                 aria-label="Facebook"
//               >
//                 <i className="fab fa-facebook-f" />
//               </NavLink>
//               <NavLink
//                 className="social-icon-link instagram"
//                 to="/"
//                 target="_blank"
//                 aria-label="Instagram"
//               >
//                 <i className="fab fa-instagram" />
//               </NavLink>
//               <NavLink
//                 className="social-icon-link email"
//                 to={`mailto:jordan@jordanvoss.online`}
//                 target="_blank"
//                 aria-label="Youtube"
//               >
//                 <i className="fas fa-envelope" />
//               </NavLink>
//             </div>
//             <li>
//               <NavLink
//                 to="/sign-up"
//                 className="nav-links-mobile"
//                 onClick={closeMobileMenu}
//               >
//                 Join Now
//               </NavLink>
//             </li>
//           </ul>
//           {button && (
//             <NavLink to="/sign-up" className="btn-mobile">
//               <button className={"btn btn--outline"}>Join Now</button>
//             </NavLink>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

export default Navbar;
