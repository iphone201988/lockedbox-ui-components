import React from 'react'
import HeaderBar from '../RenterDashboard/components/HeaderBar'
import HostSidebar from '../../components/HostSidebar/HostSidebar'
import RenterSidebar from '../../components/RenterSidebar/RenterSidebar'
import HostHeader from './components/HostHeader'
import HostHome from './Pages/HostHome/HostHome'
import HostListings from './Pages/HostListings/HostListings'
import CreateListing from './Pages/Create Listing/CreateListing'
import HostCheckIn from './Pages/HostCheckIn/HostCheckIn'
import HostBooking from './Pages/HostBooking/HostBooking'
import HostMessage from './Pages/HostMessage/HostMessage'
import PerformanceAndReviews from './Pages/PerformanceAndReviews/PerformanceAndReviews'


const HostDashboard = () => {
  return (
    <div>
    <HostSidebar/>

  <header className='fixed left-[220px] top-0 w-full z-[999] max-lg:left-0'>
    <HostHeader/>
  </header>

  <main className='ml-[220px] absolute top-[100px] w-[calc(100%-220px)] h-[calc(100vh-100px)] max-lg:ml-[0] max-lg:w-full max-lg:top-[94px]'>
    {/* <HostHome/> */}
    {/* <HostListings/> */}
    <CreateListing/>
    {/* <HostBooking/> */}
    {/* <HostCheckIn/> */}
    {/* <HostMessage/> */}
    {/* <PerformanceAndReviews/> */}

  </main>
</div>
  )
}

export default HostDashboard
