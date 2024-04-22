import React from "react";
import Button from "../../components/ui/Button";
import { MdArrowBack } from "react-icons/md";
import { BUTTON_TYPES } from "../../utils/consts";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import emptyFolder from "../../assets/icons/folder/icons-32-x-32-folder-draft.svg";
import HeadingText from "../../components/ui/Typography/HeadingText";
import Divider from "../../components/ui/Divider";
import SmallItalicText from "../../components/ui/Typography/SmallItalicText";
import LibraryButton from "../../components/reusable/LibraryButton/LibraryButton";
import {
  ROUTE_MAIN,
  ROUTE_SUBMISSION_FOLDER_VIEW_LIBRARY_EXTRACTION_MAPS,
} from "../../utils/routes";
import AddNewItemsMenu from "../../components/reusable/AddNewItemsMenu/AddNewItemsMenu";
import { MdMoreVert } from "react-icons/md";
import Menu from "../../components/ui/Menu";
import SubMenu from "../../components/ui/SubMenu";

const SubmissionFolderView = () => {
  const location = useLocation();

  const MENU_LINKS = [
    {
      displayName: "Documents",
      link: "documents",
      desc: "132 Documents received",
    },
    {
      displayName: "Automation",
      link: "automation",
      desc: "2 Automations Ready",
    },
  ];

  const MENU_OPTIONS = [
    {
      displayName: "Edit",
      action: () => console.log(true),
    },
    {
      displayName: "Unpublish",
      action: () => console.log(true),
    },
    {
      displayName: "Run Automation",
      action: () => console.log(true),
    },
    {
      displayName: "Archive",
      action: () => console.log(true),
    },
  ];

  return (
    <div>
      <div className="mx-4 mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-5">
            <Link to="/">
              <Button styleType={BUTTON_TYPES.ICON_BUTTON}>
                <MdArrowBack size={22} />
              </Button>
            </Link>
          </div>
          <div className="mr-3">
            <img src={emptyFolder} alt="empty folder" />
          </div>
          <div className="ml-4">
            <HeadingText additionalClasses="font-semibold">
              Submission Folder
            </HeadingText>
            <div>Production data files of PGIM project</div>
          </div>
          <div className="h-[50px]">
            <Divider />
          </div>
          <div className="ml-4">
            <SmallItalicText>Submitters: Jane Doe</SmallItalicText>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <Menu optionsList={MENU_OPTIONS}>
              <Button styleType={BUTTON_TYPES.ICON_BUTTON}>
                <MdMoreVert size={20} />
              </Button>
            </Menu>
          </div>
          <div className="h-[50px]">
            <Divider />
          </div>
          <div className="ml-4 flex">
            <AddNewItemsMenu />
            <LibraryButton
              route={location.pathname + "/library/extraction-maps"}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <SubMenu links={MENU_LINKS} />
      </div>
      <Outlet />
    </div>
  );
};

export default SubmissionFolderView;
