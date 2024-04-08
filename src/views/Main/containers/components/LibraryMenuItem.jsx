import React from "react";
import Menu from "../../../../components/Menu";
import Button from "../../../../components/Button";
import { BUTTON_TYPES } from "../../../../utils/consts";
import { MdMoreVert } from "react-icons/md";
import { MdOutlineOpenInNew } from "react-icons/md";
import IconButton from "../../../../components/IconButton";
import SmallItalicText from "../../../../components/Typography/SmallItalicText";

const LibraryMenuItem = ({
  el,
  setExpandedId,
  expandedId,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const LIBRARY_MENU_OPTIONS = [
    { displayName: "Edit", action: () => console.log("Edit") },
    { displayName: "Rename", action: () => console.log("Rename") },
    { displayName: "Duplicate", action: () => console.log("Duplicate") },
    { displayName: "Delete", action: () => console.log("Delete") },
  ];

  return (
    <div
      key={el.id}
      className={`cursor-pointer  p-4 ${
        el.id === expandedId ? "bg-blue-300" : "hover:bg-blue-button-hover"
      }`}
      onClick={() => setExpandedId(el.id)}
    >
      <div className="flex justify-between">
        <div className="flex">
          <div className="pr-3">Logo</div>
          <div>
            <div>{el.website}</div>
            <SmallItalicText>{el.username}</SmallItalicText>
            {el.id === expandedId && (
              <>
                <div className="mt-2 text-xs">Additional Info</div>
                <div className="my-2 flex flex-row">
                  {[
                    { displayName: "View Sample File" },
                    {
                      displayName: "View Associated Data Files",
                    },
                  ].map((el, index) => (
                    <div key={index} className="mr-2">
                      <Button styleType={BUTTON_TYPES.SMALL_TRANSPARENT}>
                        <div>{el.displayName}</div>
                        <div>
                          <MdOutlineOpenInNew />
                        </div>
                      </Button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="relative inline-block text-left">
          <Menu optionsList={LIBRARY_MENU_OPTIONS}>
            <IconButton
              onClick={() => setIsMenuOpen(isMenuOpen ? null : el.id)}
            >
              <MdMoreVert size={18} />
            </IconButton>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default LibraryMenuItem;
