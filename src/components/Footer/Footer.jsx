import React from "react";
import FooterLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-[#ffffff]">
      <div className="max-w-[1440px] px-[40px] mx-auto max-lg:px-[20px]">
        <div className="py-10 flex justify-between border-b border-[#ffffff] max-md:flex-col max-md:gap-[20px]">
          <div className="">
            <img className="max-w-[158px]" src={FooterLogo} alt="" />
            <p className=" font-[300] max-w-[400px] mt-5 max-md:text-[14px]">
              Founded in 2024, we are a peer-to-peer storage sharing and
              logistic provider that seeks to revolutionize how people store and
              move their belongings.
            </p>
          </div>
          <div className="flex gap-10 max-lg:gap-[16px] flex-wrap">
            <div className=" flex flex-col gap-2 max-sm:max-w-[150px] max-sm:w-full">
              <p className="text-[18px] text-[#235370] font-semibold monts-font max-md:text-[16px]">Services</p>
              <a href="#">Find Storage</a>
              <a href="#">Delivery</a>
              <a href="#">Pick-up</a>
            </div>
            <div className=" flex flex-col gap-2 max-sm:max-w-[150px] max-sm:w-full ">
              <p className="text-[18px] text-[#235370] font-semibold monts-font max-md:text-[16px]">Links</p>
              <a href="#">Home</a>
              <a href="#">Delivery</a>
              <a href="#">Pick-up</a>
            </div>
            <div className=" flex flex-col gap-2 max-sm:max-w-[150px] max-sm:w-full">
              <p className="text-[18px] text-[#235370] font-semibold monts-font max-md:text-[16px]">Support</p>
              <a href="#">FAQ</a>
              <a href="#">Contact Us</a>
              <a href="#">Support Centre</a>
            </div>
            <div className=" flex flex-col gap-2 max-sm:max-w-[150px] max-sm:w-full">
              <p className="text-[18px] text-[#235370] font-semibold monts-font max-md:text-[16px]">Company</p>
              <a href="#">About</a>
              <a href="#">Press</a>
              <a href="#">Job Openings</a>
              <a href="#">Partners</a>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between py-10 max-md:py-[24px] max-sm:flex-col max-sm:gap-[16px]">
          <p className=" max-md:text-14px">© 2024 LockedBox Ltd.</p>
          <div className="social-media flex gap-4 cursor-pointer max-md:gap-[8px]">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 16.0351C30 8.28772 23.728 2 16 2C8.272 2 2 8.28772 2 16.0351C2 22.8281 6.816 28.4842 13.2 29.7895V20.2456H10.4V16.0351H13.2V12.5263C13.2 9.81754 15.398 7.61403 18.1 7.61403H21.6V11.8246H18.8C18.03 11.8246 17.4 12.4561 17.4 13.2281V16.0351H21.6V20.2456H17.4V30C24.47 29.2982 30 23.3193 30 16.0351Z"
                  fill="white"
                />
              </svg>
              </span>
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.375 16C20.375 17.1603 19.9141 18.2731 19.0936 19.0936C18.2731 19.9141 17.1603 20.375 16 20.375C14.8397 20.375 13.7269 19.9141 12.9064 19.0936C12.0859 18.2731 11.625 17.1603 11.625 16C11.626 15.7501 11.6498 15.5071 11.6965 15.2708H10.1667V21.0998C10.1667 21.5052 10.4948 21.8333 10.9002 21.8333H21.1012C21.2955 21.8329 21.4817 21.7555 21.619 21.618C21.7562 21.4804 21.8333 21.2941 21.8333 21.0998V15.2708H20.3035C20.3502 15.5071 20.374 15.7501 20.375 16ZM16 18.9167C16.3831 18.9166 16.7625 18.841 17.1164 18.6943C17.4703 18.5476 17.7919 18.3326 18.0627 18.0617C18.3335 17.7907 18.5483 17.469 18.6949 17.115C18.8414 16.761 18.9168 16.3817 18.9167 15.9985C18.9166 15.6154 18.841 15.2361 18.6943 14.8822C18.5476 14.5282 18.3326 14.2067 18.0617 13.9358C17.7907 13.665 17.469 13.4502 17.115 13.3037C16.761 13.1571 16.3817 13.0818 15.9985 13.0819C15.2248 13.0821 14.4828 13.3896 13.9358 13.9369C13.3889 14.4841 13.0817 15.2263 13.0819 16C13.0821 16.7737 13.3896 17.5157 13.9369 18.0627C14.4841 18.6097 15.2263 18.9169 16 18.9167ZM19.5 12.9375H21.2485C21.3061 12.9377 21.3632 12.9265 21.4164 12.9046C21.4697 12.8827 21.5181 12.8505 21.5588 12.8099C21.5996 12.7692 21.632 12.7209 21.6541 12.6678C21.6761 12.6146 21.6875 12.5576 21.6875 12.5V10.7515C21.6877 10.6938 21.6765 10.6366 21.6545 10.5832C21.6325 10.5299 21.6002 10.4814 21.5594 10.4406C21.5186 10.3998 21.4701 10.3675 21.4168 10.3455C21.3634 10.3235 21.3062 10.3123 21.2485 10.3125H19.5C19.4423 10.3123 19.3851 10.3235 19.3318 10.3455C19.2784 10.3675 19.23 10.3998 19.1892 10.4406C19.1484 10.4814 19.1161 10.5299 19.0941 10.5832C19.0721 10.6366 19.0608 10.6938 19.061 10.7515V12.5C19.0625 12.7406 19.2594 12.9375 19.5 12.9375ZM16 2C12.287 2 8.72601 3.475 6.1005 6.1005C3.475 8.72601 2 12.287 2 16C2 19.713 3.475 23.274 6.1005 25.8995C8.72601 28.525 12.287 30 16 30C17.8385 30 19.659 29.6379 21.3576 28.9343C23.0561 28.2307 24.5995 27.1995 25.8995 25.8995C27.1995 24.5995 28.2307 23.0561 28.9343 21.3576C29.6379 19.659 30 17.8385 30 16C30 14.1615 29.6379 12.341 28.9343 10.6424C28.2307 8.94387 27.1995 7.40052 25.8995 6.1005C24.5995 4.80048 23.0561 3.76925 21.3576 3.06569C19.659 2.36212 17.8385 2 16 2ZM23.2917 21.6715C23.2917 22.5625 22.5625 23.2917 21.6715 23.2917H10.3285C9.4375 23.2917 8.70833 22.5625 8.70833 21.6715V10.3285C8.70833 9.4375 9.4375 8.70833 10.3285 8.70833H21.6715C22.5625 8.70833 23.2917 9.4375 23.2917 10.3285V21.6715Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2C8.26792 2 2 8.26792 2 16C2 23.7321 8.26792 30 16 30C23.7321 30 30 23.7321 30 16C30 8.26792 23.7321 2 16 2ZM12.5729 21.8027H9.73792V12.6794H12.5729V21.8027ZM11.1379 11.5594C10.2425 11.5594 9.66354 10.925 9.66354 10.1404C9.66354 9.33979 10.26 8.72437 11.1744 8.72437C12.0887 8.72437 12.6487 9.33979 12.6662 10.1404C12.6662 10.925 12.0887 11.5594 11.1379 11.5594ZM22.9271 21.8027H20.0921V16.7467C20.0921 15.5698 19.6808 14.7706 18.6556 14.7706C17.8725 14.7706 17.4073 15.3117 17.2017 15.8323C17.1258 16.0175 17.1069 16.28 17.1069 16.541V21.8012H14.2704V15.5888C14.2704 14.4498 14.234 13.4975 14.196 12.6779H16.6592L16.789 13.9452H16.8458C17.2192 13.3502 18.1335 12.4723 19.6633 12.4723C21.5285 12.4723 22.9271 13.7221 22.9271 16.4083V21.8027Z"
                    fill="white"
                  />
                </svg>
              </span>
          </div>
          <p  className=" max-md:text-14px">
            <a href="">Privacy | Terms | Help</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
