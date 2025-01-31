import React from 'react'
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar'

const Search = () => {
  return (
    <div>
      <ProfileNavbar/>
      <div className="max-w-[1440px] px-[40px] mx-auto py-16 max-lg:px-[20px] max-lg:py-[40px] h-[88vh] flex justify-center items-center">
      <div className=" flex flex-col items-center">
        <h2 className='text-[42px] text-center font-bold max-lg:text-[36px]'>Where are you located?</h2>
        <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[540px] max-md:mt-[16px] max-md:mb-[24px]">
        <input className='border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl ' type="text" placeholder='Enter address' />
        <span className=' absolute right-[16px] top-[20px]'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.262 22.134C11.262 22.134 4 16.018 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 16.018 12.738 22.134 12.738 22.134C12.334 22.506 11.669 22.502 11.262 22.134ZM12 13.5C12.4596 13.5 12.9148 13.4095 13.3394 13.2336C13.764 13.0577 14.1499 12.7999 14.4749 12.4749C14.7999 12.1499 15.0577 11.764 15.2336 11.3394C15.4095 10.9148 15.5 10.4596 15.5 10C15.5 9.54037 15.4095 9.08525 15.2336 8.66061C15.0577 8.23597 14.7999 7.85013 14.4749 7.52513C14.1499 7.20012 13.764 6.94231 13.3394 6.76642C12.9148 6.59053 12.4596 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10C8.5 10.9283 8.86875 11.8185 9.52513 12.4749C10.1815 13.1313 11.0717 13.5 12 13.5Z" fill="#235370"/>
</svg>
        </span>
        </div>
        <h2 className='text-[42px] text-center font-bold max-lg:text-[36px]'>What size do require?</h2>
        <div className="flex items-center">
        <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[170px] max-md:mt-[16px] max-md:mb-[24px]">
        <input className='border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl ' type="text" placeholder='size' />
        <span className=' absolute right-[16px] top-[20px]'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4.45455V11H11V2H4.45455C3.80356 2 3.17924 2.2586 2.71892 2.71892C2.2586 3.17924 2 3.80356 2 4.45455Z" fill="#235370"/>
<path d="M2 19.5455C2 20.1964 2.2586 20.8208 2.71892 21.2811C3.17924 21.7414 3.80356 22 4.45455 22H11V13H2V19.5455Z" fill="#235370"/>
<path d="M18.7994 19.8469V4.15556L20.867 6.30541L22 5.12633L19.6963 2.73066C19.2463 2.26278 18.6363 2 18.0004 2C17.3645 2 16.7545 2.26278 16.3045 2.73066L14.004 5.12216L15.1346 6.30124L17.199 4.15223V19.8461L15.1306 17.6946L14 18.8737L16.3037 21.2693C16.7537 21.7372 17.3637 22 17.9996 22C18.6355 22 19.2455 21.7372 19.6955 21.2693L22 18.8778L20.8694 17.6988L18.7994 19.8469Z" fill="#235370"/>
</svg>

        </span>
        </div>
        <p className='text-[26px] font-semibold px-[20px] leading-[26px]'>X</p>
        <div className="input-with-icon relative mt-[30px] mb-[40px] w-full max-w-[170px] max-md:mt-[16px] max-md:mb-[24px]">
        <input className='border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl ' type="text" placeholder='size' />
        <span className=' absolute right-[16px] top-[20px]'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4.45455V11H11V2H4.45455C3.80356 2 3.17924 2.2586 2.71892 2.71892C2.2586 3.17924 2 3.80356 2 4.45455Z" fill="#235370"/>
<path d="M2 19.5455C2 20.1964 2.2586 20.8208 2.71892 21.2811C3.17924 21.7414 3.80356 22 4.45455 22H11V13H2V19.5455Z" fill="#235370"/>
<path d="M18.7994 19.8469V4.15556L20.867 6.30541L22 5.12633L19.6963 2.73066C19.2463 2.26278 18.6363 2 18.0004 2C17.3645 2 16.7545 2.26278 16.3045 2.73066L14.004 5.12216L15.1346 6.30124L17.199 4.15223V19.8461L15.1306 17.6946L14 18.8737L16.3037 21.2693C16.7537 21.7372 17.3637 22 17.9996 22C18.6355 22 19.2455 21.7372 19.6955 21.2693L22 18.8778L20.8694 17.6988L18.7994 19.8469Z" fill="#235370"/>
</svg>

        </span>
        </div>
        </div>
        <button className='btn-pri cursor-pointer'>Start Search</button>
      </div>
      </div>
    </div>
  )
}

export default Search
