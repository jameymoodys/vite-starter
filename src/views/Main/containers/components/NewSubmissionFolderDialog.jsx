import React from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { BUTTON_TYPES } from "../../../../utils/consts";
import DialogComponent from "../../../../components/Dialog";
import { useForm } from "react-hook-form";
import FormActions from "../../../../components/FormActions";
import CheckboxComponent from "../../../../components/Checkbox";

const NewSubmissionFolderDialog = ({ openDialog, setOpenDialog }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [checked, setChecked] = React.useState(false);

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
              required: "Name is required",
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
          <CheckboxComponent checked={checked} setChecked={setChecked} />
          <FormActions setOpenDialog={setOpenDialog} isValid={isValid} />
        </div>
      </form>
    </DialogComponent>
  );
};

export default NewSubmissionFolderDialog;
