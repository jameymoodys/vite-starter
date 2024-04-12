import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Menu = ({ optionsList, children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
          sideOffset={5}
        >
          {optionsList.map((el, index) => (
            <DropdownMenu.Item
              key={index}
              onClick={el.action}
              className="cursor-pointer px-4 py-3 text-sm text-gray-700 outline-0  hover:bg-blue-button-hover"
            >
              {el.displayName}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Menu;
