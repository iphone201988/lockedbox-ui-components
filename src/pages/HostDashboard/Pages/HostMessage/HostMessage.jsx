import React from 'react'
import HostMessageInbox from './components/HostMessageInbox'
import HostMessageArea from './components/HostMessageArea'

const HostMessage = () => {
  return (
    <div className='h-full flex max-md:flex-col'>
      <div className="px-[30px] py-[24px] max-w-[310px] min-w-[310px] border-r border-[#EEEEEE] h-full max-lg:px-[20px] max-md:max-w-full max-md:overflow-auto max-md:border-b">
        <HostMessageInbox/>
      </div>
      <div className="w-full max-md:min-h-[500px] ">
        <HostMessageArea/>
      </div>
    </div>
  )
}

export default HostMessage
