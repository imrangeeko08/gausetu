import React from 'react'
import StoryBanner from './StoryBanner'
import StoryContent from './StoryContent'

const About = () => {
  return (
    <div className='w-full px-[10px] md:px-[40px] lg:px-[100px] xl:px-[140px] my-[40px]'>
        <StoryBanner/>
        <StoryContent/>
    </div>
  )
}

export default About