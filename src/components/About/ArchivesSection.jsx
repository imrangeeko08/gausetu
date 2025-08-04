import Image from "next/image";
import Link from "next/link";

const archives = [
  {
    title: "Umed Sagar – The Dam That Watered Devotion",
    image: "/images/archive1.svg",
    href: "#",
  },
  {
    title: "Land of Cows – A Legacy Reclaimed",
    image: "/images/archive2.svg",
    href: "#",
  },
  {
    title: "Thakurji’s Temple – The Divine Pulse of Gaushala",
    image: "/images/archive3.svg",
    href: "#",
  },
];

const ArchivesSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-10 mt-4 sm:mt-[40px]">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-bold mb-8">
        From the Archives: Our Roots & Revelations
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 lg:grid-cols-3 gap-6 w-full ">
        {archives.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-end  transition"
          >
            {/* Image */}
            <div className="relative w-full h-90">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg sm:text-xl mb-2">{item.title}</h3>
              <Link
                href={item.href}
                className="text-[#FF4F00] font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchivesSection;
