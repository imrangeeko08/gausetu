'use client';
import Image from 'next/image';

const DevotionLegacy = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-16 "
  
    >
      <div className="max-w-6xl mx-auto text-center text-gray-800">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Where Devotion Meets Legacy</h2>
        <p className="text-lg sm:text-xl mb-8">
          Nestled in the serene surroundings of Ummed Sagar, near Kaylana Lake in Jodhpur, GauSetu stands on a land rich with history, devotion, and divine presence...
        </p>

        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/devotion_img.svg"
            alt="Historical Devotion"
            width={1200}
            height={600}
            className="w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <p className="text-white text-lg sm:text-xl font-medium text-center">
              <span className="text-4xl font-bold leading-none">“</span> In those times, not only did the waters serve human needs, but even arrangements were made to grow “Leela Chara” — divine fodder — for cows on the pal (banks) near ancient temples.
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg mb-4 text-[#696969]">
          Nearby still lie echoes of devotion — from ancient Shiva caves on Trikoni Hill, to the temple of Shreeji’s Baithak, and the quiet Gaushala that once stood near the pal. It’s on this very soil of cow-protection, divine migration, and temple legacy, that GauSetu carries the sacred work forward.
        </p>
        <p className="text-base sm:text-lg mb-6 text-[#696969]">
         This region was once a resting place for Lord Shrinathji during his divine journey from Vrindavan to Nathdwara — when Aurangzeb sought to destroy Hindu temples, and the protectors of dharma carried him through this sacred terrain.
        </p>

        <p className="text-lg font-semibold">
         We’re not just a Gaushala. We are a continuation of a divine journey — one that once housed God, grew sacred fodder, and now shelters 100+ sacred lives with love and grace.
        </p>
      </div>
    </section>
  );
};

export default DevotionLegacy;
