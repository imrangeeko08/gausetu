import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-white border border-gray-200 shadow-md py-4 text-center w-full flex justify-between px-[60px] items-center'>
            <div className='flex flex-col items-start justify-start'>
                <div className='text-[32px] text-[#FF4F00] font-semibold'>Gausetu</div>
                <div>By Shreenath Gaushala</div>
            </div>
            <ul className='flex gap-6 font-[500] items-center justify-between'>
                <li>
                  <Link href={'/'}>Home</Link>  
                </li>
                <li>
                  <Link href={'/about'}> About Us</Link> 
                </li>
                <li>
                 <Link href={'/events'}>Events</Link>   
                </li>
                <li>
                  <Link href={'/support'}>Support the Cows</Link>  
                </li>
                <li>
                 <Link href={'/contact'}>Contact with us</Link>   
                </li>

            </ul>
            <div className=''>
                <button className='text-white bg-[#FF4F00] p-2 rounded-full'>Download</button>
            </div>
        </div>
    )
}

export default Header