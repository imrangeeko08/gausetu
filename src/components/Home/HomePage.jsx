import React from 'react'
import HeroSection from './HeroSection'
import VideoSectioin from './VideoSectioin'
import CountingDetial from './CountingDetial'

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
    </div>
  )
}

export default HomePage