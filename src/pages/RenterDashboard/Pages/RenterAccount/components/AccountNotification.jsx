import React from 'react'

const AccountNotification = () => {
  return (
    <div className="flex flex-col">
       {/* Your passowrd */}
       <div className='flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]'>
      <div className="max-w-[380px] w-full">
        <p className='text-[18px] text-[#235370] font-semibold'>Notifications</p>
        <p className='max-w-[280px] mt-[6px]'>Customize your preferred notification settings. </p>
      </div>
      <div className=" max-w-[400px] w-full max-md:max-w-full">
      <label className="inline-flex items-center cursor-pointer justify-between w-full">
  <p className="mr-[32px] text-black">Email notifications</p>
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
</label>

<label className="inline-flex items-center cursor-pointer justify-between w-full mt-[20px]">
  <p className="mr-[32px] text-black">SMS notifications</p>
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-[#BCBCBC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#235370] peer-checked:bg-[#235370] dark:peer-checked:bg-[#235370]"></div>
</label>

     
      </div>
    </div>
    <button className='btn-pri mt-[24px] ml-auto '>Update</button>
</div>
  )
}

export default AccountNotification
