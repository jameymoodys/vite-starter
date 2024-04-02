import React from "react";
import Button from "../../../components/Button";
import { BUTTON_TYPES } from "../../../utils/consts";

const Entities = () => {
  return (
    <div className="my-2">
      <div className="my-2 ml-2">
        <Button type={BUTTON_TYPES.SMALL_BLUE}>New Entity</Button>
      </div>
    </div>
  );
};

export default Entities;
