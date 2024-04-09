import React from "react";
import { NavLink } from "react-router-dom";

const SubMenu = ({ links }) => {
  return (
    <div className="inline-flex flex-nowrap">
      {links.map((el, index) => (
        <NavLink
          key={index}
          to={el.link}
          className={({ isActive }) =>
            `z-10 cursor-pointer border-b-2 px-6 py-2 hover:border-blue-text hover:text-blue-text ${
              isActive ? "border-blue-text text-blue-text" : "text-grey-icons"
            }`
          }
        >
          {el.displayName}
        </NavLink>
      ))}
    </div>
  );
};

export default SubMenu;
