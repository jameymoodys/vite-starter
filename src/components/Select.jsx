import React from "react";
import * as Select from "@radix-ui/react-select";
import { MdKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";

const SelectComponent = ({ onChange, value, menuItems, disabled }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Select.Root
      value={value}
      onValueChange={onChange}
      onOpenChange={setOpen}
      disabled={menuItems.length === 0 || disabled}
    >
      <Select.Trigger
        className={clsx(
          "relative flex items-center",
          (menuItems.length === 0 || disabled) && "opacity-30",
        )}
      >
        <div className="relative flex items-center">
          <div className="mr-2 min-w-[25px] text-[12px] italic">
            <Select.Value aria-label={value}>{value}</Select.Value>
          </div>
          <div>
            <MdKeyboardArrowDown
              size={18}
              className={`h-3.5 w-3.5 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
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
                className="cursor-pointer p-2 hover:bg-blue-button-hover"
              >
                <div className="text-[12px] italic text-black">
                  <Select.ItemText>{item.title || "test"}</Select.ItemText>
                </div>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectComponent;
