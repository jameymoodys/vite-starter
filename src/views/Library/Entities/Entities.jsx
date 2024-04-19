import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import { BUTTON_TYPES } from "../../../utils/consts";
import SmallItalicText from "../../../components/ui/Typography/SmallItalicText";
import SelectComponent from "../../../components/ui/Select";

const Entities = () => {
  const [filterValue, setFilterValue] = useState(null);

  return (
    <div className="my-2">
      <div className="my-2 ml-5 flex items-center pt-2">
        <div className="mr-5">
          <Button styleType={BUTTON_TYPES.SMALL_BLUE}>New Entity</Button>
        </div>
        <div className="flex items-center">
          <div className="pr-2">
            <SmallItalicText>Client/Facility:</SmallItalicText>
          </div>
          <div>
            <SelectComponent
              value={filterValue}
              onChange={(v) => setFilterValue(v)}
              menuItems={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entities;
