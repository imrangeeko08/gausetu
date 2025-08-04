'use client';
import React from 'react';

const EventHeroSection = () => {
  return (
    <div className="w-full bg-white px-6 py-16 md:px-20 lg:flex lg:items-center flex gap-12">
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[80px] font-extrabold  mb-4 text-black">
          Every Moment is an <span className="text-[#FF4F00]">Offering</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-[32px] text-[#000000]">
          From soulful gatherings and devotional seva to special celebrations in the name of Gau Mata — every event at GauSetu is a reflection of love, faith, and togetherness.
        </p>
        <p className="text-lg lg:text-[32px] text-[#000000]">
          If you'd like to be a part of our story, or host your own sacred moment, just reach out — we’re here to co-create it with you.
        </p>
      </div>

      <form className="w-1/2 h-[800px] mt-12 lg:mt-0  bg-gray-50 rounded-xl p-8 space-y-4 shadow-md">
        <h3 className="text-lg md:text-xl lg:text-[32px] font-semibold text-black">Plan Your Event with Us</h3>

        <div className='mt-[40px]'>
          <label className="text-sm sm:text-base lg:text-[20px] font-semibold text-black mb-4">Your Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Full Name Here"
            className="mt-1 w-full border border-gray-300 rounded-[10px] p-3 focus:outline-none focus:ring-2 focus:ring-[#FF4F00]"
          />
        </div>

        <div  className='mt-[40px]'>
          <label className="text-sm sm:text-base lg:text-[20px]  font-semibold text-black mb-4">Your Mobile No.</label>
          <input
            type="text"
            placeholder="Enter Your WhatsApp Mobile Number Here"
            className="mt-1 w-full border border-gray-300 rounded-[10px] p-3 focus:outline-none focus:ring-2 focus:ring-[#FF4F00]"
          />
        </div>

        <div  className='mt-[40px]'>
          <label className="text-sm sm:text-base lg:text-[20px] font-semibold text-black mb-4">About Your Seva</label>
          <textarea
            rows="4"
            placeholder="Short description of the seva or event idea"
            className="mt-1 h-[200px]  w-full border border-gray-300 rounded-[10px] p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-base md:text-[24px] bg-[#FF4F00] hover:bg-orange-600 text-white font-semibold py-[12px] sm:py-[16px] md:py-[20px] px-[28px] sm:px-[32px] md:px-[50px] rounded-full transition cursor-pointer"
        >
          Submit Request
        </button>

        <p className="text-sm text-gray-600 pt-2">
          ⚠️ <span className='font-bold text-black'>Note:</span> Kindly share your WhatsApp number so we can get in touch with you quickly and send important event updates in the future.
        </p>
      </form>
    </div>
  );
};

export default EventHeroSection;
