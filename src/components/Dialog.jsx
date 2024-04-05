import React from "react";
import {
  Dialog as DialogMaterial,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Button from "./Button";
import { BUTTON_TYPES } from "../utils/consts";

const Dialog = ({ isOpen, handleOpen, title }) => {
  return (
    <DialogMaterial
      open={isOpen}
      handler={handleOpen}
      className="w-[108px] rounded-none"
    >
      <div className="mt-[20px] px-[32px] text-[16px] uppercase text-blue-text">
        {title}
      </div>
      <DialogBody>Dialog Body</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button onClick={handleOpen} type={BUTTON_TYPES.NORMAL_CONFIRM}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </DialogMaterial>
  );
};

export default Dialog;
