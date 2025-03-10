import React from 'react'
import LoginBgImg from "../../../assets/login-img.png";
import logo from "../../../assets/logo.png";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const AdminLogin = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="max-w-[640px] w-full px-[40px] py-[40px] mx-auto flex  gap-10 max-lg:px-[20px] max-md:flex-col border border-[#EEEEEE] rounded-[16px]">
       
        <div className="w-full relative h-full flex items-center justify-center flex-col">
          <img
            className="max-w-[158px] max-lg:max-w-[120px] mb-[4rem] max-mlg:mb-[2rem]"
            src={logo}
            alt=""
          />
          <h1 className="text-[52px] font-bold max-lg:text-[36px] text-center">Admin Log-In</h1>
          <div className="w-full mt-[30px] flex flex-col gap-[20px] items-center">
            <div className="w-full max-w-[540px]">
             
              {/* for email */}
            <div className="input-with-icon relative w-full max-w-[540px]">
              <input
                className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl "
                type="email"
                placeholder="Email"
              />
            </div>

            </div>
            <div className="input-with-icon relative  w-full max-w-[540px]">
              <input
                className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl "
                type="password"
                placeholder="Password"
              />
              <span className=" absolute right-[16px] top-[20px] cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.98705 13.591 10.409C14.0129 10.831 14.25 11.4033 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12Z" fill="#235370"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 13.64 2.425 14.191 3.275 15.296C4.972 17.5 7.818 20 12 20C16.182 20 19.028 17.5 20.725 15.296C21.575 14.192 22 13.639 22 12C22 10.36 21.575 9.809 20.725 8.704C19.028 6.5 16.182 4 12 4C7.818 4 4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12ZM12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25Z" fill="#235370"/>
</svg>

              </span>
            </div>
          </div>
          <button className="btn-pri mt-[40px] cursor-pointer">Login</button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
