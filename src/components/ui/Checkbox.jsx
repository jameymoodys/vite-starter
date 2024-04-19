import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { MdCheck } from "react-icons/md";
import clsx from "clsx";

const CheckboxComponent = ({ checked, setChecked, label }) => {
  return (
    <form>
      <div className="flex items-center">
        <Checkbox.Root
          checked={checked}
          onCheckedChange={setChecked}
          className={clsx(
            "hover:bg-blue-hover flex size-[15px] items-center justify-center rounded-sm border outline-none",
            checked
              ? "bg-blue-focus border-blue-focus"
              : "border-grey-icons bg-white",
          )}
          id="c1"
        >
          <Checkbox.Indicator className="text-white">
            <MdCheck />
          </Checkbox.Indicator>
        </Checkbox.Root>
        {label && (
          <label
            className="cursor-pointer pl-[15px] text-[14px] leading-none text-black"
            htmlFor="c1"
          >
            {label}
          </label>
        )}
      </div>
    </form>
  );
};

export default CheckboxComponent;
