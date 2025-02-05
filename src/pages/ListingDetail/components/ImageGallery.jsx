import React from 'react'
import GallImg1 from '../../../assets/gall-img-1.png'
import GallImg2 from '../../../assets/gall-img-2.png'
import GallImg3 from '../../../assets/gall-img-3.png'

const ImageGallery = () => {
  return (
    <div className='flex min-h-[480px] max-md:min-h-[320px]'>
      <div className="w-[50%] max-md:w-full">
        <img className='rounded-l-[16px] w-full h-full object-cover max-md:rounded-[16px]' src={GallImg1} alt="" />
      </div>
      <div className="w-[25%] mx-[12px] flex flex-col gap-[12px] max-lg:hidden">
        <img className='w-full h-full object-cover' src={GallImg2} alt="" />
        <img className='w-full h-full object-cover' src={GallImg3} alt="" />
      </div>
      <div className="w-[25%] flex flex-col gap-[12px] max-lg:w-[50%] max-lg:ml-[12px] max-md:hidden">
        <img className='w-full h-full rounded-tr-[16px] object-cover' src={GallImg1} alt="" />
        <img className='w-full h-full rounded-br-[16px] object-cover' src={GallImg2} alt="" />
      </div>
    </div>
  )
}

export default ImageGallery
