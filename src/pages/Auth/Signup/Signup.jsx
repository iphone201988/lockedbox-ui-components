import React from 'react'
import SignupBgImg from "../../../assets/signup-img.png";
import logo from "../../../assets/logo.png";

const Signup = () => {
  return (
   <div className="flex items-center justify-center h-[100vh]">
         <div className="max-w-[1440px] w-full px-[40px] py-[40px] mx-auto flex  gap-10 max-lg:px-[20px] max-md:flex-col">
           <div className=" relative w-full">
             <img className="rounded-4xl max-md:hidden" src={SignupBgImg} alt="" />
             <a
               className="btn-pri with-icn absolute left-[24px] top-[24px] max-md:relative max-md:left-0 max-md:top-0"
               href="#"
             >
               <svg
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   d="M4.00006 10L3.29306 10.707L2.58606 10L3.29306 9.293L4.00006 10ZM21.0001 18C21.0001 18.2652 20.8947 18.5196 20.7072 18.7071C20.5196 18.8946 20.2653 19 20.0001 19C19.7348 19 19.4805 18.8946 19.293 18.7071C19.1054 18.5196 19.0001 18.2652 19.0001 18H21.0001ZM8.29306 15.707L3.29306 10.707L4.70706 9.293L9.70706 14.293L8.29306 15.707ZM3.29306 9.293L8.29306 4.293L9.70706 5.707L4.70706 10.707L3.29306 9.293ZM4.00006 9H14.0001V11H4.00006V9ZM21.0001 16V18H19.0001V16H21.0001ZM14.0001 9C15.8566 9 17.6371 9.7375 18.9498 11.0503C20.2626 12.363 21.0001 14.1435 21.0001 16H19.0001C19.0001 14.6739 18.4733 13.4021 17.5356 12.4645C16.5979 11.5268 15.3261 11 14.0001 11V9Z"
                   fill="white"
                 />
               </svg>
               Back
             </a>
           </div>
           <div className="w-full relative h-full flex items-center justify-center flex-col">
             <img
               className="max-w-[158px] max-lg:max-w-[120px] mb-[8rem] max-mlg:mb-[2rem]"
               src={logo}
               alt=""
             />
             <h1 className="text-[52px] font-bold max-lg:text-[36px] text-center">Create an account</h1>
             <div className="w-full mt-[30px] flex flex-col gap-[20px] items-center">
               <div className="input-with-icon relative w-full max-w-[540px]">
                 <input
                   className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl "
                   type="email"
                   placeholder="Phone / Email"
                 />
               </div>
               <div className="input-with-icon relative  w-full max-w-[540px] flex gap-[6px]">
                 <input
                   className="border border-[#235370] rounded-2xl w-[24px] h-[24px] min-w-[24px] cursor-pointer"
                   type="checkbox"
                 />
              <p>By continuing, you content to receive calls and 
              messages from LockedBox in accordance with our <a className='text-[#235370] underline' href="">Privacy Policy</a></p>
               </div>
             </div>
             <button className="btn-pri mt-[40px] cursor-pointer">Next</button>
             <p className="mt-[40px]">Already have an account? <a className="text-[#235370] font-semibold" href="">Login</a></p>
           </div>
         </div>
       </div>
  )
}

export default Signup
