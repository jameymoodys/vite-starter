import React from "react";
import Button from "./Button";
import { BUTTON_TYPES } from "../utils/consts";

const FormActions = ({ setOpenDialog, isValid }) => {
  return (
    <div className="mb-[32px] mt-[56px] flex justify-end">
      <Button
        onClick={() => setOpenDialog(null)}
        styleType={BUTTON_TYPES.NORMAL_CANCEL}
        additionalClasses="mr-[8px]"
      >
        <span>Cancel</span>
      </Button>
      <Button
        disabled={!isValid}
        type="submit"
        styleType={BUTTON_TYPES.NORMAL_CONFIRM}
      >
        <span>Confirm</span>
      </Button>
    </div>
  );
};

export default FormActions;
