import React from 'react'
import RenterSidebar from '../../components/RenterSidebar/RenterSidebar'
import HeaderBar from './components/HeaderBar'
import RenterAccount from './Pages/RenterAccount/RenterAccount'
import RenterHome from './Pages/RenterHome/RenterHome'
import RenterBooking from './Pages/RenterBooking/RenterBooking'
import RenterMessage from './Pages/RenterMessage/RenterMessage'
import RenterReviews from './Pages/RenterReviews/RenterReviews'
import ReviewYourHost from './Pages/RenterReviews/ReviewYourHost'
import RenterCheckIn from './Pages/RenterCheckIn/RenterCheckIn'

const RenterDashboard = () => {
  return (
    <div>
        <RenterSidebar/>


      <header className='fixed left-[220px] top-0 w-full z-[999] max-lg:left-0'>
        <HeaderBar/>
      </header>

      <main className='ml-[220px] absolute top-[100px] w-[calc(100%-220px)] h-[calc(100vh-100px)] max-lg:ml-[0] max-lg:w-full max-lg:top-[94px]'>
        {/* <RenterHome/> */}
        <RenterAccount/>
        {/* <RenterBooking/> */}
        {/* <RenterCheckIn/> */}
        {/* <RenterMessage/> */}

        {/* <RenterReviews/> */}
        {/* <ReviewYourHost/> */}
      </main>
    </div>
  )
}

export default RenterDashboard
