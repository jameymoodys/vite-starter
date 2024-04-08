import React from "react";
import { Input as InputMaterial } from "@material-tailwind/react";

const Input = ({ label, isError }) => {
  return (
    <div className="mb-[16px]">
      <InputMaterial
        variant="standard"
        label={label}
        placeholder="Standard"
        error={isError}
        className="w-[320px]"
      />
    </div>
  );
};

export default Input;
