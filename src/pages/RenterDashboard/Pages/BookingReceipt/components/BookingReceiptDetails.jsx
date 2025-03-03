import React from 'react'
import StartEndDate from '../../../../BookingReview/components/StartEndDate'
import PriceInfo from '../../../../BookingReview/components/PriceInfo'
import PaymentDetail from '../../../../BookingReview/components/PaymentDetail'

const BookingReceiptDetails = () => {
  return (
    <div className='p-[20px]'>
    <div className="">
          <StartEndDate/>
        </div>
    <div className="py-[20px]">
      <PriceInfo/>
    </div>
    <div className="">
       <div className="">
              <div className="pb-[20px]">
             
            <p className="text-[20px] font-semibold ">Payment details</p>
            <div className="my-[16px]">
              <p className=" font-semibold mb-[6px]">Card Number</p>
              <div className="w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                />
                <p className='mt-[8px]'>Nov 15th, 2024, 3:56pm PST</p>
              </div>
            </div>
           
          </div>
          </div>
    </div>
  </div>
  )
}

export default BookingReceiptDetails
