import React from "react";
import { BUTTON_TYPES } from "../utils/consts";
import { clsx } from "clsx";

const Button = ({
  onClick,
  children,
  styleType = BUTTON_TYPES.NORMAL_TRANSPARENT,
  disabled = false,
  additionalClasses = "",
  type = "button",
}) => {
  const getButtonStyled = () => {
    const sharedStyles = "flex items-center disabled:cursor-default";
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
        return `${sharedStyles} ${normalButtonMargins} hover:bg-blue-button-hover text-blue-text bg-white`;
      case BUTTON_TYPES.NORMAL_CONFIRM:
        return `${sharedStyles} ${normalButtonMargins} bg-blue-dark hover:text-white hover:bg-orange-ki text-white disabled:opacity-50 disabled:hover:bg-blue-dark`;
      case BUTTON_TYPES.ICON_BUTTON:
        return "p-2 text-grey-icons hover:rounded-none hover:bg-blue-button-hover hover:text-blue-text";
      default:
        return `${normalButtonMargins} hover:bg-blue-button-hover text-blue-text`;
    }
  };

  return (
    <button
      onClick={onClick}
      className={clsx(getButtonStyled(), additionalClasses)}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
