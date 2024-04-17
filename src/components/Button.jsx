import React from "react";
import { BUTTON_TYPES } from "../utils/consts";
import clsx from "clsx";

const sharedStyles = "flex items-center disabled:cursor-default";
const smallButtonMargins = "px-2 py-1";
const normalButtonMargins = "px-4 py-2";

const BUTTON_STYLES = {
  [BUTTON_TYPES.SMALL_BLUE]: `${sharedStyles} ${smallButtonMargins} bg-blue-light-opacity hover:bg-blue-button-hover text-blue-dark text-xs`,
  [BUTTON_TYPES.SMALL_TRANSPARENT]: `${sharedStyles} ${smallButtonMargins} hover:bg-blue-button-hover text-blue-dark text-xs`,
  [BUTTON_TYPES.NORMAL_TRANSPARENT]: `${sharedStyles} ${normalButtonMargins} hover:bg-blue-button-hover text-blue-dark`,
  [BUTTON_TYPES.NORMAL_CANCEL]: `${sharedStyles} ${normalButtonMargins} hover:bg-blue-button-hover text-blue-dark bg-white`,
  [BUTTON_TYPES.NORMAL_CONFIRM]: `${sharedStyles} ${normalButtonMargins} bg-blue-dark hover:text-white hover:bg-orange-ki text-white disabled:opacity-50 disabled:hover:bg-blue-dark`,
  [BUTTON_TYPES.ICON_BUTTON]:
    "p-2 text-grey-icons hover:rounded-none hover:bg-blue-button-hover hover:text-blue-dark",
};

const Button = ({
  onClick,
  children,
  styleType = BUTTON_TYPES.NORMAL_TRANSPARENT,
  disabled = false,
  additionalClasses = "",
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(BUTTON_STYLES[styleType], additionalClasses)}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
