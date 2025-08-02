import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "linear-gradient(#00000073, #0000004D, #00000073), url('/images/home_Bg.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="text-white max-w-3xl z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Care, Devotion & <span style={{ color: '#FF4F00' }}>Dharma</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Deep in the heart of Jodhpur, lives a sanctuary where cows are family, not just animals.
          Welcome to GauSetu – a humble path of service built with devotion and nurtured by community.
        </p>
        <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
          Contact With Us
        </button>
      </div>
    </div>
  )
}

export default HeroSection
