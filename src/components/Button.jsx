import React from "react";
import { BUTTON_TYPES } from "../utils/consts";

const Button = ({
  handleAction,
  children,
  type = BUTTON_TYPES.NORMAL_TRANSPARENT,
}) => {
  const getButtonStyled = () => {
    switch (type) {
      case BUTTON_TYPES.SMALL_BLUE:
        return "bg-blue-button-hover hover:bg-blue-button-hover px-2 py-1 text-blue-text text-xs";
      case BUTTON_TYPES.SMALL_TRANSPARENT:
        return "hover:bg-blue-button-hover px-2 py-1 text-blue-text text-xs";
      case BUTTON_TYPES.NORMAL_TRANSPARENT:
        return "hover:bg-blue-button-hover px-4 py-2 text-blue-text";
      default:
        return "hover:bg-blue-button-hover px-4 py-2 text-blue-text";
    }
  };

  return (
    <button onClick={handleAction} className={getButtonStyled()}>
      {children}
    </button>
  );
};

export default Button;
