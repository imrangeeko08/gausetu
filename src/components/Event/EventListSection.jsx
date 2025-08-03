'use client';
import Image from 'next/image';
import React from 'react';

const events = [
  {
    title: 'Shravan Maas Gau Seva Utsav',
    desc: 'This upcoming event is dedicated to the holy month of Shravan. It will include Gau Abhishek, Hanuman Chalisa recitations, and opportunities for the public to offer seva in honor of this sacred time.',
    date: 'July 28, 2025',
    status: 'Upcoming',
    img: '/images/event1.svg',
  },
  {
    title: 'Youth Volunteer Day',
    desc: 'Young hearts came together for a day of cleaning, caretaking, and bonding with our Gaumatas. A hands-on experience that brought the next generation closer to compassion and service.',
    date: 'January 14, 2025',
    img: '/images/event2.svg',
  },
  {
    title: 'Gau Pujan & Bhajan Sandhya',
    desc: 'An evening of devotion, where the community gathered to perform Gau Pujan, chant bhajans, and express collective gratitude toward Gau Mata. A peaceful moment of reflection, unity, and spiritual connection.',
    date: 'March 3, 2024',
    img: '/images/event3.svg',
  },
  {
    title: 'Ann Daan Seva Mahotsav',
    desc: 'A full-day seva celebration where hundreds of devotees participated in preparing and distributing wholesome meals to the needy and feeding our cows as an offering of love.',
    date: 'November 26, 2023',
    img: '/images/event4.svg',
  },
];

const EventListSection = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Sacred Gatherings. Shared Blessings.</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          From Ann Daan drives to Gau Puja and community satsangs — each event is a ripple of kindness in the name of Gau Mata.
          Come join the journey, or relive the memories we've created together.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {events.map((event, idx) => (
          <div key={idx} className="bg-gray-50 flex gap-3 items-center px-2 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <Image
              src={event.img}
              alt={event.title}
              width={600}
              height={400}
              className="w-[200px] h-[100px] object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold text-black">{event.title}</h3>
              <p className="text-sm text-gray-700">{event.desc}</p>
              <div className="text-sm pt-2 flex justify-between items-center">
                <span className="text-gray-700">
                  <strong>Date:</strong> {event.date}
                  {event.status && (
                    <span className="ml-2 text-green-600 font-medium">| {event.status}</span>
                  )}
                </span>
                <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
                  View Details
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListSection;
