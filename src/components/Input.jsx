import clsx from "clsx";
import React, { useState } from "react";

const Input = ({ label, errors, register, name, validation = {} }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  return (
    <div>
      <div className="relative">
        <input
          {...register(name, validation)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={clsx(
            `z-10 block w-full border-b-[1px] px-0 pb-1 outline-none transition-all duration-200 focus:ring-0`,
            errors[name]
              ? "border-red-error"
              : `focus:border-blue-focus border-grey-icons`,
          )}
        />
        <label
          className={clsx(
            `pointer-events-none absolute bottom-0 left-0 px-0 py-2 transition-all duration-200`,
            errors[name]
              ? "text-red-error"
              : isFocused
                ? "text-blue-focus -translate-y-7 transform text-sm"
                : "text-grey-icons",
            (isFocused || hasValue) && "-translate-y-7 transform text-sm",
          )}
        >
          {label}
        </label>
      </div>
      {errors[name] && (
        <span className="text-[12px] italic text-red-error">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default Input;
