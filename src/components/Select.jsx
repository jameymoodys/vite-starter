import React from "react";
import * as Select from "@radix-ui/react-select";
import { MdKeyboardArrowDown } from "react-icons/md";

const SelectComponent = ({ onChange, value, menuItems }) => {
  // TODO: Fix rotating icon
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className="relative flex items-center">
        <div className="relative flex items-center">
          <Select.Value aria-label={value}>{value}</Select.Value>
          <MdKeyboardArrowDown
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </div>
      </Select.Trigger>
      <Select.Portal className="z-50">
        <Select.Content
          position="popper"
          className="absolute mt-1 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <Select.Viewport>
            {menuItems.map((item) => (
              <Select.Item
                key={item.id}
                value={item.title}
                className="cursor-pointer  pb-2 pl-2"
              >
                <Select.ItemText className="text-black-500">
                  {item.title || "test"}
                </Select.ItemText>
                <Select.ItemIndicator>…</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectComponent;
