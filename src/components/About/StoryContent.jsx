import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const StoryContent = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-10 px-[10px] md:px-[40px] lg:px-[100px] xl:px-[140px] mb-4 sm:mb-[40px]">
            <div className="text-center">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4">
                    The Bridge Between Legacy and Dharma
                </h3>

                <p className="mt-8 text-[#696969] text-base sm:text-lg lg:text-[28px] xl:text-[32px] text-center">
                    In the year 1933, the noble Maharaja Umeed Singh Ji envisioned more than
                    just a dam — he envisioned a sanctuary. He created Umed Sagar, nestled
                    within the spiritual boundaries of Chopasni Jagir, where Pushtimarg
                    (Vallabhacharya Sampradaya) rituals were observed, and divine respect
                    for Gau Mata (mother cow) ran through every grain of soil.
                </p>

                <p className="mt-8 text-[#696969] text-base sm:text-lg lg:text-[28px] xl:text-[32px] text-center">
                    Among the caretakers chosen to nurture this land was Late Shri Shobha
                    Chand Ji Vyas, entrusted with over 10 acres of fertile land, where
                    fodder was grown and cows were protected with dignity and grace. But as
                    time moved forward, memories faded. The land lay still. Only echoes of
                    cowbells and temple chants remained near the ancient Thakurji temple,
                    the bawris, and the sunset hill.
                </p>

                {/* Quote Box */}
                <div className="bg-gray-50 border-l-4 border-[#FF4F00] rounded-xl px-[20px] my-4 sm:my-[80px] p-4 md:p-6 flex flex-col items-start justify-center shadow-sm">
                    <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="text-gray-400 h-[40px] w-[40px] mb-2"
                    />
                    <p className="italic text-gray-800 mx-auto text-xl sm:text-3xl md:text-[40px] font-bold text-center">
                        This wasn’t land. It was{" "}
                        <span className="text-[#FF4F00]">responsibility</span> passed from
                        one soul to the next.
                    </p>
                </div>

                {/* Additional Content */}
                <div className="mt-8 text-[#696969] text-base sm:text-lg lg:text-[28px] xl:text-[32px] text-center">
                    <p className="mb-8">
                        During the global stillness of the COVID-19 era, the Vyas Family
                        uncovered something extraordinary. What began as a quiet visit
                        became a powerful realization — the sacred land their ancestors once
                        served was still waiting.
                    </p>
                    <p className="mb-8">
                        It was a moment of awakening. And for Late Shri Shyam Sunder Vyas Ji,
                        it wasn’t a coincidence. It was a divine nudge from destiny. With
                        hearts full of faith, the family decided to revive this legacy. In
                        2020, Shree Nath Gaushala was born again — not as a project, but as a
                        soulful rebirth of purpose.
                    </p>
                    <h4 className="text-lg sm:text-2xl md:text-3xl font-bold text-black my-6 sm:my-[60px] mb-3">
                        The Gaushala Today — More Than Shelter, It's Family
                    </h4>
                    <p className="mb-8">
                        Though much of the original land remains submerged through natural
                        means, the remaining ground today hosts over 100+ lovingly cared-for
                        cows. Each has a story, a name, and a place in the heart of the
                        family. With over 50+ volunteers joining in seva, the movement has
                        grown — slowly, sincerely, and spiritually.
                    </p>
                    <p className="mb-8">
                        In December 2024, the Gaushala witnessed an immeasurable loss — the
                        passing of its visionary, Late Shri Shyam Sunder Vyas Ji. His absence
                        was deeply felt, but his dream only grew stronger.
                    </p>
                    <p>
                        The name <span className="font-semibold text-black">GauSetu</span>{" "}
                        reflects a simple yet profound idea: A bridge between cows and
                        community, dharma and devotion, ancestors and the future.
                        <span className="font-bold">
                            GauSetu is
                            not a tribute. It is a continuation. A digital diya lit in the name of
                            devotion.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StoryContent;
