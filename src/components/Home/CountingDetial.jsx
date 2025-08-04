import Link from 'next/link';
import React from 'react';

const CountingDetail = ({ stats }) => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap gap-4 justify-between items-center p-6 bg-[#FBFBFB] mt-10">
      {stats.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="text-[#FF4F00] text-[32px] lg:text-[40px] font-semibold">
            {item.value}
          </div>
          <div className="text-lg lg:text-2xl font-semibold">{item.title}</div>
          <div className="text-[#52525B] lg:text-xl sm:text-base text-sm">{item.description}</div>
          <Link href={item.link} className="mt-4 text-sm sm:text-base text-[#FF4F00]">
            {item.linkText} →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CountingDetail;
