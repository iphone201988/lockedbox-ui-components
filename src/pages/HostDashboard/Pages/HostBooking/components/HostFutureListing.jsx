import React from 'react'
import BoxImage from '../../../../../assets/box-detail-image.png'
import SeasonalIcom from '../../../../../assets/icons/seasonal-icn.png'
import OfficeIcon from '../../../../../assets/icons/office-icn.png'
import DisputeIcon from '../../../../../assets/icons/dispute-icn.png'
import UserIcon from '../../../../../assets/icons/user-icn.png'
import DateIcon from '../../../../../assets/icons/date-picker-icn.png'
import DarkDateIcon from '../../../../../assets/icons/date-picker-black-icn.png'

const HostFutureListing = () => {
  return (
   <div className="border border-[#EEEEEE] rounded-[16px] ">
    <div className='p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative'>
          <button className=' absolute top-[10px] right-[10px] cursor-pointer max-md:bg-white max-md:p-[4px] rounded-bl-[4px]'>
              <img src={DisputeIcon} alt="" />
          </button>
              <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
                  <img className='w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]' src={BoxImage} alt="" />
                  <div className="storage-details flex flex-col gap-[4px]">
                      <p className='text-[18px] font-semibold max-md:text-[16px]'>Office for storage in Surrey</p>
                      <p className='text-[#959595] max-md:text-[14px]'><span className='font-semibold text-black'>Booking Confirmation:</span> 123456789</p>
                      <div className='mt-auto flex gap-[12px] items-center'>
                          <img src={SeasonalIcom} alt="" />
                          <img src={OfficeIcon} alt="" />
                          <a className='text-[14px] text-[#235370] underline ml-[8px] font-semibold' href="#">View listing</a>
                      </div>
                  </div>
              </div>
              <div className=" flex items-center gap-[40px] ml-auto mr-[50px] max-mlg:mr-[20px] max-mlg:gap-[20px] max-md:mr-0">
                  <p className='text-[18px] text-[#959595] max-mlg:text-[16px]'> $40/month</p>
                  <p className='text-[18px] text-[#235370] max-mlg:text-[16px] font-semibold'>$1,427.25</p>
              </div>
              <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
                 <p className='text-[#235370] font-semibold flex gap-[6px] items-center'><img src={UserIcon}/> Xander K.</p>
                 <p className='text-[#235370] font-semibold flex gap-[6px] items-center'><img src={DateIcon}/> 15 Months</p>
              </div>
          </div>
             <div className="border-t border-[#EEEEEE] py-[10px] mx-[10px] flex items-center max-md:flex-col-reverse max-md:gap-[12px]">
                {/* button group */}
                <div className="flex gap-[12px] mr-auto">
                    <button className='btn-pri'>Approve</button>
                    <button className='btn-sec'>Reject</button>
                </div>

<div className=" flex items-center w-full justify-end max-sm:flex-col-reverse gap-[12px] max-sm:items-start">
    {/* checkin button */}
<a className='inline-block text-[14px] text-[#FFFFFF]  font-regular cursor-pointer bg-[#959595] rounded-[8px] px-[8px] py-[4px]' href="#">Check in</a>

{/* start end date */}
<div className='before-dotted-line flex justify-between relative max-sm:gap-[20px] max-w-[350px] w-full  max-md:max-w-[300px] max-sm:max-w-full max-sm:items-start' >
      <div className="bg-white flex items-start gap-[6px] border border-[#EEEEEE] rounded-[8px] p-[10px] w-max">
        <img src={DarkDateIcon} alt="" />
        <div className="">
            <p className='mb-[4px]'>Start Date</p>
            <span className='font-semibold text-[#959595] max-sm:text-[14px]'>Nov 15  2024</span>
        </div>
      </div>
      <div className="bg-white flex items-start gap-[6px] border border-[#EEEEEE] rounded-[8px] p-[10px] w-max">
        <img src={DarkDateIcon} alt="" />
        <div className="">
            <p className='mb-[4px]'>End Date</p>
            <span className='font-semibold text-[#959595] max-sm:text-[14px]'>Nov 15  2025</span>
        </div>
      </div>
    </div>
</div>
             </div>
   </div>
  )
}

export default HostFutureListing
