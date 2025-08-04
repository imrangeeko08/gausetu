import React from 'react'

const cowImages = [
  '/images/cow_img1.svg',
  '/images/cow_img2.svg',
  '/images/cow_img3.svg',
  '/images/cow_img4.svg',
  '/images/cow_img1.svg',
  '/images/cow_img2.svg',
  '/images/cow_img3.svg',
]

const CowGallery = () => {
  return (
    <div className="space-y-10 py-10 ">
      {/* Left to Right */}
      <div className="overflow-hidden no-scrollbar">
        <div className="flex animate-scroll-left gap-4 px-6 w-max">
          {cowImages.map((src, index) => (
            <img
              key={`left-${index}`}
              src={src}
              alt={`cow-${index}`}
              className="w-64 h-64 object-cover rounded-md flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Right to Left */}
      <div className="overflow-hidden no-scrollbar">
        <div className="flex animate-scroll-right gap-4 px-6 w-max">
          {cowImages.map((src, index) => (
            <img
              key={`right-${index}`}
              src={src}
              alt={`cow-${index}`}
              className="w-64 h-64 object-cover rounded-md flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CowGallery
