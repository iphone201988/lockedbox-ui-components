import React from 'react'
import ReviewProfilePic from '../../../../../assets/garry-profile-pic.png'
import StarIconFill from '../../../../../assets/icons/review-star-icn-fill.png'
import StarIconEmpty from '../../../../../assets/icons/review-star-icn-empty.png'

const HostReviewBox = () => {
  return (
    <div className='p-[10px] border border-[#EEEEEE] rounded-[16px] max-w-[260px]'>
              <div className="flex items-center gap-[8px]">
                <img className='w-[48px] h-[48px] rounded-full object-cover' src={ReviewProfilePic} alt="" />
                <div className="">
                    <p className=' font-semibold'>Garry S.</p>
                    <p className='text-[14px] text-[#959595]'>June 2024</p>
                </div>
              </div>
              <div className="flex pt-[10px] gap-[4px]">
                <img className='w-[24px] h-[24px]' src={StarIconFill} alt="" />
                <img className='w-[24px] h-[24px]' src={StarIconFill} alt="" />
                <img className='w-[24px] h-[24px]' src={StarIconFill} alt="" />
                <img className='w-[24px] h-[24px]' src={StarIconFill} alt="" />
                <img className='w-[24px] h-[24px]' src={StarIconEmpty} alt="" />
              </div>
                <p className='text-[14px] mt-[8px]'> Stored my stuff for half the cost of a traditional storage unit. Simple and convenient, though some hosts could improve communication.</p>
            </div>
  )
}

export default HostReviewBox
