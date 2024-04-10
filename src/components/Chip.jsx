import { IconButton } from "@material-tailwind/react";
import React from "react";

const Chip = ({ value, renderIcon, onClickIcon }) => {
  return (
    <div className="bg-blue-light-opacity flex h-[30px] w-[150px] items-center justify-between rounded-full px-3 capitalize text-black">
      <div>{value}</div>
      <IconButton
        className="hover:bg-blue-dark h-[20px] w-[20px] rounded-full"
        onClick={onClickIcon}
      >
        {renderIcon && renderIcon()}
      </IconButton>
    </div>
  );
};

export default Chip;
