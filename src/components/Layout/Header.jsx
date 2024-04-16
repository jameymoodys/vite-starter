import React from "react";
import logo from "../../assets/logo/DILogo/dis-subm-admin-logo.svg";

const Header = () => {
  return (
    <div className="bg-blue-dark flex h-[104px] items-center text-white ">
      <div className="ml-4">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Header;
