import React from "react";
import { IconButton as IconButtonMaterial } from "@material-tailwind/react";

const IconButton = ({ children, onClick }) => {
  return (
    <IconButtonMaterial
      onClick={onClick}
      variant="text"
      className="hover:rounded-none hover:bg-blue-button-hover hover:text-blue-text"
    >
      {children}
    </IconButtonMaterial>
  );
};

export default IconButton;
