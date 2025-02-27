import React from "react";
import ProfileNavbar from "../../components/ProfileNavbar/ProfileNavbar";
import BookingInfo from "./components/BookingInfo";
import PriceSummary from "./components/PriceSummary";
import InsuranceOptions from "./components/InsuranceOptions";
import MessageHost from "./components/MessageHost";
import StartEndDate from "./components/StartEndDate";
import PriceInfo from "./components/PriceInfo";

const BookingReview = () => {
  return (
    <div className="">
      <ProfileNavbar />
      <div className="max-w-[1120px]  mx-auto mt-[24px] max-mlg:px-[20px]">
        <div className=" flex border border-[#EEEEEE] rounded-[16px] max-md:flex-col">
          <div className="w-[50%] max-lg:w-[40%] max-md:w-[100%]">
            <BookingInfo />
            <div className="px-[20px]">
              <PriceInfo/>
            </div>
          </div>
          <div className="w-[50%] border-l border-[#EEEEEE] max-lg:w-[60%] max-md:w-[100%] max-md:border-l-0 max-md:border-t">
            <PriceSummary />
          </div>
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto  max-mlg:px-[20px]">
        <div className="max-w-[520px]">
          <InsuranceOptions />
          <MessageHost />
        </div>
      </div>
    </div>
  );
};

export default BookingReview;
