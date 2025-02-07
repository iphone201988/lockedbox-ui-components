import React from 'react'

const BasicInfo = () => {
  return (
    <div className="flex flex-col">
        <div className='flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]'>
      <div className="max-w-[380px] w-full max-md:max-w-full">
        <p className='text-[18px] text-[#235370] font-semibold'>Basic Information</p>
        <p className='max-w-[280px] mt-[6px]'>This is your personal information that you can update anytime.</p>
      </div>
      <div className=" max-w-[400px] w-full max-md:max-w-full">
     {/* profile inputs */}
     <div className="mb-[16px]">
        <p className=" font-semibold mb-[6px]">First Name</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="First Name"
            value='Xander'
          />
        </div>
      </div>
      <div className="mb-[16px]">
        <p className=" font-semibold mb-[6px]">Last Name</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Last Name"
            value='Kerry'
          />
        </div>
      </div>
      <div className="mb-[16px]">
        <p className=" font-semibold mb-[6px]">Email</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="email"
            placeholder="Email"
            value='Xanxander@text.comder'
          />
        </div>
      </div>
      <div className="">
        <p className=" font-semibold mb-[6px]">Phone</p>
        <div className="w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Phone"
            value='416-871-1216'
          />
        </div>
      </div>
      </div>
    </div>
    <button className='btn-pri mt-[24px] ml-auto '>Save</button>
    </div>
  )
}

export default BasicInfo
