import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import Dialog from "../../../../../components/Dialog";
import Input from "../../../../../components/Input";
import SmallItalicText from "../../../../../components/Typography/SmallItalicText";
import Chip from "../../../../../components/Chip";
import { MdClose } from "react-icons/md";

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
  const [step, setStep] = useState(1);
  const [mapType, setMapType] = useState(null);

  const handleType = (type) => {
    setMapType(type);
    handleNextStep();
  };

  const handleNextStep = () => {
    setStep((step) => step + 1);
  };

  const handlePrevStep = () => {
    if (step !== 1) {
      setStep((step) => step - 1);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const renderUploadTitle = () => {
    switch (mapType) {
      case "Data Import":
        return (
          <div>
            Would you like to provide a Sample File? XLS, CSV and delimited TXT
            are supported.
          </div>
        );
      case "IVY Extraction":
        return (
          <div>
            Drop your IVY Mapping File (required) and your PDF Sample Fle
            (optional)
          </div>
        );
      default:
        return "";
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="my-4 text-blue-text">
              What is the expected extraction map type?
            </div>
            <div>
              {EXTRACTION_MAPS_TYPES.map((el, index) => (
                <div
                  key={index}
                  className="mb-4 flex cursor-pointer p-5 hover:bg-blue-button-hover"
                  onClick={() => handleType(el.title)}
                >
                  <div className="mr-4 h-[40px] w-[40px] bg-blue-text"></div>
                  <div>
                    <div>{el.title}</div>
                    <SmallItalicText>{el.desc}</SmallItalicText>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="mb-3 flex">
              <div className="mr-2">Mapping Type:</div>
              <Chip
                value={mapType}
                renderIcon={() => <MdClose size={12} />}
                onClickIcon={() => {
                  handlePrevStep();
                  setMapType(null);
                }}
              />
            </div>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <>{renderUploadTitle()}</>
              )}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog isOpen={true} title="NEW EXTRACTION MAP" handleClose={handleClose}>
      <div className="m-10">
        <Input label="Map Name" />
        {renderStep()}
      </div>
    </Dialog>
  );
};

export default NewMapDialog;
