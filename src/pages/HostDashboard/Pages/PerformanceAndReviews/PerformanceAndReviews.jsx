import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import HostPerformance from "./components/HostPerformance";
import HostReviews from "./components/HostReviews";

const PerformanceAndReviews = () => {
  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      <Tabs className={" border-0"}>
        <TabList>
          <Tab>Performance</Tab>
          <Tab>Reviews</Tab>
        </TabList>

        <TabPanel>
          <HostPerformance />
        </TabPanel>
        <TabPanel>
          <HostReviews />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PerformanceAndReviews;
