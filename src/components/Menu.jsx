import React from "react";
import {
  Menu as MenuMaterial,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Menu = ({ optionsList, children }) => {
  return (
    <>
      <MenuMaterial>
        <MenuHandler>{children}</MenuHandler>
        <MenuList className="p-0">
          {optionsList.map((el, index) => (
            <div
              key={index}
              className="cursor-pointer px-4 py-3 text-sm text-gray-700 outline-0  hover:bg-blue-button-hover"
              onClick={el.action}
            >
              {el.displayName}
            </div>
          ))}
        </MenuList>
      </MenuMaterial>
    </>
  );
};

export default Menu;
