import React from 'react'
import ProfilPic from '../../../../../assets/rent-profile-pic.png'
import LocationIcon from '../../../../../assets/icons/location-icn-grey.png'
import testImg from '../../../../../assets/gall-img-3.png'

const AccountProfile = () => {
  return (
    <div className="flex flex-col">
        <div className='flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]'>
      <div className="max-w-[380px] w-full max-md:max-w-full">
        <p className='text-[18px] text-[#235370] font-semibold'>Your Profile</p>
        <p className='max-w-[280px] mt-[6px]'>This is your personal information that you can update anytime.</p>
      </div>
      <div className=" max-w-[480px] w-full max-md:max-w-full">
     {/* profile pic */}
     <div className="border border-[#EEEEEE] rounded-[16px] overflow-hidden">
        <div className="bg-[#235370] p-[20px] text-[#fff] text-right">
            <p><span className=' font-semibold'>User ID:</span> 123456789</p>
            <p><span className=' font-semibold'>Joined:</span> 01/02/2024</p>
        </div>
        <div className="p-[20px] flex flex-col">
            <div className="flex gap-[16px] pb-[16px]">
            <div className="w-[130px] h-[130px] p-[5px] bg-white rounded-full mt-[-80px] overflow-hidden">
            <img className='w-full h-full rounded-full object-cover' src={testImg} alt="" />
            </div>
            <div className="">
                <h5 className='text-[24px] font-semibold'>Xander</h5>
                <p className='flex items-center gap-[6px]'><img src={LocationIcon} alt="" /> Vancouver, Canada</p>
            </div>
            </div>
            <button className='btn-sec ml-auto'>Update Pic</button>
        </div>
      </div>
     
      </div>
    </div>

    {/* short bio    */}
    <div className='flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]'>
      <div className="max-w-[380px] w-full max-md:max-w-full">
        <p className='text-[18px] text-[#235370] font-semibold'>Short Bio</p>
        <p className='max-w-[280px] mt-[6px]'>Write something about yourself that you like to share with others.</p>
      </div>
      <div className=" max-w-[400px] w-full max-md:max-w-full">
     <div className="mb-[16px]">
        <div className="w-full max-w-[100%]">
          <textarea
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer h-[180px]"
            placeholder="First Name">Hi, I’m Xander! I’m a responsible and organized individual  offering a secure and clean storage space in a safe  neighborhood. My space is ideal for storing items like furniture,  boxes, or seasonal gear, with easy access and flexible  scheduling to meet your needs.</textarea>
        </div>
      </div>
     
      </div>
    </div>

    {/* Your Location */}
    <div className='flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]'>
      <div className="max-w-[380px] w-full max-md:max-w-full">
        <p className='text-[18px] text-[#235370] font-semibold'>Your Location</p>
        <p className='max-w-[280px] mt-[6px]'>You can add your location or you can skip it. </p>
      </div>
      <div className=" max-w-[400px] w-full max-md:max-w-full">

     <div className="mb-[16px]">
        <div className="w-full max-w-[100%]">
        <p className=" font-semibold mb-[6px]">Select Location</p>
        <div className="input-with-icon relative w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Location"
            value='Vancouver, Canada'
          />
          <span className=' absolute right-[16px] top-[20px]'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.262 22.134C11.262 22.134 4 16.018 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 16.018 12.738 22.134 12.738 22.134C12.334 22.506 11.669 22.502 11.262 22.134ZM12 13.5C12.4596 13.5 12.9148 13.4095 13.3394 13.2336C13.764 13.0577 14.1499 12.7999 14.4749 12.4749C14.7999 12.1499 15.0577 11.764 15.2336 11.3394C15.4095 10.9148 15.5 10.4596 15.5 10C15.5 9.54037 15.4095 9.08525 15.2336 8.66061C15.0577 8.23597 14.7999 7.85013 14.4749 7.52513C14.1499 7.20012 13.764 6.94231 13.3394 6.76642C12.9148 6.59053 12.4596 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10C8.5 10.9283 8.86875 11.8185 9.52513 12.4749C10.1815 13.1313 11.0717 13.5 12 13.5Z" fill="#235370"/>
</svg>


        </span>
        </div>
        </div>
      </div>
     
      </div>
    </div>

     {/* Identity Confirmed   */}
     <div className='flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]'>
      <div className="max-w-[380px] w-full max-md:max-w-full">
        <p className='text-[18px] text-[#235370] font-semibold'>Identity Confirmed</p>
        <p className='max-w-[280px] mt-[6px]'>Verify your email, phone number and 
        Identification to confirm your identity.</p>
      </div>
      <div className=" max-w-[400px] w-full max-md:max-w-full">
        <div className="flex justify-between relative">
            <p className=' font-semibold'>Email address</p>
            <span className='text-[#0BB82B] font-semibold'>Verified</span>
        </div>
        <div className="flex justify-between relative py-[16px]">
            <p className=' font-semibold'>Phone</p>
            <span className='text-[#235370] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]'>Not Confirmed</span>
            <button className='text-[14px] underline text-[#235370] cursor-pointer absolute right-[-80px] max-mlg:relative max-mlg:right-0'>Verify now</button>
        </div>
        <div className="flex justify-between relative">
            <p className=' font-semibold'>Identification</p>
            <span className='text-[#235370] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]'>Not Confirmed</span>
            <button className='text-[14px] underline text-[#235370] cursor-pointer absolute right-[-80px] max-mlg:relative max-mlg:right-0'>Verify now</button>
        </div>
      </div>
    </div>

     {/* Your Work */}
     <div className='flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]'>
      <div className="max-w-[380px] w-full max-md:max-w-full">
        <p className='text-[18px] text-[#235370] font-semibold'>Work</p>
        <p className='max-w-[280px] mt-[6px]'>Enter your work here </p>
      </div>
      <div className=" max-w-[400px] w-full max-md:max-w-full">

     <div className="mb-[16px]">
        <div className="w-full max-w-[100%]">
        <p className=" font-semibold mb-[6px]">Work</p>
        <div className=" w-full max-w-[100%]">
          <input
            className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
            type="text"
            placeholder="Work"
            value='Director'
          />

        </div>
        </div>
      </div>
     
      </div>
    </div>

    <button className='btn-pri mt-[24px] ml-auto '>Update</button>
    </div>
  )
}

export default AccountProfile
