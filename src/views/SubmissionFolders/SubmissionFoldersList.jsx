import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ROUTE_MAIN } from "../../utils/routes";
import { MdAdd } from "react-icons/md";
import Menu from "../../components/ui/Menu";
import HeadingText from "../../components/ui/Typography/HeadingText";
import { BUTTON_TYPES } from "../../utils/consts";
import DatePickerCustom from "../../components/ui/DatePicker";
import NewSubmissionFolderDialog from "../Library/components/NewSubmissionFolderDialog";
import LibraryButton from "../../components/reusable/LibraryButton/LibraryButton";

const SubmissionFolders = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const closeDrawer = () => {
    navigate(ROUTE_MAIN);
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
      <div className="mx-4 mt-4 flex items-center justify-between">
        <HeadingText>Submission Folders</HeadingText>
        <div className="flex">
          <Menu optionsList={ADD_MENU_OPTIONS}>
            <div className="mr-2">
              <Button styleType={BUTTON_TYPES.ICON_BUTTON}>
                <MdAdd size={22} />
              </Button>
            </div>
          </Menu>
          <LibraryButton />
        </div>
      </div>
      {openDialog && (
        <NewSubmissionFolderDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      )}
      <Outlet context={{ closeDrawer }} />
      <Link to="/submission-folders/3">View Submission folder</Link>
      <div className="ml-5 mt-5 w-[500px]">
        <DatePickerCustom />
      </div>
    </>
  );
};

export default SubmissionFolders;
