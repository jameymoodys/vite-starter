import React from "react";
import { Option, Select as SelectMaterial } from "@material-tailwind/react";

const Select = ({ onChange, value }) => {
  return (
    <SelectMaterial
      variant="standard"
      className="!after:border-0 !after:border-white border-0"
      label=""
      selected={(element) =>
        element &&
        React.cloneElement(element, {
          disabled: true,
          className:
            "flex items-center opacity-100 px-0 gap-2 pointer-events-none pt-0 border-white",
        })
      }
      value={value}
      onChange={(val) => onChange(val)}
    >
      <Option value="html">Material Tailwind HTML</Option>
      <Option value="react">Material Tailwind React</Option>
    </SelectMaterial>
  );
};

export default Select;
