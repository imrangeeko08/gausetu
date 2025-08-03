'use client';
import React from 'react';

const EventHeroSection = () => {
  return (
    <div className="bg-white px-6 py-16 md:px-20 lg:flex lg:items-center lg:justify-between">
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Every Moment is an <span className="text-orange-500">Offering</span>
        </h2>
        <p className="text-lg text-gray-700">
          From soulful gatherings and devotional seva to special celebrations in the name of Gau Mata — every event at GauSetu is a reflection of love, faith, and togetherness.
        </p>
        <p className="text-lg text-gray-700">
          If you'd like to be a part of our story, or host your own sacred moment, just reach out — we’re here to co-create it with you.
        </p>
      </div>

      <form className="mt-12 lg:mt-0 lg:w-[480px] bg-gray-50 rounded-xl p-8 space-y-4 shadow-md">
        <h3 className="text-xl font-semibold text-black">Plan Your Event with Us</h3>

        <div>
          <label className="text-sm font-medium text-gray-700">Your Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Full Name Here"
            className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Your Mobile No.</label>
          <input
            type="text"
            placeholder="Enter Your WhatsApp Mobile Number Here"
            className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">About Your Seva</label>
          <textarea
            rows="4"
            placeholder="Short description of the seva or event idea"
            className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition"
        >
          Submit Request
        </button>

        <p className="text-xs text-gray-600 pt-2">
          ⚠️ <strong>Note:</strong> Kindly share your WhatsApp number so we can get in touch with you quickly and send important event updates in the future.
        </p>
      </form>
    </div>
  );
};

export default EventHeroSection;
