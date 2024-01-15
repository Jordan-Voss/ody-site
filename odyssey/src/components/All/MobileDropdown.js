import React, { useState } from "react";
import {
  ResourcesMenuItems,
  CoachingMenuItems,
  AboutMenuItems,
} from "./MenuItems";
import "./Dropdown.css";
import { Link, NavLink } from "react-router-dom";

function MobileDropdown({
  mobileDropdown,
  closeMobileMenu,
  menuItems,
  subMenuItem,
}) {
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
            <NavLink
              to={item.path}
              onClick={closeMobileMenu}
              className={
                mobileDropdown
                  ? subMenuItem == item.title
                    ? "mobile-dropdown-active"
                    : "mobile-dropdown"
                  : "mobile-hidden"
              }
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default MobileDropdown;
