import React from "react";

const Footer = () => {
  return (
    <div className="bg-grey-background h-[24px] text-center text-sm">
      <div>
        &copy; Copyright {new Date().getFullYear()} Moody&apos;s Analytics, Inc.
        and/or its licensors and affiliates. All rights reserved. Build 0.0.0
      </div>
    </div>
  );
};

export default Footer;
