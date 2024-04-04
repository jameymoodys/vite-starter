import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { BUTTON_TYPES } from "../../../utils/consts";
import LibraryMenuItem from "./components/LibraryMenuItem";

const ExtractionMaps = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="my-2">
      <div className="my-2 ml-2">
        <Button type={BUTTON_TYPES.SMALL_BLUE}>New Map</Button>
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
