import React from 'react'
import LocMapImg from '../../../assets/location-map.png'

const LocationMap = () => {
  return (
    <div>
      <div className="rounded-[32px] py-[16px]">
        <img className='rounded-[32px] max-lg:w-full' src={LocMapImg} alt="" />
      </div>
    </div>
  )
}

export default LocationMap
