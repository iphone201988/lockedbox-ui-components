import React from 'react'
import logo from "../../../assets/logo.png"

const SecNavBar = () => {
  return (
   <div className=" border-b border-[#EEEEEE]">
       <div className=' py-5 px-10 mx-auto flex flex-row items-center justify-between max-lg:px-[20px]'>
         <a href="#">
         <img className='max-w-[158px] max-lg:max-w-[120px]' src={logo} alt="" />
         </a>
        <div className="menu flex gap-x-[32px] text-[18px] text-[#1E1E1E] font-light max-lg:text-[16px] max-lg:gap-x-[16px] max-md:hidden ml-auto mr-[12px]">
           <a className='hover:text-[#235370]' href="#">Back to home page</a>
        </div>
        <div className="flex gap-x-4">
           <a href="" className='btn-sec'>Login</a>
           <a href="" className='btn-pri'>Sign Up</a>
        </div>
       </div>
       </div>
  )
}

export default SecNavBar
