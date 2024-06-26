import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
import SmallItalicText from "./Typography/SmallItalicText";

const SubMenu = ({ links }) => {
  return (
    <div className="inline-flex flex-nowrap">
      {links.map((el, index) => (
        <NavLink
          key={index}
          to={el.link}
          className={({ isActive }) =>
            clsx(
              `z-10 cursor-pointer border-b-2 px-6 py-2 text-[14px] hover:border-blue-dark hover:text-blue-dark`,
              isActive ? "border-blue-dark text-blue-dark" : "text-grey-icons",
            )
          }
        >
          <div>{el.displayName}</div>
          {el.desc && <SmallItalicText>{el.desc}</SmallItalicText>}
        </NavLink>
      ))}
    </div>
  );
};

export default SubMenu;
