import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const StoryContent = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-10 px-4 md:px-8">
      <div className=" text-center">
        <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4">
          The Bridge Between Legacy and Dharma
        </h3>
        <p className="text-[#696969]  text-base sm:text-lg lg:text-xl   leading-relaxed mb-4">
          In the year 1933, the noble Maharaja Umeed Singh Ji envisioned more than
          just a dam — he envisioned a sanctuary. He created Umed Sagar, nestled
          within the spiritual boundaries of Chopasni Jagir, where Pushtimarg
          (Vallabhacharya Sampradaya) rituals were observed, and divine respect
          for Gau Mata (mother cow) ran through every grain of soil.
        </p>
        <p className="text-[#696969]  text-base sm:text-lg lg:text-xl mx-auto leading-relaxed mb-4">
          Among the caretakers chosen to nurture this land was Late Shri Shobha
          Chand Ji Vyas, entrusted with over 10 acres of fertile land, where
          fodder was grown and cows were protected with dignity and grace. But as
          time moved forward, memories faded. The land lay still. Only echoes of
          cowbells and temple chants remained near the ancient Thakurji temple,
          the bawris, and the sunset hill.
        </p>

        {/* Quote Box */}
        <div className="bg-gray-50 border-l-4 border-[#FF4F00] rounded-xl px-[20px] mt-8 p-4 md:p-6 flex flex-col items-start justify-center shadow-sm">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-gray-400 h-[40px] flex items-center w-[40px] mb-2"
          />
          <p className="italic text-gray-800 mx-auto text-xl sm:text-3xl md:text-[40px] font-bold  text-center">
            This wasn’t land. It was{" "}
            <span className="text-[#FF4F00]">responsibility</span> passed from
            one soul to the next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryContent;
