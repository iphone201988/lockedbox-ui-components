import React from 'react'
import ImageGallery from './components/ImageGallery'
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar'
import ListingInfoDetails from './components/ListingInfoDetails'
import PoliciesInfo from './components/PoliciesInfo'
import LocationMap from './components/LocationMap'
import ListingReviews from './components/ListingReviews'
import DatePicker from './components/DatePicker'

const ListingDetail = () => {
  return (
    <div className="">
        <ProfileNavbar/>
    <div className='max-w-[1120px] mx-auto pt-[24px] max-mlg:px-[20px]'>
      <ImageGallery/>
      <div className=" flex justify-between gap-[20px] max-lg:flex-col">
        <div className="max-w-[700px] max-lg:max-w-[100%]">
        <ListingInfoDetails/>
        </div>
        <div className="py-[16px] w-full max-w-[370px]">
      <DatePicker/>
        </div>
      </div>
      <div className="flex justify-between gap-[20px]  max-lg:flex-col-reverse">
        <div className="max-w-[520px] ">
    <PoliciesInfo/>
    <ListingReviews/>
        </div>
        <div className="for-map">
          <LocationMap/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ListingDetail
