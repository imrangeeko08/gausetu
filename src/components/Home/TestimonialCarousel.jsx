'use client';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = new Array(4).fill({
  name: "Late Sh. Shyam Sunder Vyas",
  position: "Head of Shree Nath Gaushala Samiti, The guiding light of Vyas Family",
  message: `“I never saw them as animals. I saw them as divine souls — silent, sacred, and sent to us with trust. This Gaushala was never just about shelter; it was our dharma, our offering back to the land and our ancestors.”`,
  description: `His dream was to build a space where cows could live with dignity and love... If tomorrow, even one cow is safe because of GauSetu, then his life has served its purpose.`,
  image: '/images/da_sa_img.png',
});

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-2">From the Heart of GauSetu</h2>
        <p className="text-center text-gray-600 text-xm sm:text-base md:text-lg mb-10">
          Every blessing brings us closer to our goal — to serve with heart, to protect with purpose.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-10 bg-white rounded-xl shadow-lg p-6 sm:p-10 transition-all duration-500">
          <div className="flex-1">
            <p className="text-base sm:text-xl font-medium text-gray-800 mb-4">
              {testimonials[activeIndex].message}
            </p>
            <p className="text-gray-600 mb-4">{testimonials[activeIndex].description}</p>
            <div>
              <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-gray-500">{testimonials[activeIndex].position}</p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={testimonials[activeIndex].image}
              alt="Testimonial"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-4 h-4 rounded-full border border-white transition-all duration-300 ${
                activeIndex === i ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
