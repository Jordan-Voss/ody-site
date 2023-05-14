import React, { useState } from "react";
import {
  ResourcesMenuItems,
  CoachingMenuItems,
  AboutMenuItems,
} from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function MobileDropdown({ mobileDropdown, closeMobileMenu, menuItems }) {
  const menu =
    menuItems !== "about"
      ? menuItems === "coaching"
        ? CoachingMenuItems
        : ResourcesMenuItems
      : AboutMenuItems;
  console.log("mnu items" + menuItems);
  console.log("mnu" + JSON.stringify(menu));

  return (
    <>
      {menu.map((item, index) => {
        return (
          <li key={index} className="active-dropdown">
            <Link
              to={item.path}
              onClick={closeMobileMenu}
              className={mobileDropdown ? "mobile-dropdown" : "mobile-hidden"}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default MobileDropdown;
