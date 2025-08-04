'use client';
import React from 'react';
import EventHeroSection from './EventHeroSection';
import EventListSection from './EventListSection';

const Event = () => {
  return (
    <div className='min-h-screen bg-gray-50 w-full'>
      <EventHeroSection />
      <EventListSection />
    </div>
  );
};

export default Event;
