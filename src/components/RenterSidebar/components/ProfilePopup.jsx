import React from 'react'

const ProfilePopup = () => {
  return (
    // siderbar dropdown
    <div className="shadow rounded-[16px] border border-[#EEEEEE] absolute right-[-8px] bottom-[48px] bg-white z-[999]"> 
      <div className="p-[12px] w-max flex flex-col gap-[12px] max-md:gap-[8px]">
          <a className='profile-link !text-[16px] !gap-[8px]' href="">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M14.293 2.293C14.4805 2.10553 14.7348 2.00021 15 2.00021C15.2652 2.00021 15.5195 2.10553 15.707 2.293L19.707 6.293C19.8945 6.48053 19.9998 6.73484 19.9998 7C19.9998 7.26516 19.8945 7.51947 19.707 7.707L15.707 11.707C15.5184 11.8892 15.2658 11.99 15.0036 11.9877C14.7414 11.9854 14.4906 11.8802 14.3052 11.6948C14.1198 11.5094 14.0146 11.2586 14.0123 10.9964C14.01 10.7342 14.1108 10.4816 14.293 10.293L16.586 8H5C4.73478 8 4.48043 7.89464 4.29289 7.70711C4.10536 7.51957 4 7.26522 4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H16.586L14.293 3.707C14.1055 3.51947 14.0002 3.26516 14.0002 3C14.0002 2.73484 14.1055 2.48053 14.293 2.293ZM9.707 12.293C9.89447 12.4805 9.99979 12.7348 9.99979 13C9.99979 13.2652 9.89447 13.5195 9.707 13.707L7.414 16H19C19.2652 16 19.5196 16.1054 19.7071 16.2929C19.8946 16.4804 20 16.7348 20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H7.414L9.707 20.293C9.88916 20.4816 9.98995 20.7342 9.98767 20.9964C9.9854 21.2586 9.88023 21.5094 9.69482 21.6948C9.50941 21.8802 9.2586 21.9854 8.9964 21.9877C8.7342 21.99 8.4816 21.8892 8.293 21.707L4.293 17.707C4.10553 17.5195 4.00021 17.2652 4.00021 17C4.00021 16.7348 4.10553 16.4805 4.293 16.293L8.293 12.293C8.48053 12.1055 8.73484 12.0002 9 12.0002C9.26516 12.0002 9.51947 12.1055 9.707 12.293Z" fill="currentColor"/>
</svg>

              Switch to hosting</a>
          <a className='profile-link !text-[16px] !gap-[8px]' href="">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M11.95 18C12.3 18 12.596 17.879 12.838 17.637C13.08 17.395 13.2007 17.0993 13.2 16.75C13.1993 16.4007 13.0787 16.1047 12.838 15.862C12.5973 15.6193 12.3013 15.4987 11.95 15.5C11.5987 15.5013 11.303 15.6223 11.063 15.863C10.823 16.1037 10.702 16.3993 10.7 16.75C10.698 17.1007 10.819 17.3967 11.063 17.638C11.307 17.8793 11.6027 18 11.95 18ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12.1 7.7C12.5167 7.7 12.8793 7.83333 13.188 8.1C13.4967 8.36667 13.6507 8.7 13.65 9.1C13.65 9.46667 13.5377 9.79167 13.313 10.075C13.0883 10.3583 12.834 10.625 12.55 10.875C12.1667 11.2083 11.8293 11.575 11.538 11.975C11.2467 12.375 11.1007 12.825 11.1 13.325C11.1 13.5583 11.1877 13.7543 11.363 13.913C11.5383 14.0717 11.7423 14.1507 11.975 14.15C12.225 14.15 12.4377 14.0667 12.613 13.9C12.7883 13.7333 12.9007 13.525 12.95 13.275C13.0167 12.925 13.1667 12.6127 13.4 12.338C13.6333 12.0633 13.8833 11.8007 14.15 11.55C14.5333 11.1833 14.8627 10.7833 15.138 10.35C15.4133 9.91667 15.5507 9.43333 15.55 8.9C15.55 8.05 15.2043 7.35433 14.513 6.813C13.8217 6.27167 13.0173 6.00067 12.1 6C11.4667 6 10.8627 6.13333 10.288 6.4C9.71333 6.66667 9.27567 7.075 8.975 7.625C8.85834 7.825 8.821 8.03767 8.863 8.263C8.905 8.48833 9.01733 8.659 9.2 8.775C9.43333 8.90833 9.675 8.95 9.925 8.9C10.175 8.85 10.3833 8.70833 10.55 8.475C10.7333 8.225 10.9627 8.03333 11.238 7.9C11.5133 7.76667 11.8007 7.7 12.1 7.7Z" fill="currentColor"/>
</svg>

              Help</a>
          <a className='profile-link !text-[16px] !gap-[8px]' href="">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1246 12C16.1246 11.8011 16.0456 11.6103 15.9049 11.4697C15.7643 11.329 15.5735 11.25 15.3746 11.25H4.40158L6.36258 9.57C6.43743 9.50591 6.49893 9.42771 6.54356 9.33986C6.5882 9.25201 6.61509 9.15622 6.6227 9.05798C6.63031 8.95973 6.6185 8.86095 6.58794 8.76727C6.55738 8.67359 6.50867 8.58685 6.44458 8.512C6.3805 8.43714 6.3023 8.37565 6.21444 8.33101C6.12659 8.28638 6.03081 8.25949 5.93256 8.25188C5.83432 8.24426 5.73554 8.25607 5.64186 8.28664C5.54818 8.3172 5.46143 8.36591 5.38658 8.43L1.88658 11.43C1.80425 11.5004 1.73814 11.5878 1.69282 11.6862C1.64749 11.7846 1.62402 11.8917 1.62402 12C1.62402 12.1083 1.64749 12.2154 1.69282 12.3138C1.73814 12.4122 1.80425 12.4996 1.88658 12.57L5.38658 15.57C5.53775 15.6994 5.73415 15.7635 5.93256 15.7481C6.13098 15.7327 6.31516 15.6392 6.44458 15.488C6.57401 15.3368 6.63808 15.1404 6.6227 14.942C6.60732 14.7436 6.51375 14.5594 6.36258 14.43L4.40258 12.75H15.3746C15.5735 12.75 15.7643 12.671 15.9049 12.5303C16.0456 12.3897 16.1246 12.1989 16.1246 12Z" fill="currentColor"/>
<path d="M9.375 8C9.375 8.702 9.375 9.053 9.544 9.306C9.61679 9.41478 9.71022 9.50821 9.819 9.581C10.072 9.75 10.423 9.75 11.125 9.75H15.375C15.9717 9.75 16.544 9.98705 16.966 10.409C17.3879 10.831 17.625 11.4033 17.625 12C17.625 12.5967 17.3879 13.169 16.966 13.591C16.544 14.0129 15.9717 14.25 15.375 14.25H11.125C10.423 14.25 10.072 14.25 9.819 14.418C9.71012 14.4911 9.61668 14.5849 9.544 14.694C9.375 14.947 9.375 15.298 9.375 16C9.375 18.828 9.375 20.243 10.254 21.121C11.132 22 12.546 22 15.374 22H16.374C19.204 22 20.617 22 21.496 21.121C22.375 20.243 22.375 18.828 22.375 16V8C22.375 5.172 22.375 3.757 21.496 2.879C20.617 2.001 19.203 2 16.375 2H15.375C12.546 2 11.132 2 10.254 2.879C9.375 3.757 9.375 5.172 9.375 8Z" fill="currentColor"/>
</svg>

              Log-out</a>
          
      </div>
  
  </div>
  )
}

export default ProfilePopup
