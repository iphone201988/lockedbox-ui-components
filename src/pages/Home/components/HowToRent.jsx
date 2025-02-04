import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowToRent = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="py-[60px] max-lg:py-[40px]">
      <div className="max-w-[1440px] px-[40px] mx-auto max-lg:px-[20px]">
        <h2 className="text-[36px] font-bold text-center mb-[40px] max-lg:text-[26px]">
          How to <span className="text-[#235370]">rent</span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-[60px] max-lg:gap-[40px] max-md:justify-start max-md:items-start">
        <div data-aos="fade-up" data-aos-duration="3000"  className="step-one flex justify-center gap-[50px] min-w-[370px] max-lg:gap-[24px] ml-[-18rem] max-lg:ml-[-16rem] max-md:ml-0 max-md:min-w-auto max-md:flex-row-reverse ">
          <div className="max-w-[260px] flex flex-col items-end max-md:items-start">
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_19_421)">
                <path
                  d="M57.2992 53.8675L51.1608 47.7292C52.4175 45.82 53.1667 43.5242 53.1667 41.0833C53.1667 34.4133 47.7533 29 41.0833 29C34.4133 29 29 34.4133 29 41.0833C29 47.7533 34.4133 53.1667 41.0833 53.1667C43.5483 53.1667 45.82 52.4175 47.7292 51.1608L53.8675 57.2992C54.3508 57.7825 54.955 58 55.5833 58C56.2117 58 56.8158 57.7583 57.2992 57.2992C58.2417 56.3567 58.2417 54.8342 57.2992 53.8917V53.8675ZM36.25 24.8675V24.1667C36.25 22.8375 35.1625 21.75 33.8333 21.75C32.5042 21.75 31.4167 22.8375 31.4167 24.1667V27.2117C29.7733 28.3475 28.3475 29.7733 27.2117 31.4167H21.75V22.5475C21.75 21.895 21.9917 21.2908 22.4508 20.8317L30.4983 12.7842C30.9575 12.325 31.5617 12.0833 32.2142 12.0833H41.0833V24.1667C39.3917 24.1667 37.7725 24.4083 36.25 24.8675ZM24.8675 45.9167C25.6892 48.6958 27.2117 51.185 29.2417 53.1667H12.0833C5.41333 53.1667 0 47.7533 0 41.0833V12.0833C0 5.41333 5.41333 0 12.0833 0H41.0833C47.7533 0 53.1667 5.41333 53.1667 12.0833V29.2658C51.185 27.2358 48.6958 25.7133 45.9167 24.8917V12.0833C45.9167 9.425 43.7417 7.25 41.0833 7.25H32.2142C30.2808 7.25 28.4683 7.99917 27.0908 9.37667L19.0433 17.4242C17.6658 18.8017 16.9167 20.6142 16.9167 22.5475V31.4167C16.9167 34.075 19.0917 36.25 21.75 36.25H24.8675C24.4083 37.7725 24.1667 39.3917 24.1667 41.0833H12.0833V18.8742L18.6325 11.3825C19.3333 10.6817 19.5267 9.6425 19.1642 8.74833C18.8017 7.85417 17.9075 7.25 16.9408 7.25H12.1075C9.44917 7.25 7.27417 9.425 7.27417 12.0833V41.0833C7.27417 43.7417 9.44917 45.9167 12.1075 45.9167H24.8917H24.8675Z"
                  fill="#1E1E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_19_421">
                  <rect width="58" height="58" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h5 className="text-[26px] font-bold text-right mt-[16px] mb-[6px] max-lg:text-[18px] max-md:text-left">
              Find desired space
            </h5>
            <p className="text-[24px] text-right max-w-[240px] max-lg:text-[16px] max-md:text-left">
              We offer user-friendly search interfaces.
            </p>
          </div>
          <p className="before-line relative w-[60px] h-[60px] flex justify-center items-center bg-[#235370] font-semibold text-[28px] text-white rounded-full">
            1
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="step-two flex justify-center gap-[50px] min-w-[370px] max-lg:gap-[24px] mr-[-19rem] max-lg:mr-[-14.5rem]  max-md:mr-0 max-md:min-w-auto">
          <p className="w-[60px] h-[60px] flex justify-center items-center bg-[#235370] font-semibold text-[28px] text-white rounded-full">
            2
          </p>
          <div className="max-w-[260px] flex flex-col items-start">
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_21_447)">
                <path
                  d="M43.5 29C35.4912 29 29 35.4912 29 43.5C29 51.5088 35.4912 58 43.5 58C51.5088 58 58 51.5088 58 43.5C58 35.4912 51.5088 29 43.5 29ZM52.4006 42.804L45.8683 49.1212C44.776 50.199 43.326 50.7428 41.8736 50.7428C40.4212 50.7428 38.9663 50.199 37.8547 49.1139L34.5825 45.8949C33.6279 44.9597 33.6158 43.4299 34.5487 42.4777C35.4815 41.5232 37.0112 41.5087 37.9658 42.4439L41.238 45.6605C41.586 46.0037 42.1563 45.9964 42.4995 45.6557L49.0559 39.3143C50.0153 38.3936 51.5475 38.4202 52.4731 39.3844C53.3963 40.3463 53.3648 41.876 52.403 42.8016L52.4006 42.804ZM24.1667 43.5C24.1667 32.8401 32.8401 24.1667 43.5 24.1667C45.1723 24.1667 46.7843 24.4011 48.3333 24.8022V16.9167C48.3333 11.9746 45.3439 7.7285 41.0833 5.858V2.41667C41.0833 1.08267 40.0031 0 38.6667 0C37.3302 0 36.25 1.08267 36.25 2.41667V4.83333H31.4167V2.41667C31.4167 1.08267 30.3364 0 29 0C27.6636 0 26.5833 1.08267 26.5833 2.41667V4.83333H21.75V2.41667C21.75 1.08267 20.6698 0 19.3333 0C17.9969 0 16.9167 1.08267 16.9167 2.41667V4.83333H12.0833V2.41667C12.0833 1.08267 11.0031 0 9.66667 0C8.33025 0 7.25 1.08267 7.25 2.41667V5.858C2.98942 7.7285 0 11.9746 0 16.9167V45.9167C0 52.5794 5.42058 58 12.0833 58H30.7545C26.7259 54.4548 24.1667 49.2758 24.1667 43.5ZM12.0833 16.9167H36.25C37.5864 16.9167 38.6667 17.9993 38.6667 19.3333C38.6667 20.6673 37.5864 21.75 36.25 21.75H12.0833C10.7469 21.75 9.66667 20.6673 9.66667 19.3333C9.66667 17.9993 10.7469 16.9167 12.0833 16.9167ZM20.5417 31.4167H12.0833C10.7469 31.4167 9.66667 30.334 9.66667 29C9.66667 27.666 10.7469 26.5833 12.0833 26.5833H20.5417C21.8781 26.5833 22.9583 27.666 22.9583 29C22.9583 30.334 21.8781 31.4167 20.5417 31.4167Z"
                  fill="#1E1E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_21_447">
                  <rect width="58" height="58" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h5 className="text-[26px] font-bold text-left mt-[16px] mb-[6px] max-lg:text-[18px]">
              Book your space
            </h5>
            <p className="text-[24px] text-left max-w-[240px] max-lg:text-[16px]">
              All hosts are identity verified.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="step-one flex justify-center gap-[50px] min-w-[370px] max-lg:gap-[24px] ml-[-14.3rem]  max-lg:ml-[-9.4rem]  max-md:ml-0 max-md:min-w-auto max-md:flex-row-reverse">
          <div className="max-w-[260px] flex flex-col items-end max-md:items-start">
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_21_473)">
                <path
                  d="M21.3634 34.6889L26.6196 25.9309L7.28144 19.4832C5.87252 19.0144 4.32344 19.5847 3.55977 20.8607L0.758854 25.5273C-0.853063 28.2147 0.437438 31.7019 3.40994 32.6927L15.689 36.7866C17.8374 37.5019 20.1961 36.6295 21.3609 34.6889H21.3634ZM26.6196 58.0001V35.3245L25.5079 37.1757C23.7148 40.1627 20.5683 41.8761 17.255 41.8761C16.2279 41.8761 15.1864 41.7142 14.1617 41.371L4.8696 38.2752V42.27C4.8696 47.4707 8.19735 52.0889 13.1322 53.7322L23.8501 57.3041C24.7539 57.5965 25.6819 57.8382 26.6196 58.0001ZM57.3596 25.6071L54.5635 20.9477C53.7684 19.621 52.1589 19.0265 50.692 19.5147L31.4529 25.9285L36.7092 34.6865C37.874 36.6295 40.2327 37.5019 42.3811 36.7842L54.7496 32.6613C57.6762 31.685 58.9474 28.2533 57.3596 25.6071ZM40.8175 41.8785C37.5043 41.8785 34.3578 40.1675 32.5646 37.1781L31.4529 35.3269V57.9904C32.4728 57.8116 33.4829 57.5506 34.4399 57.2316H34.4641L44.9404 53.7371C49.8752 52.0913 53.2029 47.4755 53.2029 42.2748V38.2777L43.9109 41.3758C42.8862 41.719 41.8446 41.8785 40.8175 41.8785ZM46.2236 15.0632C46.0303 15.8752 45.4309 16.5301 44.6383 16.7935L29.9522 21.6872C29.7033 21.7694 29.4447 21.8129 29.1885 21.8129C28.9324 21.8129 28.6714 21.7718 28.4249 21.6872L19.5243 18.6519L32.1127 6.10941C34.0025 4.21716 37.0669 4.21958 38.9519 6.10458L45.5856 12.7987C46.1753 13.3932 46.4145 14.2487 46.2212 15.0632H46.2236ZM11.7233 16.3271C10.9234 16.0637 10.3216 15.3967 10.1331 14.575C9.9446 13.7533 10.1959 12.8954 10.8001 12.3057L21.9772 1.39449C23.838 -0.471174 26.9072 -0.466341 28.7898 1.41624L29.522 2.14849C29.2175 2.38774 28.9034 2.60766 28.6254 2.88558L14.3333 17.1294L11.7233 16.3271Z"
                  fill="#1E1E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_21_473">
                  <rect width="58" height="58" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h5 className="text-[26px] font-bold text-right mt-[16px] mb-[6px] max-lg:text-[18px] max-md:text-left">
              Start packing!
            </h5>
            <p className="text-[24px] text-right max-w-[240px] max-lg:text-[16px] max-md:text-left">
              Your space awaits.
            </p>
          </div>
          <p className="w-[60px] h-[60px] flex justify-center items-center bg-[#235370] font-semibold text-[28px] text-white rounded-full">
            3
          </p>
        </div>
        <a data-aos="fade-up" data-aos-duration="3000" className="btn-pri" href="">Start Search</a>
        </div>
      </div>
    </div>
  );
};

export default HowToRent;
