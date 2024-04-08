import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ROUTER_LINKS } from "../../utils/routes";
import { MdAdd } from "react-icons/md";
import Dialog from "../../components/Dialog";
import Menu from "../../components/Menu";
import Input from "../../components/Input";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";

const Main = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(ROUTER_LINKS.LIBRARY);

  const open = location.pathname.includes(ROUTER_LINKS.LIBRARY);

  const openDrawer = () => navigate(ROUTER_LINKS.LIBRARY_EXTRACTION_MAPS);
  const closeDrawer = () => {
    navigate(ROUTER_LINKS.MAIN);
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={closeDrawer}
        ></div>
      )}
      <div className="mx-2 flex items-center justify-between pt-2">
        <div>Submission Folders</div>
        <div className="flex">
          <Menu
            optionsList={[
              {
                displayName: "New Submission Folder",
                action: () => setOpenDialog(true),
              },
            ]}
          >
            <IconButton
              variant="text"
              className="hover:rounded-none hover:bg-blue-button-hover hover:text-blue-text"
            >
              <MdAdd />
            </IconButton>
          </Menu>
          <Button onClick={openDrawer}>
            <div className="pr-2">
              <MdOutlineLibraryBooks />
            </div>
            Library
          </Button>
        </div>
      </div>
      <Dialog
        isOpen={openDialog}
        handleOpen={() => setOpenDialog((open) => !open)}
        title={"NEW SUBMISSION FOLDER"}
      >
        <Input label="Submission Folder Name" />
        <Input label="Description" />
      </Dialog>
      <Outlet context={{ closeDrawer }} />
    </>
  );
};

export default Main;
