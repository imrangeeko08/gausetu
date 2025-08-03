import React from 'react'
import HeroSection from './HeroSection'
import VideoSectioin from './VideoSectioin'
import CountingDetial from './CountingDetial'
import WhyWeExist from './WhyWeExist'
import CowGallery from './CowGallery'
import DevotionLegacy from '../DevotionLegacy'
import TestimonialCarousel from './TestimonialCarousel'
import Banner from '../Banner'

const HomePage = () => {
  return (
    <div className='min-h-screen '>
      <HeroSection/>

      <div className='flex flex-col gap-4 items-center justify-center my-6 px-6'>
        <h2 className='text-[24px] font-semibold'>
          Rooted in Faith. Grown with Love.
        </h2>
        <div className='w-full md:w-[640px] text-[#696969]'>
          <p>
            GauSetu is an initiative by the Vyas Family under Shree Nath Gaushala Samiti. What began as a small effort to serve abandoned and sacred cows has now grown into a home for 100+ gaumata, cared for daily through seva, donations, and blessings.
          </p>
          <p className='mt-4'>
Every cow has a name. Every act has meaning. And every person who visits becomes a part of our growing GauParivar.
          </p>
        </div>
      </div>

<VideoSectioin/>
<div className='lg:px-[140px] px-10'><CountingDetial/></div> 
<div className='lg:px-[100px] px-10'><WhyWeExist/></div> 
<div className='lg:px-[100px] px-10'><CowGallery/></div> 
<div className='lg:px-[140px] px-10'><DevotionLegacy/></div> 
<div className=''><TestimonialCarousel/></div> 
<div className='lg:px-[80px] px-10'><Banner/></div> 
    </div>
    
  )
}

export default HomePage