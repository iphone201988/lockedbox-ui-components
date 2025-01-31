import React from 'react'
import logo from "../../assets/logo.png"
import RenterPic from '../../assets/rent-profile-pic.png'
import ProfileDropDown from '../ProfileDropDown/ProfileDropDown'

const ProfileNavbar = () => {
  return (
     <div className=" border-b border-[#EEEEEE]">
        <div className=' py-5 px-10 mx-auto flex flex-row items-center justify-between max-lg:px-[20px]'>
          <a href="#">
          <img className='max-w-[158px] max-lg:max-w-[120px]' src={logo} alt="" />
          </a>
         
         <div className="">
           <button className=' cursor-pointer w-[48px] h-[48px] relative'>
            <img className=' object-cover' src={RenterPic} alt="" />
            <ProfileDropDown />
           </button>
         </div>
        </div>
        </div>
  )
}

export default ProfileNavbar
