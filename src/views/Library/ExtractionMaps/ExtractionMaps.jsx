import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Button from "../../../components/ui/Button";
import { BUTTON_TYPES } from "../../../utils/consts";
import LibraryMenuItem from "../components/LibraryMenuItem";
import { MdSearch } from "react-icons/md";
import SelectComponent from "../../../components/ui/Select";
import SmallItalicText from "../../../components/ui/Typography/SmallItalicText";
import NewMapDialog from "./NewMapDialog";
import { getExtractionMaps } from "../../../api/extractionMaps";
import QueryStatus from "../../../components/ui/QueryStatus";

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
  const [filterValue, setFilterValue] = useState(1);
  const [openDialog, setOpenDialog] = useState(null);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["extractionMaps"],
    queryFn: () => getExtractionMaps(),
  });

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
            <SelectComponent
              value={filterValue}
              onChange={(v) => setFilterValue(v)}
              menuItems={MENU_ITEMS}
            />
          </div>
        </div>
        <div className="ml-3">
          <Button styleType={BUTTON_TYPES.ICON_BUTTON}>
            <MdSearch size={22} />
          </Button>
        </div>
      </div>
      <div className="h-[900px] overflow-auto">
        <QueryStatus isLoading={isLoading} isError={isError}>
          {data?.map((el) => (
            <LibraryMenuItem
              el={el}
              setExpandedId={setExpandedId}
              expandedId={expandedId}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          ))}
        </QueryStatus>
      </div>
      {renderDialog()}
    </div>
  );
};

export default ExtractionMaps;
