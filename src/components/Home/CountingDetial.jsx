import Link from 'next/link'
import React from 'react'

const CountingDetial = () => {
  return (
    <div className='flex lg:flex-nowrap flex-wrap gap-4 justify-between items-center p-6 bg-[#FBFBFB] mt-10'>
      <div className='flex flex-col gap-2 '>
        <div className='text-[#FF4F00] text-[32px] lg:text-[40px]  font-semibold'>125+</div>
        <div className='text-lg lg:text-xl font-semibold'>Cows in Our Care</div>
        <div className='text-[#52525B] lg:text-base text-sm'>Under daily love, care & nourishment in Shree Nath Gaushala.</div>
        <Link href='/donat' className='mt-4 text-[#FF4F00]'>Donate Cow → </Link>
      </div>

      <div className='flex flex-col gap-2 '>
        <div className='text-[#FF4F00] text-[32px] lg:text-[40px]  font-semibold'>₹8.5+ Lakhs</div>
        <div className='text-lg lg:text-xl font-semibold'>Total Donations</div>
        <div className='text-[#52525B] lg:text-base text-sm'>Transparent and heartfelt contributions from kind souls like you.</div>
        <Link href='/donat' className='mt-4 text-[#FF4F00]'>Donate More → </Link>
      </div>

      <div className='flex flex-col gap-2 '>
        <div className='text-[#FF4F00] text-[32px] lg:text-[40px]  font-semibold'>50+</div>
        <div className='text-lg lg:text-xl font-semibold'>Volunteer Sevas</div>
        <div className='text-[#52525B] lg:text-base text-sm'>Meaningful actions taken by volunteers to serve Gau Mata.</div>
        <Link href='/donat' className='mt-4 text-[#FF4F00]'>Become a Volunteer → </Link>
      </div>
    </div>
  )
}

export default CountingDetial