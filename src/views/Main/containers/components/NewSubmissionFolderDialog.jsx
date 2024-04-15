import React from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { BUTTON_TYPES } from "../../../../utils/consts";
import DialogComponent from "../../../../components/Dialog";
import { useForm } from "react-hook-form";

const NewSubmissionFolderDialog = ({ openDialog, setOpenDialog }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data, "data");

  return (
    <DialogComponent
      isOpen={openDialog}
      handleClose={() => setOpenDialog((open) => !open)}
      title={"NEW SUBMISSION FOLDER"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-10 my-5">
          <Input
            label="Submission Folder Name"
            register={register}
            name="name"
            validation={{
              required: "Email Address is required",
              maxLength: { value: 5, message: "Max length is 5" },
            }}
            errors={errors}
          />
          <Input
            label="Description"
            register={register}
            name="description"
            errors={errors}
          />
          <div className="mb-[32px] mt-[56px] flex justify-end">
            <Button
              onClick={() => setOpenDialog(null)}
              styleType={BUTTON_TYPES.NORMAL_CANCEL}
              additionalClasses="mr-2"
            >
              <span>Cancel</span>
            </Button>
            <Button type="submit" styleType={BUTTON_TYPES.NORMAL_CONFIRM}>
              <span>Confirm</span>
            </Button>
          </div>
        </div>
      </form>
    </DialogComponent>
  );
};

export default NewSubmissionFolderDialog;
