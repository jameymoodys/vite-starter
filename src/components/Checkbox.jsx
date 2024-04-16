import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { MdAdd } from "react-icons/md";

const CheckboxComponent = ({ checked, setChecked }) => {
  return (
    <form>
      <div className="flex items-center">
        <Checkbox.Root
          checked={checked}
          onCheckedChange={setChecked}
          className="hover:bg-blue-hover flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none"
          id="c1"
        >
          <Checkbox.Indicator className="text-violet11">
            <MdAdd />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          className="cursor-pointer pl-[15px] text-[15px] leading-none text-black"
          htmlFor="c1"
        >
          Publish
        </label>
      </div>
    </form>
  );
};

export default CheckboxComponent;
