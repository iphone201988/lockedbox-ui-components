import React from 'react'
import Logo from "../../assets/logo.png";
import HostProfilePic from "../../assets/host-profile-pic.png";
import AdminProfilePopup from './components/AdminProfilePopup';

const AdminSidebar = () => {
  return (
    <div className=" h-[100vh] max-lg:hidden">
      <div className="flex flex-col border-r border-[#EEEEEE] fixed left-0 top-0 bg-white z-[999] py-[32px] px-[16px] h-full w-[250px] min-w-[220px] max-w-[220px]">
        <a className="mb-[45px] block " href="">
          <img className="max-w-[158px] mx-auto" src={Logo} alt="" />
        </a>
        <div className="side-bar flex flex-col gap-[6px] w-full">
          <a className="profile-link active" href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99961 19V14H13.9996V19C13.9996 19.55 14.4496 20 14.9996 20H17.9996C18.5496 20 18.9996 19.55 18.9996 19V12H20.6996C21.1596 12 21.3796 11.43 21.0296 11.13L12.6696 3.6C12.2896 3.26 11.7096 3.26 11.3296 3.6L2.96961 11.13C2.62961 11.43 2.83961 12 3.29961 12H4.99961V19C4.99961 19.55 5.44961 20 5.99961 20H8.99961C9.54961 20 9.99961 19.55 9.99961 19Z"
                fill=""
              />
            </svg>
            Home
          </a>
         
        </div>
        {/* profile pic */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-[10px]">
            <img
              className="w-[48px] h-[48px] object-cover"
              src={HostProfilePic}
              alt=""
            />
            <h5 className="text-[20px] font-semibold">Frank</h5>
          </div>
          <div className="flex">
            <button className=" cursor-pointer relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="#1E1E1E"
                />
              </svg>
              <AdminProfilePopup/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
