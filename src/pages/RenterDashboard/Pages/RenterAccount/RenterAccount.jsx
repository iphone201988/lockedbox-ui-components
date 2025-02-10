import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BasicInfo from "./components/BasicInfo";
import AccountProfile from "./components/AccountProfile";
import AccountSecurity from "./components/AccountSecurity";
import AccountNotification from "./components/AccountNotification";
import AccountPayment from "./components/AccountPayment";
import VerifyPopup from "./components/Popups/VerifyPopup";
import VerificationCodePopup from "./components/Popups/VerificationCodePopup";
import AddPaymentPopup from "./components/Popups/AddPaymentPopup";

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

      {/* account popus */}
      <div className="">
        {/* <VerifyPopup/> */}
        {/* <VerificationCodePopup/> */}
        <AddPaymentPopup/>
      </div>
    </div>
  );
};

export default RenterAccount;
