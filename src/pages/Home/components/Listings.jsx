import React from 'react'
import ListingBox from './ListingBox'

const Listings = () => {
  return (
    <div className='bg-[#EEEEEE] py-[60px]'>
      <div className="max-w-[1440px] px-[40px] mx-auto">
      <h2 className='text-[36px] font-bold'>Hundreds of listings to <span className='text-[#235370]'>choose from</span></h2>
        <div className="grid grid-cols-4 gap-[26px] mt-10">
            <ListingBox/>
            <ListingBox/>
            <ListingBox/>
            <ListingBox/>
        </div>
      </div>
    </div>
  )
}

export default Listings
