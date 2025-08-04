import Image from "next/image";
import React from "react";

const StoryBanner = () => {
  return (
    <section className="w-full flex justify-center px-[10px] md:px-[40px] lg:px-[100px] xl:px-[140px] ">
      <div className="relative w-full rounded-2xl overflow-hidden">
        {/* Image */}
        <Image
          src="/images/cow-banner.jpg"
          alt="Gausetu story"
          width={1200}
          height={600}
          className="object-cover w-full h-[320px] md:h-[420px] lg:h-[580px]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#00000073] via-[#0000004D] to-[#00000073] z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 z-20">
          <h2 className="text-white text-2xl md:text-3xl lg:text-[60px] font-bold leading-snug">
            Where the story of{" "}
            <span className="text-[#FF4F00]">GauSetu</span> begins...
          </h2>
          <p className="text-white mt-3 max-w-3xl text-sm md:text-base lg:text-2xl">
            GauSetu is more than a project — it’s the living spirit of Shree Nath
            Gaushala, nurtured through decades of devotion, family tradition, and
            sacred responsibility. We didn’t start a gaushala — we just found the
            path our ancestors left for us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryBanner;
