import React from 'react'
import DonationForm from './DonationForm'
import CountingDetail from '../Home/CountingDetial'
import TestimonialCarousel from '../Home/TestimonialCarousel';
import Banner from '../Banner';

const Donate = () => {
    const statsData = [
        {
            value: '1500+',
            title: 'Donors',
            description: 'Hearts that chose compassion over convenience.',
            link: '/donate',
            linkText: 'Donate Cow',
        },
        {
            value: '₹8.5+ Lakhs',
            title: 'Total Donations',
            description: 'Transparent and heartfelt contributions from kind souls like you.',
            link: '/donate',
            linkText: 'Donate More',
        },
        {
            value: 'Your ₹501',
            title: 'Volunteer Sevas',
            description: 'Can provide medical care to the sick/injured and feed one cow for a full day.',
            link: '/donate',
            linkText: 'Become a Volunteer',
        },
    ];
    return (
        <div className=' my-6 sm:my-[40px]'>
            <div className='lg:px-[140px] px-4 sm:px-10'>
                <DonationForm />
            </div>
            <div className='lg:px-[140px] px-4 sm:px-10 my-10'><CountingDetail stats={statsData} /></div>
            <div className='my-[40px]'><TestimonialCarousel /></div>
            <div className='lg:px-[140px] px-4 sm:px-10 my-10'> <Banner /></div>

        </div>
    )
}

export default Donate