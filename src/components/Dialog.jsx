import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const DialogComponent = ({ isOpen, handleClose, title, children }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] min-w-[384px] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="mb-[52px] mt-[24px] px-[32px] text-[16px] uppercase text-blue-dark">
            {title}
          </Dialog.Title>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogComponent;
