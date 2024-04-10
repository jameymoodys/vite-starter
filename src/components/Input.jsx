import React from "react";
import { Input as InputMaterial } from "@material-tailwind/react";

const Input = ({ label, isError }) => {
  return (
    <div className="mb-[16px]">
      <InputMaterial
        color="blue"
        variant="standard"
        label={label}
        error={isError}
        className="w-[420px]"
      />
    </div>
  );
};

export default Input;
