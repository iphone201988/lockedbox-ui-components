import React from 'react'
import StartEndDate from './StartEndDate'
import '../style.css'
import PriceInfo from './PriceInfo'
import PaymentDetail from './PaymentDetail'

const PriceSummary = () => {
  return (
    <div className='p-[20px]'>
      <div className="">
            <StartEndDate/>
          </div>
      {/* <div className="pb-[20px]">
        <PriceInfo/>
      </div> */}
      <div className="">
        <PaymentDetail/>
      </div>
    </div>
  )
}

export default PriceSummary
