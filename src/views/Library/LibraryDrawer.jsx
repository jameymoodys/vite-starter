import React from "react";
import SubMenu from "../../components/ui/SubMenu";
import { Outlet, Route, Routes, useOutletContext } from "react-router-dom";
import Drawer from "../../components/ui/Drawer";
import ExtractionMaps from "./ExtractionMaps/ExtractionMaps";
import Entities from "./Entities/Entities";

const MENU_LINKS = [
  {
    displayName: "Extraction Maps",
    link: "extraction-maps",
  },
  { displayName: "Entities", link: "entities" },
];

const LibraryDrawer = () => {
  const { closeDrawer } = useOutletContext();

  return (
    <Drawer handleClose={closeDrawer} label={"Library"}>
      <div>
        <div className="relative">
          <SubMenu links={MENU_LINKS} />
          <div className="absolute top-[37px] h-[1px] w-full border-b-2" />
        </div>
      </div>
      <Routes>
        <Route path="extraction-maps" element={<ExtractionMaps />} />
        <Route path="entities" element={<Entities />} />
      </Routes>
    </Drawer>
  );
};

export default LibraryDrawer;
