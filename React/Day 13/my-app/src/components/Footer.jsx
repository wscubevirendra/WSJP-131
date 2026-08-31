import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-5">
            Food<span className="text-orange-500">Hub</span>
          </h2>

          <p className="leading-7">
            Fresh ingredients, delicious meals, and memorable dining
            experiences. We serve happiness on every plate.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/menu" className="hover:text-orange-500">Menu</a></li>
            <li><a href="/about" className="hover:text-orange-500">About</a></li>
            <li><a href="/gallery" className="hover:text-orange-500">Gallery</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <p>123 Food Street, Jaipur, Rajasthan</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <p>+91 9876543210</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <p>info@foodhub.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-orange-500" />
              <p>10:00 AM - 11:00 PM</p>
            </div>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center duration-300"
            >
              <FaTwitter />
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400">
        © 2026 FoodHub. All Rights Reserved.
      </div>

    </footer>
  );
}