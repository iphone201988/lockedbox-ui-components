import React from 'react'
import logo from "../../assets/logo.png"

const NavBar = () => {
  return (
    <div className=" border-b border-[#EEEEEE]">
    <div className=' py-5 px-10 mx-auto flex flex-row items-center justify-between'>
      <a href="#">
      <img className='max-w-[158px] max-md:hidden' src={logo} alt="" />
      </a>
     <div className="menu flex gap-x-[32px] text-[18px] text-[#1E1E1E] font-light ">
        <a className='hover:text-[#235370]' href="#">Find a Space</a>
        <a className='hover:text-[#235370]' href="#">How it Works</a>
        <a className='hover:text-[#235370]' href="#">Contact Us</a>
        <a className='hover:text-[#235370]' href="#">Host your Space</a>
     </div>
     <div className="flex gap-x-4">
        <a href="" className='btn-sec'>Login</a>
        <a href="" className='btn-pri'>Sign Up</a>
     </div>
    </div>
    </div>
  )
}

export default NavBar
