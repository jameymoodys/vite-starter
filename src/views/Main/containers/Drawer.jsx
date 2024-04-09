import React from "react";
import SubMenu from "../../../components/SubMenu";
import { Outlet, useOutletContext } from "react-router-dom";
import { ROUTER_LINKS } from "../../../utils/routes";
import { MdClose } from "react-icons/md";

const MENU_LINKS = [
  {
    displayName: "Extraction Maps",
    link: ROUTER_LINKS.LIBRARY_EXTRACTION_MAPS,
  },
  { displayName: "Entities", link: ROUTER_LINKS.LIBRARY_ENTITIES },
];

const Drawer = () => {
  const { closeDrawer } = useOutletContext();

  return (
    <div className="drawer fixed right-0 top-0 z-50 h-full w-[600px] translate-x-0 transform bg-white text-black transition-transform duration-300 ease-in-out">
      <div className="flex items-center justify-between p-5">
        <div className="text-[16px] text-base text-blue-text">Library</div>
        <div className="flex items-center justify-center">
          <div
            className="group inline-flex cursor-pointer items-center rounded p-2 font-bold text-grey-icons hover:rounded-none hover:bg-blue-button-hover hover:text-blue-text"
            onClick={closeDrawer}
          >
            <span className="group-hover:block">
              <MdClose size={22} />
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <SubMenu links={MENU_LINKS} />
          <div className="absolute top-10 h-[1px] w-full border-b-2" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Drawer;
