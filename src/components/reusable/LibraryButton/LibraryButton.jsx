import React from "react";
import Button from "../../ui/Button";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTE_LIBRARY_EXTRACTION_MAPS } from "../../../utils/routes";

const LibraryButton = ({ route = ROUTE_LIBRARY_EXTRACTION_MAPS }) => {
  const navigate = useNavigate();
  const openDrawer = () => navigate(route);

  return (
    <div>
      <Button onClick={openDrawer} additionalClasses="mr-2">
        <div className="mr-2">
          <MdOutlineLibraryBooks />
        </div>
        Library
      </Button>
    </div>
  );
};

export default LibraryButton;
