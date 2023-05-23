import React, { useState } from "react";
import {
  ResourcesMenuItems,
  CoachingMenuItems,
  AboutMenuItems,
} from "./MenuItems";
import "./Dropdown.css";
import { Link, NavLink } from "react-router-dom";

function Dropdown(menuItems) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const menu =
    menuItems.menuItems !== "about"
      ? menuItems.menuItems === "coaching"
        ? CoachingMenuItems
        : ResourcesMenuItems
      : AboutMenuItems;
  console.log("wrgewrherher" + menuItems.menuItems);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                // activeClassName="big-active"
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
