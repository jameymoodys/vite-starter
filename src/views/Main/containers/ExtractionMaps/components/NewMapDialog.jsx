import React from "react";
import Dialog from "../../../../../components/Dialog";
import Input from "../../../../../components/Input";
import SmallItalicText from "../../../../../components/Typography/SmallItalicText";

const EXTRACTION_MAPS_TYPES = [
  {
    title: "Data Import",
    desc: "Extracts Excel format and Text formats delimited with comma, tab or pipe",
  },
  {
    title: "IVY Extraction",
    desc: "Extracts PDF, requires a mapping file prepared in Ivy",
  },
  {
    title: "Custom Process",
    desc: "Extracts custom formats, requires an executable file in Python, JS etc.",
  },
  {
    title: "JSON Extraction",
    desc: "Should follow a JSON template",
  },
  {
    title: "Dataset Connector",
    desc: "API Configurator",
  },
];

const NewMapDialog = ({ handleClose }) => {
  return (
    <Dialog isOpen={true} title="NEW EXTRACTION MAP" handleClose={handleClose}>
      <div className="m-10">
        <Input label="Map Name" />
        <div className="my-4 text-blue-text">
          What is the expected extraction map type?
        </div>
        <div>
          {EXTRACTION_MAPS_TYPES.map((el, index) => (
            <div
              key={index}
              className="mb-4 flex cursor-pointer p-5 hover:bg-blue-button-hover"
            >
              <div className="mr-4 h-[40px] w-[40px] bg-blue-text"></div>
              <div>
                <div>{el.title}</div>
                <SmallItalicText>{el.desc}</SmallItalicText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};

export default NewMapDialog;
