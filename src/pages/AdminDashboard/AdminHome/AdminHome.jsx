import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import IfNoUserSelected from "./components/IfNoUserSelected";
import UserAccountDetails from "./components/UserAccountDetails";
import ListingManagement from "./components/ListingManagement";
import BookingsAndPayments from "./components/BookingsAndPayments";
import DisputeResolution from "./components/DisputeResolution";
import CheckInPhotos from "./components/CheckInPhotos";
import RefundAmountPopup from "./components/RefundAmountPopup";

const AdminHome = () => {
  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      <Tabs className={" border-0"}>
        <TabList>
          <Tab>Account</Tab>
          <Tab>Listing Management</Tab>
          <Tab>Bookings & Payments</Tab>
          <Tab>Dispute Resolution</Tab>
          <Tab>Check In Photos</Tab>
        </TabList>

        <TabPanel>
          {/* <IfNoUserSelected/> */}
          <UserAccountDetails />
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col gap-[16px]">
            <ListingManagement />
            <ListingManagement />
            <ListingManagement />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col gap-[16px]">
            <BookingsAndPayments />
            <BookingsAndPayments />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col gap-[16px]">
            <DisputeResolution />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col gap-[16px]">
            <CheckInPhotos />
          </div>
        </TabPanel>
      </Tabs>

      
 {/* admin popus */}
 <div className="">
  {/* <RefundAmountPopup/> */}
      </div>
    </div>
  );
};

export default AdminHome;
