import React from "react";
import Button from "../../components/ui/Button";
import { MdArrowBack } from "react-icons/md";
import { BUTTON_TYPES } from "../../utils/consts";
import { Link, Outlet, useNavigate } from "react-router-dom";
import emptyFolder from "../../assets/icons/folder/icons-32-x-32-folder-draft.svg";
import HeadingText from "../../components/ui/Typography/HeadingText";
import Divider from "../../components/ui/Divider";
import SmallItalicText from "../../components/ui/Typography/SmallItalicText";
import LibraryButton from "../../components/reusable/LibraryButton/LibraryButton";
import {
  ROUTE_MAIN,
  ROUTE_SUBMISSION_FOLDER_VIEW_LIBRARY_EXTRACTION_MAPS,
} from "../../utils/routes";

const SubmissionFolderView = () => {
  const navigate = useNavigate();
  const closeDrawer = () => {
    navigate("/submission-folders/3");
  };

  return (
    <div>
      <div className="mx-4 mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <Link to="/">
              <Button styleType={BUTTON_TYPES.ICON_BUTTON}>
                <MdArrowBack size={22} />
              </Button>
            </Link>
          </div>
          <div>
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
          <div>Options Menu</div>
          <div className="h-[50px]">
            <Divider />
          </div>
          <div className="ml-4">
            <LibraryButton
              route={ROUTE_SUBMISSION_FOLDER_VIEW_LIBRARY_EXTRACTION_MAPS(3)}
            />
          </div>
        </div>
      </div>
      <div>SubMenu</div>
      <div>Table</div>
      <Outlet context={{ closeDrawer }} />
    </div>
  );
};

export default SubmissionFolderView;
