import React from 'react'
import BookingInfo from '../../../BookingReview/components/BookingInfo'
import BookingReceiptDetails from './components/BookingReceiptDetails'
import Logo from '../../../../assets/logo.png'
import BookingReceiptInfo from './components/BookingReceiptInfo'

const BookingReceipt = () => {
  return (
    <div className="">
        <div className="flex justify-center pt-[40px]">
            <img className='max-w-[158px]' src={Logo} alt="" />
        </div>
    <div className="max-w-[1120px]  mx-auto mt-[24px] max-mlg:px-[20px]">
      <div className=" flex border border-[#EEEEEE] rounded-[16px] max-md:flex-col">
        <div className="w-[50%] max-lg:w-[40%] max-md:w-[100%]">
          <BookingReceiptInfo/>
        </div>
        <div className="w-[50%] border-l border-[#EEEEEE] max-lg:w-[60%] max-md:w-[100%] max-md:border-l-0 max-md:border-t">
          <BookingReceiptDetails/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BookingReceipt
