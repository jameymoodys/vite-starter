import React from "react";
import SubMenu from "../../../components/SubMenu";
import { Outlet, useOutletContext } from "react-router-dom";
import { ROUTER_LINKS } from "../../../utils/routes";
import Drawer from "../../../components/Drawer";

const MENU_LINKS = [
  {
    displayName: "Extraction Maps",
    link: ROUTER_LINKS.LIBRARY_EXTRACTION_MAPS,
  },
  { displayName: "Entities", link: ROUTER_LINKS.LIBRARY_ENTITIES },
];

const LibraryDrawer = () => {
  const { closeDrawer } = useOutletContext();

  return (
    <Drawer handleClose={closeDrawer}>
      <div>
        <div className="relative">
          <SubMenu links={MENU_LINKS} />
          <div className="absolute top-10 h-[1px] w-full border-b-2" />
        </div>
      </div>
      <Outlet />
    </Drawer>
  );
};

export default LibraryDrawer;
