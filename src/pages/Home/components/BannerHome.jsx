import React from 'react'
import "../style.css";
import BannerImg from '../../../assets/banner-img.png'

const BannerHome = () => {
  return (
    <div className='max-w-[1440px] px-[40px] mx-auto flex items-center gap-10 py-16 max-lg:px-[20px] max-lg:py-[40px] max-lg:gap-[20px] max-md:flex-col-reverse'>
      <div className="left-side flex flex-col items-center w-full">
        <h1 className='text-[52px] font-bold max-lg:text-[36px]'>Find your Space</h1>
        <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[540px] max-md:mt-[16px] max-md:mb-[24px]">
        <input className='border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl ' type="text" placeholder='Search location' />
        <span className=' absolute right-[16px] top-[20px]'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.262 22.134C11.262 22.134 4 16.018 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 16.018 12.738 22.134 12.738 22.134C12.334 22.506 11.669 22.502 11.262 22.134ZM12 13.5C12.4596 13.5 12.9148 13.4095 13.3394 13.2336C13.764 13.0577 14.1499 12.7999 14.4749 12.4749C14.7999 12.1499 15.0577 11.764 15.2336 11.3394C15.4095 10.9148 15.5 10.4596 15.5 10C15.5 9.54037 15.4095 9.08525 15.2336 8.66061C15.0577 8.23597 14.7999 7.85013 14.4749 7.52513C14.1499 7.20012 13.764 6.94231 13.3394 6.76642C12.9148 6.59053 12.4596 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10C8.5 10.9283 8.86875 11.8185 9.52513 12.4749C10.1815 13.1313 11.0717 13.5 12 13.5Z" fill="#235370"/>
</svg>
        </span>
        </div>
        <button className='btn-pri cursor-pointer'>Search Nearby</button>

      </div>
      <div className="right-side w-full">
        <img className='rounded-[32px] max-md:w-[70%] max-md:mx-auto max-sm:w-full' src={BannerImg} alt="" />
      </div>
    </div>
  )
}

export default BannerHome
