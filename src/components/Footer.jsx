// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-9 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* School Info */}
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-2">
            Osagyefo Leadership Int. School
          </h3>
          <p className="text-gray-400 italic mb-4">
            "Inspiring Ethical Leadership, Embracing Change"
          </p>
          <p className="text-sm text-gray-200">
            📞 +233 553 476 681 | ✉️ olisghana@gmail.com
          </p>
        </div>

        {/* Quick Links (horizontal) */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            Quick Links
          </h3>
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link to="/about" className="hover:text-white relative group">
                About Us
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-white relative group">
                Academics
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/clubs" className="hover:text-white relative group">
                Clubs
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white relative group">
                Contact
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            Connect with Us
          </h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com/Osagyefo-Olis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-500 transition transform hover:scale-125 hover:text-blue-400 animate-pulse"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com/@codingandfrenchhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-pink-500 transition transform hover:scale-125 hover:text-pink-400 animate-pulse"
            >
              <FaTiktok />
            </a>
            <a
              href="https://instagram.com/osagyefoschool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-sky-500 transition transform hover:scale-125 hover:text-sky-400 animate-pulse"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Osagyefo Leadership International School.
          All Rights Reserved.
        </p>
        <p className="mt-2">
          <span
            title="Built with ❤️ by KIC Knowledge Impact Consult"
            className="text-blue-400 font-semibold cursor-pointer hover:underline"
          >
            Created by KIC
          </span>
        </p>
      </div>
    </footer>
  );
}
