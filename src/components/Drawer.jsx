import React from "react";
import { MdClose } from "react-icons/md";
import HeadingText from "../components/Typography/HeadingText";

const Drawer = ({ handleClose, label, children }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black opacity-50"
        onClick={handleClose}
      ></div>
      <div className="drawer fixed right-0 top-0 z-50 h-full w-[600px] translate-x-0 transform bg-white text-black transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-5">
          <HeadingText additionalClasses="text-blue-dark uppercase">
            {label}
          </HeadingText>
          <div className="flex items-center justify-center">
            <div
              className="group inline-flex cursor-pointer items-center rounded p-2 font-bold text-blue-dark hover:rounded-none hover:bg-blue-button-hover hover:text-blue-dark"
              onClick={handleClose}
            >
              <span className="group-hover:block">
                <MdClose size={20} />
              </span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Drawer;
