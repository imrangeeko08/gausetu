import React from 'react'
import StoryBanner from './StoryBanner'
import StoryContent from './StoryContent'
import CowGallery from '../Home/CowGallery'
import CountingDetail from '../Home/CountingDetial'
import Banner from '../Banner'
import ArchivesSection from './ArchivesSection'

const About = () => {

    const statsData = [
        {
            value: '01.',
            title: 'Experience Sacred Stillness',
            description: 'Step into a space where nature, cows, and tradition exist in harmony — a break from the noise, a return to simplicity.',
            link: '/donate',
            linkText: 'Donate Cow',
        },
        {
            value: '02.',
            title: 'Witness Living Legacy',
            description: 'Every corner of Shree Nath Gaushala reflects over 90 years of spiritual, cultural, and ancestral devotion.',
            link: '/donate',
            linkText: 'Donate More',
        },
        {
            value: '03.',
            title: 'Connect with a Purpose',
            description: 'Meet the cows, the caretakers, and the community behind it. Walk away not as a visitor — but as part of a larger family.',
            link: '/donate',
            linkText: 'Become a Volunteer',
        },
    ];
    return (
        <div className='w-full  my-[40px]'>
            <StoryBanner />
            <StoryContent />
            <CowGallery />
            <div className='px-[10px] md:px-[40px] lg:px-[100px] xl:px-[140px] my-4 sm:my-[40px]'>
                <h2 className="text-xl sm:text-3xl md:text-4xl w-full text-center font-bold mb-4">Why Visit Us?</h2>
                <CountingDetail stats={statsData} />
            </div>
            <div className='px-[10px] md:px-[40px] lg:px-[100px] xl:px-[140px] my-4 sm:my-[40px]'>
                <Banner
                    title="Join Us in Keeping This Legacy Alive"
                    description="This isn’t just about cows. It’s about connection. About dharma. About choosing compassion in a world that needs more of it. Whether you choose to visit, volunteer, or simply support from afar, know this — every little gesture keeps our shared legacy breathing."
                    image="/images/banner_img.svg"
                    btn1={{ label: "Join Us @GauSetu", href: "#" }}
                    btn2={{ label: "Donate Now", href: "#" }}
                />

            </div>
            <div className='px-[10px] md:px-[40px] lg:px-[100px] xl:px-[140px] my-4 sm:my-[40px]'>
                <ArchivesSection />

            </div>
        </div>
    )
}

export default About