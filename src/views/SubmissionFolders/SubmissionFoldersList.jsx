import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ROUTE_MAIN } from "../../utils/routes";
import HeadingText from "../../components/ui/Typography/HeadingText";
import DatePickerCustom from "../../components/ui/DatePicker";
import LibraryButton from "../../components/reusable/LibraryButton/LibraryButton";
import AddNewItemsMenu from "../../components/reusable/AddNewItemsMenu/AddNewItemsMenu";
import SubMenu from "../../components/ui/SubMenu";

const MENU_LINKS = [
  {
    displayName: "Active",
    link: "/active",
  },
  {
    displayName: "Archive",
    link: "/archive",
  },
];

const SubmissionFolders = () => {
  let location = useLocation();
  return (
    <>
      <div className="mx-4 mt-4 flex items-center justify-between">
        <HeadingText>Submission Folders</HeadingText>
        <div className="flex">
          <AddNewItemsMenu />
          <LibraryButton
            route={location.pathname + "/library/extraction-maps"}
          />
        </div>
      </div>
      <div>
        <SubMenu links={MENU_LINKS} />
      </div>
      <Outlet />
      <Link to="/submission-folders/3/documents">View Submission folder</Link>
      <div className="ml-5 mt-5 w-[500px]">
        <DatePickerCustom />
      </div>
    </>
  );
};

export default SubmissionFolders;
