import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BasicInfo from "./components/BasicInfo";
import AccountProfile from "./components/AccountProfile";
import AccountSecurity from "./components/AccountSecurity";
import AccountNotification from "./components/AccountNotification";
import AccountPayment from "./components/AccountPayment";

const RenterAccount = () => {
  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      <Tabs className={" border-0"}>
        <TabList>
          <Tab>Basic info</Tab>
          <Tab>Profile</Tab>
          <Tab>Account Security</Tab>
          <Tab>Notification</Tab>
          <Tab>Payment</Tab>
        </TabList>

        <TabPanel>
          <BasicInfo />
        </TabPanel>
        <TabPanel>
          <AccountProfile />
        </TabPanel>
        <TabPanel>
          <AccountSecurity/>
        </TabPanel>
        <TabPanel>
          <AccountNotification/>
        </TabPanel>
        <TabPanel>
          <AccountPayment/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RenterAccount;
