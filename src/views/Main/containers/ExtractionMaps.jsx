import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { BUTTON_TYPES } from "../../../utils/consts";
import LibraryMenuItem from "./components/LibraryMenuItem";
import { MdSearch } from "react-icons/md";
import Select from "../../../components/Select";
import SmallItalicText from "../../../components/Typography/SmallItalicText";
import { IconButton } from "@material-tailwind/react";

const menuItems = [
  {
    title: "@material-tailwind/html",
    id: 1,
  },
  {
    title: "@material-tailwind/react",
    id: 2,
  },
  {
    title: "Material Tailwind PRO",
    id: 3,
  },
];

const ExtractionMaps = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="my-2">
      <div className="my-2 ml-5 flex items-center">
        <div className="mr-5">
          <Button styleType={BUTTON_TYPES.SMALL_BLUE}>New Map</Button>
        </div>
        <div className="flex items-center">
          <div className="pr-2">
            <SmallItalicText>Client/Facility:</SmallItalicText>
          </div>
          <div>
            <Select
              value={filterValue}
              onChange={(v) => setFilterValue(v)}
              menuItems={menuItems}
            />
          </div>
        </div>
        <div>
          <IconButton
            variant="text"
            className="ml-3 text-grey-icons hover:rounded-none hover:bg-blue-button-hover hover:text-blue-text"
          >
            <MdSearch size={22} />
          </IconButton>
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
    </div>
  );
};

export default ExtractionMaps;
