export default function Footer() {
  return (
    <footer className="bg-[#FFF3ED] text-black pt-8 pb-4 mt-8 border-t border-gray-200">
      {/* Newsletter Signup Bar */}
      <div className="max-w-5xl mx-auto mb-8 px-4">
        <div className="bg-gray-50 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-4">
          <div className="text-sm md:text-base font-medium">
            Subscribe to Our Newsletter for <span className="text-orange-500 font-semibold">Exclusive Updates</span>, Events and Insights!
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Your Email Address Here"
              className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base flex-1"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded transition-colors text-sm md:text-base"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>

      {/* Main Info Columns */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4 mb-8">
        {/* Gausetu */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl text-orange-600 mb-1">Gausetu</h3>
          <p className="text-xs font-semibold mb-2">By Shreenath Gaushala</p>
          <p className="text-xs text-gray-600 mb-2">
            GauSetu is a heartfelt initiative to protect, nurture, and connect lives through the seva of our beloved cows — an offering of love, legacy, and dharma.
          </p>
        </div>
        {/* Overview */}
        <div>
          <h3 className="font-semibold mb-2">Overview</h3>
          <ul className="text-xs text-gray-700 space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
          </ul>
        </div>
        {/* Get Involved */}
        <div>
          <h3 className="font-semibold mb-2">Get Involved</h3>
          <ul className="text-xs text-gray-700 space-y-1">
            <li><a href="#" className="hover:underline">Donate</a></li>
            <li><a href="#" className="hover:underline">Volunteer</a></li>
            <li><a href="#" className="hover:underline">Plan a Visit</a></li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="text-xs text-gray-700 space-y-1">
            <li><a href="mailto:info@gausetu.in" className="hover:underline">info@gausetu.in</a></li>
            <li><a href="tel:+919521505416" className="hover:underline">+91 9521505416</a></li>
          </ul>
        </div>
        {/* Social */}
        <div>
          <h3 className="font-semibold mb-2">Social</h3>
          <ul className="text-xs text-gray-700 space-y-1">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Orange CTA Card */}
      <div className="max-w-3xl mx-auto mb-8 px-4">
        <div className="bg-orange-500 rounded-lg py-8 px-6 text-center shadow-md">
          <span className="block text-2xl md:text-3xl font-semibold text-white mb-2">Let your journey with <span className="font-bold">Gau Mata</span></span>
          <span className="block text-3xl md:text-4xl italic text-white">Begin here.</span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 text-xs text-gray-600">
        <p className="mb-2 md:mb-0">
          © Copyright 2025 <span className="font-bold text-black">Gausetu</span> - Built with Seva, Designed & Developed with Soul by <span className="font-bold text-black">Giriraj Vyas</span>
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-black hover:underline">Terms of Services</a>
          <a href="#" className="text-black hover:underline">Privacy Policy</a>
          <a href="#" className="text-black hover:underline">Site Map</a>
        </div>
      </div>
    </footer>
  );
}