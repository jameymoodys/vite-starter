import React from "react";

const SmallItalicText = ({ children }) => {
  return (
    <div className="text-[12px] font-medium italic text-grey-icons">
      {children}
    </div>
  );
};

export default SmallItalicText;
