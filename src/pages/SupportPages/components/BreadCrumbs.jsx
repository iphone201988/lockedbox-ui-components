import React from 'react'

const BreadCrumbs = () => {
  return (
    <div className='flex justify-between items-center max-md:flex-col gap-[16px]'>
      <div className="w-full">
        <p>Support / <a className='text-[#235370]' href="">FAQ</a></p>
      </div>
      <div className="flex gap-[12px] w-full justify-end max-md:justify-start">
        <input className='border border-[#EEEEEE] rounded-[16px] px-[16px] py-[20px] max-w-[400px] w-full' type="search" placeholder='Search...'/>
        <button className='btn-pri'>Search</button>
      </div>
    </div>
  )
}

export default BreadCrumbs
