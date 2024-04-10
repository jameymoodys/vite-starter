import React from "react";
import { Dialog as DialogMaterial } from "@material-tailwind/react";

const Dialog = ({ isOpen, handleClose, title, children }) => {
  return (
    <DialogMaterial
      open={isOpen}
      handler={handleClose}
      className="rounded-none"
      size="sm"
    >
      <div className="mt-[20px] px-[32px] text-[16px] uppercase text-blue-text">
        {title}
      </div>
      {children}
    </DialogMaterial>
  );
};

export default Dialog;
