import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Select = ({ onChange, value, menuItems }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <>
      <Menu open={openMenu} handler={setOpenMenu}>
        <MenuHandler>
          <div className="flex items-center px-2 py-1 text-[12px] font-normal tracking-normal hover:cursor-pointer hover:bg-blue-button-hover">
            {value || "test"}
            <MdKeyboardArrowDown
              className={`h-3.5 w-3.5 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            />
          </div>
        </MenuHandler>
        <MenuList className="hidden overflow-visible p-0 lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {menuItems.map(({ title }) => (
              <MenuItem
                key={title}
                className="m-0"
                onClick={() => onChange(title)}
              >
                <Typography variant="small" color="blue-gray">
                  {title}
                </Typography>
              </MenuItem>
            ))}
          </ul>
        </MenuList>
      </Menu>
    </>
  );
};

export default Select;
