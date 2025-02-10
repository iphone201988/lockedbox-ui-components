import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FutureListing from './components/FutureListing';
import NoBooking from './components/NoBooking';
import CurrentListing from './components/CurrentListing';
import PastListings from './components/PastListings';
import DisputeListing from './components/DisputeListing';
import DisputePopup from './components/Popups/DisputePopup';

const RenterBooking = () => {
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
         <FutureListing/>
         <FutureListing/>
         </div>
        </TabPanel>
        <TabPanel>
            {/* if no booking */}
         <NoBooking/>

         {/* if booking */}
         <div className=" flex flex-col gap-[16px]">
         <CurrentListing/>
         <CurrentListing/>
         <CurrentListing/>
         </div>


        </TabPanel>
        <TabPanel>
        <div className=" flex flex-col gap-[16px]">
        <PastListings/>
        <PastListings/>
        <PastListings/>
         </div>
 
        </TabPanel>
        <TabPanel>
        <div className=" flex flex-col gap-[16px]">
            <DisputeListing/>
            <DisputeListing/>
            <DisputeListing/>
        </div>
        </TabPanel>
      </Tabs>

 {/* booking popus */}
 <div className="">
  {/* <DisputePopup/> */}
      </div>

    </div>
  )
}

export default RenterBooking
