import React, { useState } from "react";
import DateIcon from "../../../assets/icons/date-picker-icn.png";
import DatePickerInput from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../style.css'

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="select-dates">
      <div className="border border-[#EEEEEE] rounded-[16px] p-[10px] max-w-[370px] w-full">
      <p className="text-[20px] font-semibold mb-[8px]">Select your dates</p>
      <p className="text-[26px] font-semibold">$55/month</p>
      <span className="text-[14px] text-[#959595]">Taxes not included</span>

      <div className="w-full mt-[10px]">
        <p className=" font-semibold mb-[6px]">Start date</p>
        <div className="input-with-icon relative  w-full max-w-[100%]">
          <span className=" absolute right-[16px] top-[20px] ">
            <img src={DateIcon} alt="" />
          </span>
          <DatePickerInput
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <p className=" font-semibold mb-[6px] mt-[12px]">End date</p>
        <div className="input-with-icon relative  w-full max-w-[100%]">
          <span className=" absolute right-[16px] top-[20px] ">
            <img src={DateIcon} alt="" />
          </span>
          <DatePickerInput
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <button className="btn-pri mt-[16px] ml-auto !block">Start Request</button>
      </div>
    </div>
    </div>
  );
};

export default DatePicker;
