import React from "react";
import Button from "../../../components/Button";
import { BUTTON_TYPES } from "../../../utils/consts";

const Entities = () => {
  return (
    <div className="my-2">
      <div className="my-2 ml-5 flex items-center">
        <div className="pt-2">
          <Button styleType={BUTTON_TYPES.SMALL_BLUE}>New Entity</Button>
        </div>
      </div>
    </div>
  );
};

export default Entities;
