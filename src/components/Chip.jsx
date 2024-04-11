import { IconButton } from "@material-tailwind/react";
import React from "react";

const Chip = ({ value, renderIcon, onClickIcon }) => {
  return (
    <div className="bg-blue-light-opacity flex h-[30px] min-w-[150px] items-center justify-between rounded-full px-3 capitalize text-black">
      <div className="pr-3">{value}</div>
      <IconButton
        size="sm"
        className="hover:bg-blue-dark h-[18px] w-[18px] rounded-full"
        onClick={onClickIcon}
      >
        {renderIcon && renderIcon()}
      </IconButton>
    </div>
  );
};

export default Chip;
