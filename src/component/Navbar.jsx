import React from 'react';
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex items-center px-8 py-4 justify-between bg-black shadow-sm">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <div className="bg-white p-2 rounded-md flex items-center justify-center">
          <img src="/Group 48098144.png" alt="Logo" className="h-8 w-8" />
        </div>
        <span className="ml-3 font-bold text-2xl md:text-3xl lg:text-4xl text-white">
          Deepcrucs.ai
          <br /> 
          <p className="m-0 text-sm md:text-base lg:text-lg text-white font-light">Innovate, integrate, elevate</p>
        </span>
      </div>
      
      {/* Center - Navigation items */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8 justify-between absolute left-1/2 transform -translate-x-1/2">
        <div className="group relative">
          <button className="flex items-center text-white hover:text-gray-300 transition-colors">
            Platform <span className="ml-1"><BiChevronDown /></span>
          </button>
        </div>
        
        <div className="group relative">
          <button className="flex items-center text-white hover:text-gray-300 transition-colors">
            Solutions <span className="ml-1"><BiChevronDown /></span>
          </button>
        </div>
        
        <div className="group relative">
          <button className="flex items-center text-white hover:text-gray-300 transition-colors">
            AI-CRM <span className="ml-1"><BiChevronDown /></span>
          </button>
        </div>
        
        <div className="group relative">
          <button className="flex items-center text-white hover:text-gray-300 transition-colors">
            Security <span className="ml-1"></span>
          </button>
        </div>
        
        <div className="group relative">
          <button className="flex items-center text-white hover:text-gray-300 transition-colors">
            Pricing <span className="ml-1"></span>
          </button>
        </div>
      </div>
      
      {/* Right side - CTA button */}
      <div className="flex items-center">
        <button className="bg-white h-10 md:h-12 w-32 md:w-36 text-black px-3 md:px-4 py-1 md:py-2 font-bold rounded-md hover:bg-gray-100 transition-colors">
          Book a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;