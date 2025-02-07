import React from 'react'

const AccountSecurity = () => {
  return (
<div className="flex flex-col">
       {/* Your passowrd */}
       <div className='flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]'>
      <div className="max-w-[380px] w-full max-md:max-w-full">
        <p className='text-[18px] text-[#235370] font-semibold'>Change Password</p>
        <p className='max-w-[280px] mt-[6px]'>Manage your password to make sure it is safe. </p>
      </div>
      <div className=" max-w-[400px] w-full max-md:max-w-full">

     <div className="mb-[16px]">
        <div className="w-full max-w-[100%]">
        <p className=" font-semibold mb-[6px]">Old Password</p>
        <div className="input-with-icon relative w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Enter old password"
            
          />
          <span className=' absolute right-[16px] top-[20px]'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.98705 13.591 10.409C14.0129 10.831 14.25 11.4033 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12Z" fill="#235370"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 13.64 2.425 14.191 3.275 15.296C4.972 17.5 7.818 20 12 20C16.182 20 19.028 17.5 20.725 15.296C21.575 14.192 22 13.639 22 12C22 10.36 21.575 9.809 20.725 8.704C19.028 6.5 16.182 4 12 4C7.818 4 4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12ZM12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25Z" fill="#235370"/>
<rect x="2.70711" y="20" width="24" height="3" rx="1.5" transform="rotate(-45 2.70711 20)" fill="#235370" stroke="white"/>
</svg>


        </span>
        </div>
        </div>
        <div className="w-full max-w-[100%] mt-[20px]">
        <p className=" font-semibold mb-[6px]">New Password</p>
        <div className="input-with-icon relative w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Enter new password"
            
          />
          <span className=' absolute right-[16px] top-[20px]'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.98705 13.591 10.409C14.0129 10.831 14.25 11.4033 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12Z" fill="#235370"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 13.64 2.425 14.191 3.275 15.296C4.972 17.5 7.818 20 12 20C16.182 20 19.028 17.5 20.725 15.296C21.575 14.192 22 13.639 22 12C22 10.36 21.575 9.809 20.725 8.704C19.028 6.5 16.182 4 12 4C7.818 4 4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12ZM12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25Z" fill="#235370"/>
<rect x="2.70711" y="20" width="24" height="3" rx="1.5" transform="rotate(-45 2.70711 20)" fill="#235370" stroke="white"/>
</svg>


        </span>
        </div>
        </div>
      </div>
     
      </div>
    </div>
    <button className='btn-pri mt-[24px] ml-auto '>Update</button>
</div>
  )
}

export default AccountSecurity
