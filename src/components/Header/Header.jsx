import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
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
    isHome
      ? `  fixed ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'} `
      : 'bg-transparent text-black'

  return (
    <div
      className={`w-full py-3 px-4 md:px-[30px] xl:px-[60px] flex justify-between items-center  top-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      {/* Logo */}
      <div className='flex flex-col items-start'>
        <div className='text-[24px] xl:text-[32px] font-semibold text-[#FF4F00]' >
          Gausetu
        </div>
        <div className={` text-sm md:text-base`}>
          By Shreenath Gaushala
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden lg:flex gap-[32px] xl:gap-[40px] font-[500] items-center text-base xl:text-[24px]'>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={`transition-colors duration-200 hover:text-[#FF4F00] ${router.pathname === item.path
                ? 'text-[#FF4F00]'
                : isHome ? `${isScrolled?'text-black':'text-white'}`
                  : 'text-black'
                }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Donate Button */}
      <div className='hidden lg:block'>
        <button
          className={`px-6 text-xm xl:text-base py-2 cursor-pointer font-semibold rounded-full transition ${isHome && !isScrolled
            ? 'text-white bg-[#FF4F00] hover:bg-white hover:text-[#FF4F00]'
            : 'text-white bg-[#FF4F00]'
            }`}
        >
          Donate Now
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className='lg:hidden text-2xl z-50'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Button */}
        <div className='flex text-black justify-end p-4'>
          <button onClick={() => setIsMenuOpen(false)} className='text-2xl'>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className='flex flex-col items-start gap-4 p-6 text-lg font-semibold'>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-colors duration-200 hover:text-[#FF4F00] ${router.pathname === item.path ? 'text-[#FF4F00]' : 'text-black'
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className='px-6 mt-4'>
          <button
            onClick={() => setIsMenuOpen(false)}
            className='w-full py-3 bg-[#FF4F00] text-white rounded-full hover:bg-orange-500 transition'
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className='fixed top-0 left-0 w-full h-full  bg-opacity-40 z-40'
        ></div>
      )}
    </div>
  )
}

export default Header
