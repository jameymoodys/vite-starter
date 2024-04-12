import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { BUTTON_TYPES } from "../../../../utils/consts";
import LibraryMenuItem from "../components/LibraryMenuItem";
import { MdSearch } from "react-icons/md";
import Select from "../../../../components/Select";
import SmallItalicText from "../../../../components/Typography/SmallItalicText";
import NewMapDialog from "./components/NewMapDialog";

const MENU_ITEMS = [
  {
    title: "html",
    id: 1,
  },
  {
    title: "react",
    id: 2,
  },
  {
    title: "PRO",
    id: 3,
  },
];

const DIALOG_TYPES = {
  NEW_MAP: "NEW_MAP",
};

const ExtractionMaps = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState(null);
  const [openDialog, setOpenDialog] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const renderDialog = () => {
    switch (openDialog) {
      case DIALOG_TYPES.NEW_MAP:
        return <NewMapDialog handleClose={() => setOpenDialog(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="my-2">
      <div className="my-2 ml-5 flex items-center">
        <div className="mr-5">
          <Button
            styleType={BUTTON_TYPES.SMALL_BLUE}
            onClick={() => setOpenDialog(DIALOG_TYPES.NEW_MAP)}
          >
            New Map
          </Button>
        </div>
        <div className="flex items-center">
          <div className="pr-2">
            <SmallItalicText>Client/Facility:</SmallItalicText>
          </div>
          <div>
            <Select
              value={filterValue}
              onChange={(v) => setFilterValue(v)}
              menuItems={MENU_ITEMS}
            />
          </div>
        </div>
        <div className="ml-3">
          <button className=" p-2 text-grey-icons hover:rounded-none hover:bg-blue-button-hover hover:text-blue-text">
            <MdSearch size={22} />
          </button>
        </div>
      </div>
      {data.map((el) => (
        <LibraryMenuItem
          el={el}
          setExpandedId={setExpandedId}
          expandedId={expandedId}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      ))}
      {renderDialog()}
    </div>
  );
};

export default ExtractionMaps;
