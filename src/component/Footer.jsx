import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black" id='contactSection'>
      <div className="max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 text-white">
          {/* Logo and Company Name */}
          <div className="xs:col-span-2 md:col-span-1 flex items-start">
            <div className="flex items-center">
              <div className="bg-white flex justify-center items-center p-1 rounded">
                <img 
                  src="/Group 48098144.png" 
                  alt="Logo" 
                  className="h-6 sm:h-12 w-6 sm:w-16" 
                  loading="lazy"
                />
              </div>
              <div className="ml-3">
                <span className="font-bold text-xl sm:text-2xl text-white block">
                  Deepcrucs.ai
                </span>
                <p className="text-xs sm:text-sm text-white font-light mt-1">
                  Innovate, integrate, elevate
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-0">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Overview</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li 
                className="hover:text-[#BCBCBC] cursor-pointer transition-colors"
                onClick={() => scrollToSection('platformSection')}
              >
                Platform
              </li>
              <li 
                className="hover:text-[#BCBCBC] cursor-pointer transition-colors"
                onClick={() => scrollToSection('aiCrmSection')}
              >
                CRM
              </li>
              <li className="hover:text-[#BCBCBC] cursor-pointer transition-colors">
                AI Features
              </li>
              <li 
                className="hover:text-[#BCBCBC] cursor-pointer transition-colors"
                onClick={() => scrollToSection('solutionsSection')}
              >
                Solutions & Services
              </li>
            </ul>
          </div>

          {/* About us */}
          <div className="xs:col-span-2 md:col-span-1 mt-0">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">About us</h3>
            <div className="text-sm sm:text-base space-y-2">
              <p>
                <span className="font-medium">Contact Us:</span><br />
                <a href="mailto:support@deepcrucs.ai" className="hover:text-[#BCBCBC] transition-colors">
                  support@deepcrucs.ai
                </a>
              </p>
              <p>
                <a href="mailto:support@deepcrucs.ai" className="hover:text-[#BCBCBC] transition-colors">
                  sales@deepcrucs.ai
                </a>
              </p>
              <p>
                <span className="font-medium">Address:</span><br />
                Delhi NCR
              </p>
              <p 
                className="hover:text-[#BCBCBC] cursor-pointer transition-colors"
                onClick={() => scrollToSection('aboutSection')}
              >
                Learn more about us
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="xs:col-span-2 md:col-span-1 mt-0">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Social</h3>
            <div className="flex items-center flex-wrap gap-4 text-lg sm:text-xl text-white">
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
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} AI Workflow | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;