import React, { useState } from "react";

const Input = ({ label, isError }) => {
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
    <div className="relative mb-8">
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`z-10 block w-full border-0 border-b-2 border-gray-300 px-0 pb-1 outline-none transition-all duration-200  focus:border-blue-500 focus:ring-0 ${isError ? "border-red-500" : ""}`}
      />
      <label
        className={`pointer-events-none absolute bottom-0 left-0 px-0 py-1 transition-all duration-200 ${isFocused || hasValue ? "-translate-y-7 transform text-sm text-blue-500" : "text-gray-500"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
