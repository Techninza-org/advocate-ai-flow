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
    <footer className="bg-white border-t border-gray-200 mb-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700">
        {/* Logo */}
        <div className="col-span-1">
          <img
            src="/image 68.png"
            alt="Logo"
            className="h-32 w-auto"
          />
        </div>

        {/* Overview */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Overview</h3>
          <ul className="space-y-2">
            <li>Product</li>
            <li>Customers</li>
            <li>Journal</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Security Policy</li>
          </ul>
        </div>

        {/* About us */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">About us</h3>
          <p><span className="font-medium">Contact Us :</span><br />123-456-7890</p>
          <p className="mt-3"><span className="font-medium">Address :</span><br />House No.81,<br />usaiuabsubsab</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Social</h3>
          <div className="flex items-center space-x-4 text-xl text-[#0f172a]">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaWordpress />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6 pt-6 text-center text-gray-600 text-sm">
        © 2025 AI Workflow | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
