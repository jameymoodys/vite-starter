import React from "react";
import { BUTTON_TYPES } from "../utils/consts";

const Button = ({
  onClick,
  children,
  styleType = BUTTON_TYPES.NORMAL_TRANSPARENT,
}) => {
  const getButtonStyled = () => {
    const sharedStyles = "flex items-center";
    const smallButtonMargins = "px-2 py-1";
    const normalButtonMargins = "px-4 py-2";
    switch (styleType) {
      case BUTTON_TYPES.SMALL_BLUE:
        return `${sharedStyles} ${smallButtonMargins} bg-blue-light-opacity hover:bg-blue-button-hover text-blue-text text-xs`;
      case BUTTON_TYPES.SMALL_TRANSPARENT:
        return `${sharedStyles} ${smallButtonMargins} hover:bg-blue-button-hover text-blue-text text-xs`;
      case BUTTON_TYPES.NORMAL_TRANSPARENT:
        return `${sharedStyles} ${normalButtonMargins} hover:bg-blue-button-hover text-blue-text`;
      case BUTTON_TYPES.NORMAL_CANCEL:
        return `${sharedStyles} ${normalButtonMargins} bg-white `;
      case BUTTON_TYPES.NORMAL_CONFIRM:
        return `${sharedStyles} ${normalButtonMargins} bg-white hover:text-white  hover:bg-orange-ki`;
      default:
        return `${normalButtonMargins} hover:bg-blue-button-hover text-blue-text`;
    }
  };

  return (
    <button onClick={onClick} className={getButtonStyled()}>
      {children}
    </button>
  );
};

export default Button;
