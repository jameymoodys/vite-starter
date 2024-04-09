import React from "react";
import { BUTTON_TYPES } from "../utils/consts";

const Button = ({
  onClick,
  children,
  styleType = BUTTON_TYPES.NORMAL_TRANSPARENT,
}) => {
  const getButtonStyled = () => {
    const sharedStyles = "flex items-center";
    switch (styleType) {
      case BUTTON_TYPES.SMALL_BLUE:
        return `${sharedStyles} bg-blue-light-opacity hover:bg-blue-button-hover px-2 py-1 text-blue-text text-xs`;
      case BUTTON_TYPES.SMALL_TRANSPARENT:
        return `${sharedStyles} hover:bg-blue-button-hover px-2 py-1 text-blue-text text-xs`;
      case BUTTON_TYPES.NORMAL_TRANSPARENT:
        return `${sharedStyles} hover:bg-blue-button-hover px-4 py-2 text-blue-text`;
      case BUTTON_TYPES.NORMAL_CANCEL:
        return `${sharedStyles} bg-white px-4 py-2`;
      case BUTTON_TYPES.NORMAL_CONFIRM:
        return `${sharedStyles} bg-white hover:text-white px-4 py-2 hover:bg-orange-ki`;
      default:
        return `hover:bg-blue-button-hover px-4 py-2 text-blue-text`;
    }
  };

  return (
    <button onClick={onClick} className={getButtonStyled()}>
      {children}
    </button>
  );
};

export default Button;
