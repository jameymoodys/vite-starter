import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./DatePicker.css";
import { MdCalendarToday } from "react-icons/md";
import { MdClose } from "react-icons/md";

const DatePickerCustom = ({ disabled = false }) => {
  const [value, onChange] = React.useState();

  return (
    <>
      <DatePicker
        onChange={onChange}
        value={value}
        calendarIcon={<MdCalendarToday />}
        clearIcon={<MdClose />}
        className="w-full !border-b-[2px] text-grey-icons"
        calendarClassName="!bg-blue-light-opacity text-red-500 !w-full rounded-md border border-red-300"
        format="MM-dd-yyyy"
        dayPlaceholder="DD"
        yearPlaceholder="YYYY"
        monthPlaceholder="MM"
        disabled={disabled}
        nativeInputAriaLabel="Date"
      />
    </>
  );
};

export default DatePickerCustom;
