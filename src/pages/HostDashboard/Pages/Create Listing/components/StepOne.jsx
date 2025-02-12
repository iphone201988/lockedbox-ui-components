import React from "react";
import "../style.css";

const StepOne = () => {
  return (
    <div className="flex flex-col">
      {/* --- */}
      <div className="flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Where is the space located?
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Enter Address</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Enter address"
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.262 22.134C11.262 22.134 4 16.018 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 16.018 12.738 22.134 12.738 22.134C12.334 22.506 11.669 22.502 11.262 22.134ZM12 13.5C12.4596 13.5 12.9148 13.4095 13.3394 13.2336C13.764 13.0577 14.1499 12.7999 14.4749 12.4749C14.7999 12.1499 15.0577 11.764 15.2336 11.3394C15.4095 10.9148 15.5 10.4596 15.5 10C15.5 9.54037 15.4095 9.08525 15.2336 8.66061C15.0577 8.23597 14.7999 7.85013 14.4749 7.52513C14.1499 7.20012 13.764 6.94231 13.3394 6.76642C12.9148 6.59053 12.4596 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10C8.5 10.9283 8.86875 11.8185 9.52513 12.4749C10.1815 13.1313 11.0717 13.5 12 13.5Z"
                      fill="#235370"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className=" mt-[8px]">
              <label className="flex  items-start gap-[8px]" htmlFor="">
                <input
                  className="w-[24px] h-[24px] min-w-[24px] rounded-[5px] accent-[#235370]"
                  type="checkbox"
                  name=""
                  id=""
                />
                By continuing, you certify you inhabit the address or have legal
                right to use it for hosting. Exact address is not shown until
                you confirm a request to book
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ----- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            What type of space is it?
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Select type</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <select
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer dropdown-container"
                  name=""
                  id=""
                >
                  <option value="">Basements</option>
                </select>
                <span className=" absolute right-[16px] top-[20px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1778 19.569C11.2696 19.7022 11.3923 19.8112 11.5355 19.8864C11.6787 19.9617 11.838 20.001 11.9998 20.001C12.1616 20.001 12.3209 19.9617 12.4641 19.8864C12.6073 19.8112 12.7301 19.7022 12.8218 19.569L21.8218 6.569C21.926 6.41906 21.9871 6.24343 21.9984 6.06121C22.0098 5.87898 21.971 5.69712 21.8863 5.53539C21.8016 5.37366 21.6741 5.23825 21.5179 5.14386C21.3616 5.04947 21.1824 4.99971 20.9998 5H2.99981C2.81766 5.00075 2.63915 5.05115 2.4835 5.14576C2.32784 5.24038 2.20092 5.37564 2.11638 5.53699C2.03185 5.69835 1.9929 5.8797 2.00372 6.06153C2.01455 6.24337 2.07474 6.41881 2.17781 6.569L11.1778 19.569Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Does the space have any <br /> additional features ?
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Select feature</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <select
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer dropdown-container"
                  name=""
                  id=""
                >
                  <option value="">Height accommodation (10’)</option>
                </select>
                <span className=" absolute right-[16px] top-[20px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1778 19.569C11.2696 19.7022 11.3923 19.8112 11.5355 19.8864C11.6787 19.9617 11.838 20.001 11.9998 20.001C12.1616 20.001 12.3209 19.9617 12.4641 19.8864C12.6073 19.8112 12.7301 19.7022 12.8218 19.569L21.8218 6.569C21.926 6.41906 21.9871 6.24343 21.9984 6.06121C22.0098 5.87898 21.971 5.69712 21.8863 5.53539C21.8016 5.37366 21.6741 5.23825 21.5179 5.14386C21.3616 5.04947 21.1824 4.99971 20.9998 5H2.99981C2.81766 5.00075 2.63915 5.05115 2.4835 5.14576C2.32784 5.24038 2.20092 5.37564 2.11638 5.53699C2.03185 5.69835 1.9929 5.8797 2.00372 6.06153C2.01455 6.24337 2.07474 6.41881 2.17781 6.569L11.1778 19.569Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- */}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            What can be stored?
          </p>
        </div>
        <div className=" max-w-[55%] w-full max-md:max-w-full">
          <div className="mb-[16px] flex flex-wrap gap-[16px]">
            <div className="stored-hover ">
              <span>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12V10.5C3 5.529 7.029 1.5 12 1.5H24C28.971 1.5 33 5.529 33 10.5V12C29.6865 12 27 14.6865 27 18V22.5H9V18C9 14.6865 6.3135 12 3 12ZM32.496 15.0405C31.0215 15.2805 30 16.665 30 18.1605V24C30 24.828 29.328 25.5 28.5 25.5H7.5C6.672 25.5 6 24.828 6 24V18.1605C6 16.6665 4.9785 15.2805 3.504 15.0405C1.6245 14.7345 0 16.1775 0 18V24C0 26.454 1.179 28.632 3 30V33C3 33.828 3.672 34.5 4.5 34.5C5.328 34.5 6 33.828 6 33V31.35C6.4845 31.449 6.987 31.5 7.5 31.5H28.5C29.013 31.5 29.5155 31.449 30 31.35V33C30 33.828 30.672 34.5 31.5 34.5C32.328 34.5 33 33.828 33 33V30C34.821 28.632 36 26.454 36 24V18C36 16.1775 34.3755 14.736 32.496 15.0405Z" fill="currentColor"/>
</svg>

              </span>
              <p>Furniture & Household</p>
            </div>
            <div className="stored-hover active">
              <span>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_150_2213)">
                    <path
                      d="M33.915 13.65C33.5501 12.3179 33.0184 11.0373 32.3325 9.8385C32.6248 9.27289 32.7296 8.62895 32.6318 7.99983C32.5339 7.37071 32.2384 6.78905 31.788 6.339L29.667 4.212C29.2105 3.77628 28.6314 3.49115 28.0077 3.39512C27.384 3.29909 26.7459 3.39678 26.1795 3.675C24.9755 2.98495 23.6887 2.45067 22.35 2.085C22.1565 1.48074 21.7764 0.953386 21.2643 0.578753C20.7522 0.204119 20.1345 0.00149312 19.5 0L16.5 0C15.8655 0.00149312 15.2478 0.204119 14.7357 0.578753C14.2236 0.953386 13.8435 1.48074 13.65 2.085C12.3113 2.45067 11.0245 2.98495 9.8205 3.675C9.25402 3.39721 8.61599 3.29975 7.99241 3.39577C7.36883 3.49179 6.78968 3.77666 6.333 4.212L4.212 6.333C3.76164 6.78305 3.46614 7.36471 3.36825 7.99383C3.27036 8.62295 3.37517 9.26689 3.6675 9.8325C2.98117 11.0332 2.44945 12.3159 2.085 13.65C1.48074 13.8435 0.953386 14.2236 0.578753 14.7357C0.204119 15.2478 0.00149312 15.8655 0 16.5L0 19.5C0.00149312 20.1345 0.204119 20.7522 0.578753 21.2643C0.953386 21.7764 1.48074 22.1565 2.085 22.35C2.4502 23.682 2.98189 24.9626 3.6675 26.1615C3.37517 26.7271 3.27036 27.3711 3.36825 28.0002C3.46614 28.6293 3.76164 29.211 4.212 29.661L6.333 31.782C6.78305 32.2324 7.36471 32.5279 7.99383 32.6258C8.62295 32.7236 9.26689 32.6188 9.8325 32.3265C11.033 33.0147 12.3157 33.5484 13.65 33.915C13.8435 34.5193 14.2236 35.0466 14.7357 35.4212C15.2478 35.7959 15.8655 35.9985 16.5 36H19.5C20.1345 35.9985 20.7522 35.7959 21.2643 35.4212C21.7764 35.0466 22.1565 34.5193 22.35 33.915C23.6822 33.5505 24.9629 33.0187 26.1615 32.3325C26.7271 32.6248 27.3711 32.7296 28.0002 32.6318C28.6293 32.5339 29.211 32.2384 29.661 31.788L31.782 29.667C32.2324 29.217 32.5279 28.6353 32.6258 28.0062C32.7236 27.3771 32.6188 26.7331 32.3265 26.1675C33.0147 24.967 33.5484 23.6843 33.915 22.35C34.5193 22.1565 35.0466 21.7764 35.4212 21.2643C35.7959 20.7522 35.9985 20.1345 36 19.5V16.5C35.9985 15.8655 35.7959 15.2478 35.4212 14.7357C35.0466 14.2236 34.5193 13.8435 33.915 13.65ZM18 30C15.6266 30 13.3065 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.00519 20.3995 5.76755 17.9867 6.23058 15.6589C6.6936 13.3311 7.83649 11.1929 9.51472 9.51472C11.1929 7.83649 13.3311 6.6936 15.6589 6.23058C17.9867 5.76755 20.3995 6.00519 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3065 30 15.6266 30 18C29.9964 21.1815 28.731 24.2317 26.4813 26.4813C24.2317 28.731 21.1815 29.9964 18 30ZM18 9.75C16.3683 9.75 14.7733 10.2339 13.4165 11.1404C12.0598 12.0469 11.0024 13.3354 10.378 14.8429C9.75357 16.3504 9.59019 18.0092 9.90852 19.6095C10.2268 21.2098 11.0126 22.6798 12.1664 23.8336C13.3202 24.9874 14.7902 25.7732 16.3905 26.0915C17.9908 26.4098 19.6496 26.2464 21.1571 25.622C22.6646 24.9976 23.9531 23.9402 24.8596 22.5835C25.7661 21.2267 26.25 19.6317 26.25 18C26.2472 15.8128 25.3771 13.716 23.8306 12.1694C22.284 10.6229 20.1872 9.75278 18 9.75ZM18 12C18.445 12 18.88 12.132 19.25 12.3792C19.62 12.6264 19.9084 12.9778 20.0787 13.389C20.249 13.8001 20.2936 14.2525 20.2068 14.689C20.12 15.1254 19.9057 15.5263 19.591 15.841C19.2763 16.1557 18.8754 16.37 18.439 16.4568C18.0025 16.5436 17.5501 16.499 17.139 16.3287C16.7278 16.1584 16.3764 15.87 16.1292 15.5C15.882 15.13 15.75 14.695 15.75 14.25C15.75 13.6533 15.9871 13.081 16.409 12.659C16.831 12.2371 17.4033 12 18 12ZM12 18C12 17.555 12.132 17.12 12.3792 16.75C12.6264 16.38 12.9778 16.0916 13.389 15.9213C13.8001 15.751 14.2525 15.7064 14.689 15.7932C15.1254 15.88 15.5263 16.0943 15.841 16.409C16.1557 16.7237 16.37 17.1246 16.4568 17.561C16.5436 17.9975 16.499 18.4499 16.3287 18.861C16.1584 19.2722 15.87 19.6236 15.5 19.8708C15.13 20.118 14.695 20.25 14.25 20.25C13.6533 20.25 13.081 20.0129 12.659 19.591C12.2371 19.169 12 18.5967 12 18ZM18 24C17.555 24 17.12 23.868 16.75 23.6208C16.38 23.3736 16.0916 23.0222 15.9213 22.611C15.751 22.1999 15.7064 21.7475 15.7932 21.311C15.88 20.8746 16.0943 20.4737 16.409 20.159C16.7237 19.8443 17.1246 19.63 17.561 19.5432C17.9975 19.4564 18.4499 19.501 18.861 19.6713C19.2722 19.8416 19.6236 20.13 19.8708 20.5C20.118 20.87 20.25 21.305 20.25 21.75C20.25 22.3467 20.0129 22.919 19.591 23.341C19.169 23.7629 18.5967 24 18 24ZM21.75 20.25C21.305 20.25 20.87 20.118 20.5 19.8708C20.13 19.6236 19.8416 19.2722 19.6713 18.861C19.501 18.4499 19.4564 17.9975 19.5432 17.561C19.63 17.1246 19.8443 16.7237 20.159 16.409C20.4737 16.0943 20.8746 15.88 21.311 15.7932C21.7475 15.7064 22.1999 15.751 22.611 15.9213C23.0222 16.0916 23.3736 16.38 23.6208 16.75C23.868 17.12 24 17.555 24 18C24 18.5967 23.7629 19.169 23.341 19.591C22.919 20.0129 22.3467 20.25 21.75 20.25Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_150_2213">
                      <rect width="36" height="36" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>Auto Parts & Accessories</p>
            </div>
            <div className="stored-hover ">
              <span>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_150_2257)">
<path d="M34.3604 32.9999L27.3599 22.4999H31.3604L25.3604 13.4999H28.6499L20.5739 1.04985C19.8987 0.397403 18.9965 0.0327148 18.0576 0.0327148C17.1187 0.0327148 16.2165 0.397403 15.5414 1.04985L7.41888 13.4999H10.7549L4.75488 22.4999H8.75388L1.75488 32.9999H16.5584V35.9999H19.5584V32.9999H34.3604ZM19.4999 26.9999C19.2032 26.9999 18.9132 26.9119 18.6665 26.7471C18.4199 26.5822 18.2276 26.348 18.1141 26.0739C18.0005 25.7998 17.9708 25.4982 18.0287 25.2072C18.0866 24.9162 18.2294 24.649 18.4392 24.4392C18.649 24.2294 18.9163 24.0866 19.2072 24.0287C19.4982 23.9708 19.7998 24.0005 20.0739 24.114C20.348 24.2276 20.5823 24.4198 20.7471 24.6665C20.9119 24.9132 20.9999 25.2032 20.9999 25.4999C20.9999 25.8977 20.8418 26.2792 20.5605 26.5605C20.2792 26.8418 19.8977 26.9999 19.4999 26.9999ZM23.9999 26.9999C24.2966 26.9999 24.5866 27.0878 24.8332 27.2526C25.0799 27.4175 25.2722 27.6517 25.3857 27.9258C25.4992 28.1999 25.5289 28.5015 25.4711 28.7925C25.4132 29.0835 25.2703 29.3507 25.0605 29.5605C24.8508 29.7703 24.5835 29.9132 24.2925 29.971C24.0015 30.0289 23.6999 29.9992 23.4259 29.8857C23.1518 29.7721 22.9175 29.5799 22.7527 29.3332C22.5879 29.0865 22.4999 28.7965 22.4999 28.4999C22.4999 28.102 22.6579 27.7205 22.9392 27.4392C23.2205 27.1579 23.6021 26.9999 23.9999 26.9999ZM22.4999 16.4999C22.7966 16.4999 23.0866 16.5878 23.3332 16.7526C23.5799 16.9175 23.7722 17.1517 23.8857 17.4258C23.9992 17.6999 24.0289 18.0015 23.9711 18.2925C23.9132 18.5835 23.7703 18.8507 23.5605 19.0605C23.3508 19.2703 23.0835 19.4132 22.7925 19.471C22.5015 19.5289 22.1999 19.4992 21.9259 19.3857C21.6518 19.2721 21.4175 19.0799 21.2527 18.8332C21.0879 18.5865 20.9999 18.2965 20.9999 17.9999C20.9999 17.602 21.1579 17.2205 21.4392 16.9392C21.7205 16.6579 22.1021 16.4999 22.4999 16.4999ZM19.4999 7.49985C19.7966 7.49985 20.0866 7.58782 20.3332 7.75265C20.5799 7.91747 20.7722 8.15174 20.8857 8.42582C20.9992 8.69991 21.0289 9.00151 20.9711 9.29249C20.9132 9.58346 20.7703 9.85073 20.5605 10.0605C20.3508 10.2703 20.0835 10.4131 19.7925 10.471C19.5015 10.5289 19.1999 10.4992 18.9259 10.3857C18.6518 10.2721 18.4175 10.0799 18.2527 9.83321C18.0879 9.58653 17.9999 9.29652 17.9999 8.99985C17.9999 8.60203 18.1579 8.22049 18.4392 7.93919C18.7205 7.65788 19.1021 7.49985 19.4999 7.49985ZM11.9999 29.9999C11.7032 29.9999 11.4132 29.9119 11.1665 29.7471C10.9199 29.5822 10.7276 29.348 10.6141 29.0739C10.5005 28.7998 10.4708 28.4982 10.5287 28.2072C10.5866 27.9162 10.7294 27.649 10.9392 27.4392C11.149 27.2294 11.4163 27.0866 11.7072 27.0287C11.9982 26.9708 12.2998 27.0005 12.5739 27.114C12.848 27.2276 13.0823 27.4198 13.2471 27.6665C13.4119 27.9132 13.4999 28.2032 13.4999 28.4999C13.4999 28.8977 13.3418 29.2792 13.0605 29.5605C12.7792 29.8418 12.3977 29.9999 11.9999 29.9999ZM13.4999 22.4999C13.2032 22.4999 12.9132 22.4119 12.6665 22.2471C12.4199 22.0822 12.2276 21.848 12.1141 21.5739C12.0005 21.2998 11.9708 20.9982 12.0287 20.7072C12.0866 20.4162 12.2294 20.149 12.4392 19.9392C12.649 19.7294 12.9163 19.5866 13.2072 19.5287C13.4982 19.4708 13.7998 19.5005 14.0739 19.614C14.348 19.7276 14.5823 19.9198 14.7471 20.1665C14.9119 20.4132 14.9999 20.7032 14.9999 20.9999C14.9999 21.3977 14.8418 21.7792 14.5605 22.0605C14.2792 22.3418 13.8977 22.4999 13.4999 22.4999ZM14.9999 14.9999C14.9999 14.7032 15.0879 14.4132 15.2527 14.1665C15.4175 13.9198 15.6518 13.7276 15.9259 13.614C16.1999 13.5005 16.5015 13.4708 16.7925 13.5287C17.0835 13.5866 17.3508 13.7294 17.5605 13.9392C17.7703 14.149 17.9132 14.4162 17.9711 14.7072C18.0289 14.9982 17.9992 15.2998 17.8857 15.5739C17.7722 15.848 17.5799 16.0822 17.3332 16.2471C17.0866 16.4119 16.7966 16.4999 16.4999 16.4999C16.1021 16.4999 15.7205 16.3418 15.4392 16.0605C15.1579 15.7792 14.9999 15.3977 14.9999 14.9999Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_150_2257">
<rect width="36" height="36" fill="currentColor"/>
</clipPath>
</defs>
</svg>

              </span>
              <p>Seasonal &  Recreation</p>
            </div>
            <div className="stored-hover ">
              <span>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7665 19.626C13.788 17.7735 15.738 16.5 18 16.5C21.09 16.5 23.6115 18.8565 23.9355 21.861C23.5245 22.1505 22.8735 22.5 22.092 22.5C20.8335 22.5 19.35 21.6255 18.888 21.2895C18.6375 21.1065 16.3755 19.5 13.9095 19.5C13.503 19.5 13.1265 19.5525 12.7665 19.626ZM33 7.5V28.5C33 32.6355 29.6355 36 25.5 36H10.5C6.3645 36 3 32.6355 3 28.5V7.5C3 3.3645 6.3645 0 10.5 0H25.5C29.6355 0 33 3.3645 33 7.5ZM15 6.75C15 7.992 16.008 9 17.25 9C18.492 9 19.5 7.992 19.5 6.75C19.5 5.508 18.492 4.5 17.25 4.5C16.008 4.5 15 5.508 15 6.75ZM9.75 9C10.992 9 12 7.992 12 6.75C12 5.508 10.992 4.5 9.75 4.5C8.508 4.5 7.5 5.508 7.5 6.75C7.5 7.992 8.508 9 9.75 9ZM27 22.5C27 17.5365 22.9635 13.5 18 13.5C13.0365 13.5 9 17.5365 9 22.5C9 27.4635 13.0365 31.5 18 31.5C22.9635 31.5 27 27.4635 27 22.5ZM22.092 25.5C19.6245 25.5 17.364 23.8935 17.1135 23.7105C16.6515 23.3745 15.168 22.5 13.9095 22.5C13.128 22.5 12.4755 22.848 12.066 23.139C12.39 26.145 14.9115 28.5 18.0015 28.5C20.2635 28.5 22.2135 27.228 23.235 25.374C22.875 25.4475 22.4985 25.5 22.092 25.5Z" fill="currentColor"/>
</svg>

              </span>
              <p>Appliances & Electronics</p>
            </div>
            <div className="stored-hover ">
              <span>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_865_47)">
<path d="M7.50039 28.5H16.5004V31.5H10.5004C10.1026 31.5 9.72103 31.658 9.43973 31.9393C9.15842 32.2206 9.00039 32.6022 9.00039 33C9.00039 33.3978 9.15842 33.7794 9.43973 34.0607C9.72103 34.342 10.1026 34.5 10.5004 34.5H25.5004C25.8982 34.5 26.2797 34.342 26.561 34.0607C26.8424 33.7794 27.0004 33.3978 27.0004 33C27.0004 32.6022 26.8424 32.2206 26.561 31.9393C26.2797 31.658 25.8982 31.5 25.5004 31.5H19.5004V28.5H28.5004C30.2287 28.4978 31.9034 27.8999 33.2423 26.8069C34.5811 25.714 35.5022 24.1929 35.8504 22.5H0.150391C0.498535 24.1929 1.41966 25.714 2.75851 26.8069C4.09737 27.8999 5.77208 28.4978 7.50039 28.5Z" fill="currentColor"/>
<path d="M28.5 1.5H7.5C5.51161 1.50238 3.60534 2.29332 2.19933 3.69933C0.793323 5.10534 0.00238179 7.01161 0 9L0 19.5H36V9C35.9976 7.01161 35.2067 5.10534 33.8007 3.69933C32.3947 2.29332 30.4884 1.50238 28.5 1.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_865_47">
<rect width="36" height="36" fill="currentColor"/>
</clipPath>
</defs>
</svg>

              </span>
              <p>Office, School & Business</p>
            </div>
            <div className="stored-hover ">
              <span>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_150_2254)">
<path d="M32.8995 14.9295L32.0565 12.9537L30.5618 9.45C29.2785 6.44273 26.2178 4.5 22.7625 4.5H13.2375C9.783 4.5 6.7215 6.44273 5.43825 9.45L3.9435 12.9537L3.1005 14.9295C1.2915 15.5742 0 17.2027 0 19.125V22.5C0 23.6334 0.462 24.6565 1.2 25.4482V29.25C1.2 30.4924 2.27475 31.5 3.6 31.5H6C7.32525 31.5 8.4 30.4924 8.4 29.25V27H27.6V29.25C27.6 30.4924 28.6748 31.5 30 31.5H32.4C33.7253 31.5 34.8 30.4924 34.8 29.25V25.4482C35.538 24.6572 36 23.6341 36 22.5V19.125C36 17.2027 34.7085 15.5742 32.8995 14.9295ZM9.89475 11.1213C10.4415 9.84023 11.7653 9 13.2375 9H22.7625C24.2348 9 25.5585 9.84023 26.1053 11.1213L27.6 14.625H8.4L9.89475 11.1213ZM6 22.4859C4.56 22.4859 3.6 21.5887 3.6 20.243C3.6 18.8972 4.56 18 6 18C7.44 18 9.6 20.0187 9.6 21.3645C9.6 22.7102 7.44 22.4859 6 22.4859ZM30 22.4859C28.56 22.4859 26.4 22.7102 26.4 21.3645C26.4 20.0187 28.56 18 30 18C31.44 18 32.4 18.8972 32.4 20.243C32.4 21.5887 31.44 22.4859 30 22.4859Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_150_2254">
<rect width="36" height="36" fill="currentColor"/>
</clipPath>
</defs>
</svg>

              </span>
              <p>Vehicles</p>
            </div>
           
          </div>
        </div>
      </div>

         {/* --- */}
         <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
          What is the size of your space?
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Enter size</p>
              <div className=" flex items-center">
              <div className="input-with-icon relative w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="10ft"
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.262 22.134C11.262 22.134 4 16.018 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 16.018 12.738 22.134 12.738 22.134C12.334 22.506 11.669 22.502 11.262 22.134ZM12 13.5C12.4596 13.5 12.9148 13.4095 13.3394 13.2336C13.764 13.0577 14.1499 12.7999 14.4749 12.4749C14.7999 12.1499 15.0577 11.764 15.2336 11.3394C15.4095 10.9148 15.5 10.4596 15.5 10C15.5 9.54037 15.4095 9.08525 15.2336 8.66061C15.0577 8.23597 14.7999 7.85013 14.4749 7.52513C14.1499 7.20012 13.764 6.94231 13.3394 6.76642C12.9148 6.59053 12.4596 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10C8.5 10.9283 8.86875 11.8185 9.52513 12.4749C10.1815 13.1313 11.0717 13.5 12 13.5Z"
                      fill="#235370"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-[26px] font-semibold px-[20px]">X</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="10ft"
                />
                <span className=" absolute right-[16px] top-[20px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.262 22.134C11.262 22.134 4 16.018 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 16.018 12.738 22.134 12.738 22.134C12.334 22.506 11.669 22.502 11.262 22.134ZM12 13.5C12.4596 13.5 12.9148 13.4095 13.3394 13.2336C13.764 13.0577 14.1499 12.7999 14.4749 12.4749C14.7999 12.1499 15.0577 11.764 15.2336 11.3394C15.4095 10.9148 15.5 10.4596 15.5 10C15.5 9.54037 15.4095 9.08525 15.2336 8.66061C15.0577 8.23597 14.7999 7.85013 14.4749 7.52513C14.1499 7.20012 13.764 6.94231 13.3394 6.76642C12.9148 6.59053 12.4596 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10C8.5 10.9283 8.86875 11.8185 9.52513 12.4749C10.1815 13.1313 11.0717 13.5 12 13.5Z"
                      fill="#235370"
                    />
                  </svg>
                </span>
              </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>

       {/* --- */}
       <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
          What is the monthly price?
          </p>
        </div>
        <div className=" max-w-[400px] w-full max-md:max-w-full">
          <div className="mb-[16px]">
            <div className="w-full max-w-[100%]">
              <p className=" font-semibold mb-[6px]">Enter price</p>
              <div className="input-with-icon relative w-full max-w-[100%]">
                <input
                  className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer"
                  type="text"
                  placeholder="Enter price"
                />
                <span className=" absolute right-[16px] top-[20px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8333 2H6.16667C3.86917 2 2 3.86917 2 6.16667V17.8333C2 20.1308 3.86917 22 6.16667 22H17.8333C20.1308 22 22 20.1308 22 17.8333V6.16667C22 3.86917 20.1308 2 17.8333 2ZM12.8333 16.1667V17C12.8292 18.09 11.1708 18.0892 11.1667 17V16.1667H10.9433C10.0542 16.1667 9.22417 15.6883 8.77833 14.9175C8.5475 14.5183 8.68417 14.0092 9.08167 13.7792C9.48083 13.5467 9.99 13.685 10.22 14.0825C10.3692 14.3408 10.6458 14.5 10.9425 14.5H12.8325C13.6633 14.5542 14.035 13.2083 13.1292 13.0333L10.595 12.6108C7.67667 12.07 8.305 7.81667 11.1658 7.83333V7C11.1708 5.91 12.8283 5.91083 12.8325 7V7.83333H13.0558C13.945 7.83333 14.775 8.3125 15.2208 9.08333C15.4517 9.48167 15.315 9.99083 14.9175 10.2217C14.5175 10.4525 14.0083 10.3158 13.7792 9.9175C13.63 9.66 13.3533 9.50083 13.0567 9.50083H11.1667C10.3358 9.44667 9.965 10.7925 10.87 10.9675L13.4042 11.39C16.3225 11.9308 15.6942 16.1833 12.8333 16.1667Z" fill="#235370"/>
</svg>

                </span>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      <button className="btn-pri mt-[24px] ml-auto ">Next</button>
    </div>
  );
};

export default StepOne;
