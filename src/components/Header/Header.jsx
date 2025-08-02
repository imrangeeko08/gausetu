// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import React from 'react'

// const Header = () => {
//   const router = useRouter()

//   const isHome = router.pathname === '/'

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Events', path: '/events' },
//     { name: 'Support the Cows', path: '/support' },
//     { name: 'Contact with us', path: '/contact' },
//   ]

//   return (
//     <div
//       className={`w-full py-4 px-[60px] flex justify-between items-center text-center fixed top-0 z-50 ${
//         isHome
//           ? 'bg-transparent text-white'
//           : 'bg-white text-black shadow-md border border-gray-200'
//       } transition-all duration-300`}
//     >
//       <div className='flex flex-col items-start justify-start'>
//         <div className='text-[32px] font-semibold' style={{ color: '#FF4F00' }}>
//           Gausetu
//         </div>
//         <div className={`${isHome ? 'text-white' : 'text-black'}`}>
//           By Shreenath Gaushala
//         </div>
//       </div>

//       <ul className='flex gap-6 font-[500] items-center justify-between'>
//         {navItems.map((item, index) => (
//           <li key={index}>
//             <Link
//               href={item.path}
//               className={`transition-colors duration-200 hover:text-[#FF4F00] ${
//                 router.pathname === item.path
//                   ? 'text-[#FF4F00]'
//                   : isHome
//                   ? 'text-white'
//                   : 'text-black'
//               }`}
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div>
//         <button
//           className={`p-2 rounded-full ${
//             isHome
//               ? 'text-white border border-white bg-transparent hover:bg-white hover:text-[#FF4F00]'
//               : 'text-white bg-[#FF4F00]'
//           } transition`}
//         >
//           Donate Now
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Header


import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Support the Cows', path: '/support' },
    { name: 'Contact with us', path: '/contact' },
  ]

  const bgClass =
    isHome && !isScrolled
      ? 'bg-transparent text-white'
      : 'bg-white text-black shadow-md'

  return (
    <div
      className={`w-full py-4 px-[60px] flex justify-between items-center text-center fixed top-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className='flex flex-col items-start justify-start'>
        <div className='text-[32px] font-semibold' style={{ color: '#FF4F00' }}>
          Gausetu
        </div>
        <div className={`${isHome && !isScrolled ? 'text-white' : 'text-black'}`}>
          By Shreenath Gaushala
        </div>
      </div>

      <ul className='flex gap-6 font-[500] items-center justify-between'>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={`transition-colors duration-200 hover:text-[#FF4F00] ${
                router.pathname === item.path
                  ? 'text-[#FF4F00]'
                  : isHome && !isScrolled
                  ? 'text-white'
                  : 'text-black'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <button
          className={`px-[50px] py-[16px] cursor-pointer font-semibold rounded-full transition ${
            isHome && !isScrolled
              ? 'text-white bg-[#FF4F00] hover:bg-white hover:text-[#FF4F00]'
              : 'text-white bg-[#FF4F00]'
          }`}
        >
          Donate Now
        </button>
      </div>
    </div>
  )
}

export default Header
