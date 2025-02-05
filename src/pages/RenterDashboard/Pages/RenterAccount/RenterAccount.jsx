import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const RenterAccount = () => {
  return (
    <div className='px-[30px] py-[32px]'>
       <Tabs className={' border-0'}>
    <TabList>
      <Tab>Basic info</Tab>
      <Tab>Profile</Tab>
      <Tab>Account Security</Tab>
      <Tab>Notification</Tab>
      <Tab>Payment</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 5</h2>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default RenterAccount
