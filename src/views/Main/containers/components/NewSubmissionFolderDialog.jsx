import React, { useState } from "react";
import Input from "../../../../components/Input";
import { useMutation } from "@tanstack/react-query";
import DialogComponent from "../../../../components/Dialog";
import { useForm } from "react-hook-form";
import FormActions from "../../../../components/FormActions";
import CheckboxComponent from "../../../../components/Checkbox";
import { createExtractionMap } from "../../../../api/extractionMaps";
import { useQueryClient } from "@tanstack/react-query";

const NewSubmissionFolderDialog = ({ openDialog, setOpenDialog }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const [checked, setChecked] = useState(false);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data) => createExtractionMap(data),
    onSuccess: () => {
      queryClient.invalidateQueries("extractionMaps");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
    setOpenDialog(false);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <DialogComponent
      isOpen={openDialog}
      handleClose={handleClose}
      title={"NEW SUBMISSION FOLDER"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-10 my-5">
          <div className="mb-[38px]">
            <Input
              label="Submission Folder Name"
              register={register}
              name="name"
              validation={{
                required: "Name is required",
                maxLength: { value: 5, message: "Max length is 5" },
              }}
              errors={errors}
            />
          </div>
          <div className="mb-[24px]">
            <Input
              label="Description"
              register={register}
              name="description"
              errors={errors}
            />
          </div>
          <CheckboxComponent
            checked={checked}
            setChecked={setChecked}
            label="Publish"
          />
          <FormActions setOpenDialog={setOpenDialog} isValid={isValid} />
        </div>
      </form>
    </DialogComponent>
  );
};

export default NewSubmissionFolderDialog;
