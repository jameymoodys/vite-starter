import React from "react";

const Chip = ({ value, renderIcon, onClickIcon }) => {
  return (
    <div className="flex h-[30px] min-w-[150px] items-center justify-between rounded-full bg-blue-light-opacity px-3 capitalize text-black">
      <div className="pr-3">{value}</div>
      <button
        className="flex h-[18px] w-[18px] items-center justify-center rounded-full hover:bg-blue-dark"
        onClick={onClickIcon}
      >
        <div>{renderIcon && renderIcon()}</div>
      </button>
    </div>
  );
};

export default Chip;
