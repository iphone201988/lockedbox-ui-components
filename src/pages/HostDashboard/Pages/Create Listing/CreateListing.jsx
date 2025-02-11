import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./style.css";

const CreateListing = () => {
  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
    <Tabs className={'step-form '}>
      <TabList>
        <Tab>
            <div className="step-button flex items-center gap-[12px]">
                <div className="step-number w-[56px] h-[56px] rounded-full text-white flex items-center justify-center text-[20px] !font-semibold">1</div>
                <div className="">
                    <p className='step-count !font-normal'>Step 1/3</p>
                    <p className=' font-semibold'>Basic Information</p>
                </div>
            </div>
        </Tab>
        <Tab>
        <div className="step-button flex items-center gap-[12px] border-l border-r border-[#EEEEEE]">
                <div className="step-number w-[56px] h-[56px] rounded-full text-white flex items-center justify-center text-[20px] !font-semibold">2</div>
                <div className="">
                    <p className='step-count !font-normal'>Step 2/3</p>
                    <p className=' font-semibold'>Description</p>
                </div>
            </div>
        </Tab>
        <Tab>
        <div className="step-button flex items-center gap-[12px]">
                <div className="step-number w-[56px] h-[56px] rounded-full text-white flex items-center justify-center text-[20px] !font-semibold">3</div>
                <div className="">
                    <p className='step-count !font-normal'>Step 3/3</p>
                    <p className=' font-semibold'>Verification</p>
                </div>
            </div>
        </Tab>
      </TabList>

      <TabPanel>
1
      </TabPanel>
      <TabPanel>
2
      </TabPanel>
      <TabPanel>

3
      </TabPanel>

    </Tabs>

{/* booking popus */}
<div className="">
{/* <DisputePopup/> */}
    </div>

  </div>
  )
}

export default CreateListing
