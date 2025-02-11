import React from 'react'
import HostProfilePic from "../../../assets/host-profile-pic.png";
import HostProfileDropDown from '../../../components/HostProfileDropDown/HostProfileDropDown';

const HostHeader = () => {
  return (
    <div className='p-[30px] border-b border-[#EEEEEE] bg-white flex items-center justify-between max-lg:p-[20px]'>
      <h2 className='text-[32px] text-[#235370] font-bold max-lg:text-[26px]'>Dashboard</h2>
      <div className=" hidden max-lg:block relative ">
        <button className='cursor-pointer w-[48px] h-[48px] relative'><img src={HostProfilePic} alt="" /></button>
        <HostProfileDropDown/>
      </div>
    </div>
  )
}

export default HostHeader
