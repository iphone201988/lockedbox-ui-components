import React from 'react'
import HostListingBox from './components/HostListingBox'



const HostListings = () => {
  return (
    <div className='px-[30px] max-lg:px-[20px]'>
      <div className=" flex pb-[12px] pt-[32px] border-b border-[#EEEEEE] max-md:hidden">
        <p className='text-[#235370] font-semibold w-[60%] max-lg:w-[50%]'>Property</p>
        <p className='text-[#235370] font-semibold w-[15%] max-lg:w-[20%]'>Measurements</p>
        <p className='text-[#235370] font-semibold w-[15%]'>List Price</p>
        <p className='text-[#235370] text-right font-semibold w-[10%]  max-lg:w-[15%]'>Status</p>
      </div>
      <div className="mt-[16px] flex flex-col gap-[16px]">
        <HostListingBox/>
        <HostListingBox/>
        <HostListingBox/>
      </div>
    </div>
  )
}

export default HostListings
