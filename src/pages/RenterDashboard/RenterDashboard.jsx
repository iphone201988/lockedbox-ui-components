import React from 'react'
import RenterSidebar from '../../components/RenterSidebar/RenterSidebar'
import HeaderBar from './components/HeaderBar'
import RenterAccount from './Pages/RenterAccount/RenterAccount'

const RenterDashboard = () => {
  return (
    <div>
        <RenterSidebar/>

      <header className='fixed left-[220px] top-0 w-full z-[999]'>
        <HeaderBar/>
      </header>

      <main className='ml-[220px] absolute top-[100px] w-[calc(100%-220px)] h-[calc(100vh-100px)]'>
        <RenterAccount/>
      </main>
    </div>
  )
}

export default RenterDashboard
