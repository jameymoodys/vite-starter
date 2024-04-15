import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ROUTER_LINKS } from "../../utils/routes";
import { MdAdd } from "react-icons/md";
import DialogComponent from "../../components/Dialog";
import Menu from "../../components/Menu";
import Input from "../../components/Input";
import { MdOutlineLibraryBooks } from "react-icons/md";
import HeadingText from "../../components/Typography/HeadingText";
import { BUTTON_TYPES } from "../../utils/consts";

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
            <Button styleType={BUTTON_TYPES.ICON_BUTTON}>
              <MdAdd size={22} />
            </Button>
          </Menu>
          <Button onClick={openDrawer}>
            <div className="pr-2">
              <MdOutlineLibraryBooks />
            </div>
            Library
          </Button>
        </div>
      </div>
      <DialogComponent
        isOpen={openDialog}
        handleClose={() => setOpenDialog((open) => !open)}
        title={"NEW SUBMISSION FOLDER"}
      >
        <div className="mx-10 my-5">
          <Input label="Submission Folder Name" />
          <Input label="Description" />
          <div className="flex justify-end">
            <Button
              variant="text"
              color="red"
              onClick={() => setOpenDialog(null)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button type="submit" styleType={BUTTON_TYPES.NORMAL_CONFIRM}>
              <span>Confirm</span>
            </Button>
          </div>
        </div>
      </DialogComponent>
      <Outlet context={{ closeDrawer }} />
    </>
  );
};

export default Main;
