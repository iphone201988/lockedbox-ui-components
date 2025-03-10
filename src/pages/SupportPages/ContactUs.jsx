import React from 'react'
import SecNavBar from './components/SecNavBar'
import BreadCrumbs from './components/BreadCrumbs'
import ContactImg from '../../assets/login-img.png'

const ContactUs = () => {
  return (
    <div>
     <SecNavBar/>
     <div className="px-[40px] max-lg:px-[20px] max-w-[1180px] mx-auto py-[24px]">
        <BreadCrumbs/>
    
    <div className="pt-[24px]">
    <h4 className='text-[36px] font-semibold max-lg:text-[28px]'>Contact Us</h4>
    <div className="p-[16px] border border-[#EEEEEE] rounded-[16px] flex gap-[24px] max-md:flex-col mt-[16px]">
        <div className="w-[50%]  max-md:hidden">
            <img className=' rounded-[12px] h-[460px] w-full' src={ContactImg} alt="" />
        </div>
        <div className="w-[50%] max-md:w-full">
            <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
            <div className="w-full">
                <p className=' font-semibold'>First name</p>
                <input className='w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px]' type="text" placeholder='Enter first name' />
            </div>
            <div className="w-full">
                <p className=' font-semibold'>Last name</p>
                <input className='w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px]' type="text" placeholder='Enter last name' />
            </div>
            </div>
            <div className="w-full">
                <p className=' font-semibold'>Email</p>
                <input className='w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px]' type="email" placeholder='Enter email' />
            </div>
            <div className="w-full">
                <p className=' font-semibold'>Message</p>
                <textarea className='w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px] h-[180px]' name="" id="">
                Enter message...
                </textarea>
            </div>
            <button className='btn-pri ml-auto'>Submit</button>
            </div>
        </div>
    </div>



    {/* <div className="flex items-center">
              <div className="input-with-icon relative min-w-[60px]">
                <div className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl">
                <input
                  className="text-left field-sizing-content outline-none"
                  type="text"
                  placeholder='500'
                />
                <span className=" pl-[3px]">ft</span>
                </div>
              </div>
              <p className="text-[26px] font-semibold px-[12px] leading-[26px]">
                X
              </p>
              <div className="input-with-icon relative min-w-[60px]">
                <div className="border border-[#EEEEEE] py-[20px] px-[16px] w-full rounded-2xl">
                <input
                  className="text-left field-sizing-content outline-none"
                  type="text"
                  placeholder='5'
                />
                <span className=" pl-[3px]">ft</span>
                </div>
              </div>
            </div> */}



{/* <div className="flex flex-col border border-[#EEEEEE] rounded-[16px] p-[40px] gap-[20px] justify-center items-center max-w-[360px]">
    <span><svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5007 43.5026L6.88815 51.1151C6.48537 51.5179 6.04232 51.6186 5.55898 51.4172C5.07565 51.2158 4.83398 50.8332 4.83398 50.2693V9.66927C4.83398 8.3401 5.30765 7.20266 6.25498 6.25694C7.20232 5.31122 8.33976 4.83755 9.66732 4.83594H48.334C49.6632 4.83594 50.8014 5.3096 51.7487 6.25694C52.6961 7.20427 53.1689 8.34172 53.1673 9.66927V38.6693C53.1673 39.9984 52.6945 41.1367 51.7487 42.084C50.803 43.0314 49.6648 43.5042 48.334 43.5026H14.5007ZM29.0007 30.1505L33.5923 32.9297C34.0354 33.2116 34.4784 33.202 34.9215 32.9007C35.3645 32.5994 35.5257 32.1862 35.4048 31.6609L34.1965 26.4047L38.3048 22.8401C38.7076 22.4776 38.8284 22.045 38.6673 21.5424C38.5062 21.0397 38.1437 20.7674 37.5798 20.7255L32.2027 20.3026L30.0882 15.3484C29.8868 14.8651 29.5243 14.6234 29.0007 14.6234C28.477 14.6234 28.1145 14.8651 27.9132 15.3484L25.7986 20.3026L20.4215 20.7255C19.8576 20.7658 19.4951 21.0381 19.334 21.5424C19.1729 22.0466 19.2937 22.4792 19.6965 22.8401L23.8048 26.4047L22.5965 31.6609C22.4757 32.1846 22.6368 32.5978 23.0798 32.9007C23.5229 33.2036 23.9659 33.2132 24.409 32.9297L29.0007 30.1505Z" fill="#959595"/>
</svg>

</span>
<p className='text-[18px] font-semibold'>No Reviews for now</p>
</div> */}




    </div>
     </div>
    </div>
  )
}

export default ContactUs
