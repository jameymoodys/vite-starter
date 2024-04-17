import clsx from "clsx";
import React from "react";

const HeadingText = ({ children, additionalClasses = "" }) => {
  return (
    <span className={clsx("text-[16px] font-medium", additionalClasses)}>
      {children}
    </span>
  );
};

export default HeadingText;
