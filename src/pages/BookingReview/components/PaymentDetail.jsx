import React from "react";
import CardLogo from '../../../assets/visa-logo.png'

const PaymentDetail = () => {
  return (
    <div className="">
        <div className="pb-[20px]">
        <div className="py-[16px]">
        <p className=" font-semibold mb-[6px]">Cards</p>
          <div className="flex flex-col w-full max-w-[400px] border border-[#EEEEEE] p-[16px] rounded-[16px]">
                          <div className="flex gap-[24px] items-start">
                          <img src={CardLogo} alt="" />
                          <div className="">
                              <p>Visa Card</p>
                              <p className=" font-semibold mt-[8px]">XXXX XXXX XXXX 1234</p>
                          </div>
                          </div>
                          <button className="text-[#235370] ml-auto cursor-pointer">Select</button>
                      </div>
        </div>
      <p className="text-[20px] font-semibold ">Payment details</p>
      <div className="my-[16px]">
        <p className=" font-semibold mb-[6px]">Card Number</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
          />
        </div>
      </div>
      <div className=" flex gap-[16px] ">
      <div className="w-full">
        <p className=" font-semibold mb-[6px]">Expiry date</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="MM/YYYY"
          />
        </div>
      </div>
      <div className="w-full">
        <p className=" font-semibold mb-[6px]">CVV</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Enter CVV"
          />
        </div>
      </div>
      </div>
    </div>
    <div className="">
      <p className="text-[20px] font-semibold ">Billing address</p>
      <div className="my-[16px]">
        <p className=" font-semibold mb-[6px]">Street</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Enter Street"
          />
        </div>
      </div>
      <div className=" flex gap-[16px] max-sm:flex-wrap ">
      <div className="w-full">
        <p className=" font-semibold mb-[6px]">Country</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Enter Country"
          />
        </div>
      </div>
      <div className="w-full">
        <p className=" font-semibold mb-[6px]">Province</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Enter Province"
          />
        </div>
      </div>
      <div className="w-full">
        <p className=" font-semibold mb-[6px]">Postal Code</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Enter Postal Code"
          />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default PaymentDetail;
