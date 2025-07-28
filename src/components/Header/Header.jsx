import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
    const router = useRouter();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Support the Cows', path: '/support' },
        { name: 'Contact with us', path: '/contact' },
    ];

    return (
        <div className='bg-white border border-gray-200 shadow-md py-4 text-center w-full flex justify-between px-[60px] items-center'>
            <div className='flex flex-col items-start justify-start'>
                <div className='text-[32px] text-[#FF4F00] font-semibold'>Gausetu</div>
                <div>By Shreenath Gaushala</div>
            </div>
            <ul className='flex gap-6 font-[500] items-center justify-between'>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.path}
                            className={`transition-colors duration-200 hover:text-[#FF4F00] ${
                                router.pathname === item.path ? 'text-[#FF4F00]' : 'text-black'
                            }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div>
                <button className='text-white bg-[#FF4F00] p-2 rounded-full'>Download</button>
            </div>
        </div>
    )
}

export default Header
