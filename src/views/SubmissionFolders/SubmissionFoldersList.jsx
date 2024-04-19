import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { ROUTE_MAIN } from "../../utils/routes";
import HeadingText from "../../components/ui/Typography/HeadingText";
import { BUTTON_TYPES } from "../../utils/consts";
import DatePickerCustom from "../../components/ui/DatePicker";
import LibraryButton from "../../components/reusable/LibraryButton/LibraryButton";
import AddNewItemsMenu from "../../components/reusable/AddNewItemsMenu/AddNewItemsMenu";
import SubMenu from "../../components/ui/SubMenu";

const MENU_LINKS = [
  {
    displayName: "Active",
    link: "/",
  },
  {
    displayName: "Archive",
    link: "/archive",
  },
];

const SubmissionFolders = () => {
  const navigate = useNavigate();
  const closeDrawer = () => {
    navigate(ROUTE_MAIN);
  };

  return (
    <>
      <div className="mx-4 mt-4 flex items-center justify-between">
        <HeadingText>Submission Folders</HeadingText>
        <div className="flex">
          <AddNewItemsMenu />
          <LibraryButton />
        </div>
      </div>
      <div>
        <SubMenu links={MENU_LINKS} />
      </div>
      <Outlet context={{ closeDrawer }} />
      <Link to="/submission-folders/3/documents">View Submission folder</Link>
      <div className="ml-5 mt-5 w-[500px]">
        <DatePickerCustom />
      </div>
    </>
  );
};

export default SubmissionFolders;
