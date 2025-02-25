import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import HostFutureListing from './components/HostFutureListing';
import HostCurrentListing from './components/HostCurrentListing';
import HostDisputePopup from '../HostCheckIn/Popups/HostDisputePopup';
import HostDisputeListing from './components/HostDisputeListing';
import HostPastListing from './components/HostPastListing';

const HostBooking = () => {
  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
    <Tabs className={" border-0"}>
      <TabList>
        <Tab>Future</Tab>
        <Tab>Current</Tab>
        <Tab>Past</Tab>
        <Tab>Dispute</Tab>
      </TabList>

      <TabPanel>
       <div className=" flex flex-col gap-[16px]">
      <HostFutureListing/>
      <HostFutureListing/>
       </div>
      </TabPanel>
      <TabPanel>
       <div className=" flex flex-col gap-[16px]">
   <HostCurrentListing/>
   <HostCurrentListing/>
       </div>


      </TabPanel>
      <TabPanel>
      <div className=" flex flex-col gap-[16px]">
    <HostPastListing/>
    <HostPastListing/>
       </div>

      </TabPanel>
      <TabPanel>
      <div className=" flex flex-col gap-[16px]">
        <HostDisputeListing/>
      </div>
      </TabPanel>
    </Tabs>

{/* booking popus */}
<div className="">

    </div>
{/* <HostDisputePopup/> */}
  </div>
  )
}

export default HostBooking
