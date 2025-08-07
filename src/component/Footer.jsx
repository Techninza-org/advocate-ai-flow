import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 text-gray-700">
          {/* Logo - Full width on mobile, then moves to first column */}
          <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start">
            <img
              src="/image 68.png"
              alt="Company Logo"
              className="h-24 sm:h-32 w-auto"
              loading="lazy"
            />
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">Overview</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li className="hover:text-gray-900 cursor-pointer transition-colors">Product</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">Customers</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">Journal</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">Security</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">Legal</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li className="hover:text-gray-900 cursor-pointer transition-colors">Terms</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors">Security Policy</li>
            </ul>
          </div>

          {/* About us */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">About us</h3>
            <div className="text-sm sm:text-base space-y-1 sm:space-y-2">
              <p>
                <span className="font-medium">Contact Us:</span><br />
                <a href="tel:123-456-7890" className="hover:text-gray-900 transition-colors">
                  123-456-7890
                </a>
              </p>
              <p>
                <span className="font-medium">Address:</span><br />
                House No.81,<br />
                usaiuabsubsab
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">Social</h3>
            <div className="flex items-center space-x-4 sm:space-x-5 text-lg sm:text-xl text-[#0f172a]">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors">
                <FaYoutube />
              </a>
              <a href="#" aria-label="WordPress" className="hover:text-blue-800 transition-colors">
                <FaWordpress />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 text-center text-gray-600 text-xs sm:text-sm">
          © {new Date().getFullYear()} AI Workflow | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;