import Image from 'next/image'
import React from 'react'

const VideoSectioin = () => {
  return (
    <div className='w-full px-10'>
        <Image src="/images/video_img.svg" width={100} height={800} className='w-full h-full md:h-[400px]'/>
    </div>
  )
}

export default VideoSectioin