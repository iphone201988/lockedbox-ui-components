import React from 'react'
import StarIcon from '../../../../../assets/icons/review-star-icn-empty.png'
import HostReviewBox from './HostReviewBox'

const HostReviews = () => {
  return (
    <div>
      <div className="border border-[#EEEEEE] rounded-[8px] p-[20px] max-w-[600px] flex justify-between max-md:flex-col max-md:gap-[16px]">
        <div className="flex items-center gap-[12px] w-[50%] justify-center border-r border-[#EEEEEE] max-md:border-0 max-md:justify-start max-md:w-full">
            <span className='bg-[#235370] p-[16px] rounded-full'>
                <img className='w-[24px] h-[24px]' src={StarIcon} alt="" />
            </span>
            <p className='text-[18px] font-semibold'>4.73 (7 reviews)</p>
        </div>
        <div className="flex items-center gap-[12px] w-[50%] justify-center max-md:justify-start max-md:w-full">
            <span className='bg-[#235370] py-[16px] px-[8px] rounded-full'>
                <p className='text-[20px] font-semibold text-white'>90%</p>
            </span>
            <p className='text-[18px] font-semibold'>would rent again</p>
        </div>
      </div>

      <div className="mt-[16px] flex gap-[16px] flex-wrap">
        <HostReviewBox/>
        <HostReviewBox/>
        <HostReviewBox/>
        <HostReviewBox/>
        <HostReviewBox/>
        <HostReviewBox/>
        <HostReviewBox/>
        <HostReviewBox/>
        <HostReviewBox/>
      </div>
    </div>
  )
}

export default HostReviews
