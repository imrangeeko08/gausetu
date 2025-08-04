'use client';
import Image from 'next/image';
import Link from 'next/link';

const Banner = ({
  title = "Let Your Heart Walk With Us",
  description = "If you’ve reached this point, perhaps your heart already hears the quiet call of Gau Mata. Whether you wish to visit, volunteer, or simply offer a gesture of love — we’re always here, waiting with open arms and grateful hearts.",
  image = "/images/banner_img.svg", // Pass the actual path
  btn1 = { label: "Join Us @GauSetu", href: "#" },
  btn2 = { label: "Donate Now", href: "#" }
}) => {
  return (
    <div className="bg-gradient-to-r from-[#FF6A00] to-[#FF6A00] rounded-3xl p-4 sm:p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Text Content */}
      <div className="flex-1 text-white">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          {title.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </h2>
        <p className="text-base sm:text-lg font-medium text-white/90 mb-6">
          {description}
        </p>
        <div className="flex text-sm sm:text-base flex-wrap gap-2 sm:gap-4">
          <Link
            href={btn1.href}
            className="bg-white text-gray-900 font-semibold py-3 px-4 sm:px-6 rounded-full shadow hover:opacity-90 transition"
          >
            {btn1.label}
          </Link>
          <Link
            href={btn2.href}
            className="border border-white text-white font-semibold py-3 px-4 sm:px-6 rounded-full hover:bg-white hover:text-orange-600 transition"
          >
            {btn2.label}
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1">
        <div className="overflow-hidden rounded-2xl w-full h-auto">
          <Image
            src={image}
            alt="Call to action"
            width={400}
            height={400}
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
