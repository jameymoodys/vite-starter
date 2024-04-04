import React from "react";
import Menu from "../../../../components/Menu";
import Button from "../../../../components/Button";
import { BUTTON_TYPES } from "../../../../utils/consts";

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
            <div className="text-xs italic text-gray-400">{el.username}</div>
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
                      <Button type={BUTTON_TYPES.SMALL_TRANSPARENT}>
                        {el.displayName}
                      </Button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsMenuOpen(isMenuOpen ? null : el.id)}
            className="p-2"
          >
            Button
          </button>
          {isMenuOpen === el.id && <Menu optionsList={LIBRARY_MENU_OPTIONS} />}
        </div>
      </div>
    </div>
  );
};

export default LibraryMenuItem;
