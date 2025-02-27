import React from 'react'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import AdminHeader from './components/AdminHeader'
import AdminHome from './AdminHome/AdminHome'

const AdminDashboard = () => {
  return (
    <div>
    <AdminSidebar/>

  <header className='fixed w-[calc(100%-220px)] left-[220px] top-0  z-[999] max-lg:left-0 max-lg:w-full'>
    <AdminHeader/>
  </header>

  <main className='ml-[220px] absolute top-[100px] w-[calc(100%-220px)] h-[calc(100vh-100px)] max-lg:ml-[0] max-lg:w-full max-lg:top-[94px]'>
   
<AdminHome/>
  </main>
</div>
  )
}

export default AdminDashboard
