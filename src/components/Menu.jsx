import React from "react";

const Menu = ({ optionsList }) => {
  return (
    <div className="absolute right-1 z-10 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div
        className="cursor-pointer py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {optionsList.map((el, index) => (
          <div
            key={index}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            onClick={el.action}
          >
            {el.displayName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
