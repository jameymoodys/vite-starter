import React from "react";

const Chip = ({ value, renderIcon, onClickIcon }) => {
  return (
    <div className="flex h-[30px] min-w-[120px] max-w-[180px] cursor-pointer items-center justify-between rounded-full bg-blue-light-opacity px-3 capitalize text-black">
      <div className="overflow-hidden overflow-ellipsis whitespace-nowrap pr-4 text-[12px]">
        {value}
      </div>
      <button
        className="flex items-center justify-center rounded-full bg-[#a0becd] p-1 hover:bg-blue-dark"
        onClick={onClickIcon}
      >
        <div className="text-white">{renderIcon && renderIcon()}</div>
      </button>
    </div>
  );
};

export default Chip;
