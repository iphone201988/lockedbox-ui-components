import React from 'react'
import RenterSidebar from '../../components/RenterSidebar/RenterSidebar'
import HeaderBar from './components/HeaderBar'
import RenterAccount from './Pages/RenterAccount/RenterAccount'

const RenterDashboard = () => {
  return (
    <div>
        <RenterSidebar/>

      <header className='fixed left-[220px] top-0 w-full z-[999] max-lg:left-0'>
        <HeaderBar/>
      </header>

      <main className='ml-[220px] absolute top-[100px] w-[calc(100%-220px)] h-[calc(100vh-100px)] max-lg:ml-[0] max-lg:w-full max-lg:top-[94px]'>
        <RenterAccount/>
      </main>
    </div>
  )
}

export default RenterDashboard
