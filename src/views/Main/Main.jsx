import React, { useState } from "react";
import Button from "../../components/Button";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ROUTER_LINKS } from "../../utils/routes";
import { MdAdd } from "react-icons/md";
import Menu from "../../components/Menu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import HeadingText from "../../components/Typography/HeadingText";
import { BUTTON_TYPES } from "../../utils/consts";
import NewSubmissionFolderDialog from "./containers/components/NewSubmissionFolderDialog";

const Main = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(ROUTER_LINKS.LIBRARY);

  const open = location.pathname.includes(ROUTER_LINKS.LIBRARY);

  const openDrawer = () => navigate(ROUTER_LINKS.LIBRARY_EXTRACTION_MAPS);
  const closeDrawer = () => {
    navigate(ROUTER_LINKS.MAIN);
  };

  const ADD_MENU_OPTIONS = [
    {
      displayName: "New Submission Folder",
      action: () => setOpenDialog(true),
    },
    {
      displayName: "New Extraction Map",
      action: () => setOpenDialog(true),
    },
  ];

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={closeDrawer}
        ></div>
      )}
      <div className="mx-4 flex items-center justify-between pt-2">
        <HeadingText>Submission Folders</HeadingText>
        <div className="flex">
          <Menu optionsList={ADD_MENU_OPTIONS}>
            <div className="mr-2">
              <Button styleType={BUTTON_TYPES.ICON_BUTTON}>
                <MdAdd size={22} />
              </Button>
            </div>
          </Menu>
          <Button onClick={openDrawer} additionalClasses="mr-2">
            <div className="mr-2">
              <MdOutlineLibraryBooks />
            </div>
            Library
          </Button>
        </div>
      </div>
      <NewSubmissionFolderDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
      <Outlet context={{ closeDrawer }} />
    </>
  );
};

export default Main;
