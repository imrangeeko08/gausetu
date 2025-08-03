import Image from 'next/image'
import React from 'react'

const values = [
  {
    icon: <Image src="/images/cow_icon.svg" width={100} height={100} className="text-[#FF4F00] w-[40px] h-[40px]" alt="icon"/>,
    title: 'To Protect and Nurture Gau Mata',
    description: 'We provide a safe, loving home to abandoned and aging cows.',
  },
  {
  icon: <Image src="/images/heart_icon.svg" width={100} height={100} className="text-[#FF4F00] w-[40px] h-[40px]" alt="icon"/>,
    title: 'To Serve with Compassion',
    description: 'Every act of care is seva — feeding, healing, and loving cows.',
  },
  {
  icon: <Image src="/images/oam_icon.svg" width={100} height={100} className="text-[#FF4F00] w-[40px] h-[40px]" alt="icon"/>,
    title: 'To Uphold Dharmic Values',
    description: 'Rooted in Sanatan Dharma, we believe cows deserve respect.',
  },
  {
    icon: <Image src="/images/book_icon.svg" width={100} height={100} className="text-[#FF4F00] w-[40px] h-[40px]" alt="icon"/>,
    title: 'To Educate and Inspire',
    description: 'Educating the youth about the importance of GauSeva.',
  },
]

const WhyWeExist = () => {
  return (
    <section className="py-16  bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Exist</h2>
      <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-10">
        In times where convenience trumps care, GauSetu stands as a reminder of our roots — of
        dharma, nature, and responsibility. We are committed to:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {values.map((item, idx) => (
          <div
            key={idx}
            className="border-2 border-dashed  border-gray-300 p-4 rounded-md hover:shadow-md transition"
          >
            <div className="mb-4 w-full   flex justify-start">{item.icon}</div>
            <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyWeExist
