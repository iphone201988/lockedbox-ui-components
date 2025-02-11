import React from 'react'
import BoxImage from '../../../../../assets/box-detail-image.png'

const HostHomeListing = () => {
  return (
    <>
 <div className='border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative'>
                  <i className='notify-dot absolute right-[10px] top-[10px]'></i>
                     <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
                         <img className='w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]' src={BoxImage} alt="" />
                         <div className="storage-details flex flex-col gap-[4px] max-mlg:max-w-[280px]">
                             <p className='text-[18px] font-semibold max-md:text-[16px]'>Room for storage in Surrey</p>
                             <p className='text-[20px] max-md:text-[16px]'>New request from  Xander K.</p>
                         </div>
                     </div>
                     <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
                         <button className='btn-pri'>View Request</button>
                     </div>
                 </div>

{/* for check out listing */}
   <div className='border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative'>
              <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
                  <img className='w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]' src={BoxImage} alt="" />
                  <div className="storage-details flex flex-col gap-[4px] max-mlg:max-w-[280px]">
                      <p className='text-[18px] font-semibold max-md:text-[16px]'>Warehouse for storage in Langley</p>
                      <p className='text-[20px] max-md:text-[16px]'>Check-out date in 4  days</p>
                  </div>
              </div>
              <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
                  <button className='btn-sec'>Check-out in 4 days</button>
              </div>
          </div>


          
                 </>
  )
}

export default HostHomeListing
