import React, { useState } from "react";
import Menu from "../../ui/Menu";
import Button from "../../ui/Button";
import { MdAdd } from "react-icons/md";
import NewSubmissionFolderDialog from "../../../views/Library/components/NewSubmissionFolderDialog";
import { BUTTON_TYPES } from "../../../utils/consts";

const AddNewItemsMenu = () => {
  const [openDialog, setOpenDialog] = useState(false);

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
      <Menu optionsList={ADD_MENU_OPTIONS}>
        <div className="mr-2">
          <Button styleType={BUTTON_TYPES.ICON_BUTTON}>
            <MdAdd size={22} />
          </Button>
        </div>
      </Menu>
      {openDialog && (
        <NewSubmissionFolderDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      )}
    </>
  );
};

export default AddNewItemsMenu;
