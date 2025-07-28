import React from 'react'

const Header = () => {
    return (
        <div className='bg-white border border-gray-200 shadow-md py-4 text-center w-full flex justify-between px-[60px] items-center'>
            <div className='flex flex-col items-start justify-start'>
                <div className='text-[32px] text-[#FF4F00] font-semibold'>Gausetu</div>
                <div>By Shreenath Gaushala</div>
            </div>
            <div className=''>
                <ul className='flex gap-2 items-center justify-between'>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Events
                    </li>
                    <li>
                        Support the Cows
                    </li>
                    <li>
                        Contact with us
                    </li>

                </ul>
            </div>
            <div className=''>
                <button className='text-white bg-[#FF4F00] p-2 rounded-full'>Download</button>
            </div>
        </div>
    )
}

export default Header