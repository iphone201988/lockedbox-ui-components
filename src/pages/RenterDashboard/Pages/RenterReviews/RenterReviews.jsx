import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import YourReviews from './components/YourReviews';
import BeginReviewListing from './components/BeginReviewListing';

const RenterReviews = () => {
  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      <Tabs className={" border-0"}>
        <TabList>
          <Tab>Review a host</Tab>
          <Tab>Your reviews</Tab>
        </TabList>

        <TabPanel>
            <div className=" flex gap-[16px] flex-col">
            <BeginReviewListing/>
            <BeginReviewListing/>
            </div>
        </TabPanel>
        <TabPanel>
            <div className=" flex gap-[16px] flex-wrap">
                <YourReviews/>
                <YourReviews/>
                <YourReviews/>
                <YourReviews/>
                <YourReviews/>
                <YourReviews/>
                <YourReviews/>
                <YourReviews/>
                <YourReviews/>
                <YourReviews/>
            </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default RenterReviews
