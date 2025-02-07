import React from 'react'
import RenterPic from '../../../assets/rent-profile-pic.png'
import ProfileDropDown from '../../../components/ProfileDropDown/ProfileDropDown'

const HeaderBar = () => {
  return (
    <div className='p-[30px] border-b border-[#EEEEEE] bg-white flex items-center justify-between max-lg:p-[20px]'>
      <h2 className='text-[32px] text-[#235370] font-bold max-lg:text-[26px]'>Your account</h2>
      <div className=" hidden max-lg:block relative ">
        <button className='cursor-pointer w-[48px] h-[48px] relative'><img src={RenterPic} alt="" /></button>
        <ProfileDropDown className={'!hidden'}/>
      </div>
    </div>
  )
}

export default HeaderBar
