import React from 'react';
import { BiChevronDown } from "react-icons/bi";
import { FiMenu } from "react-icons/fi"; // For mobile menu

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 justify-between bg-black shadow-sm sticky top-0 z-50">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <div className="bg-white p-1 sm:p-2 rounded-md flex items-center justify-center">
            <img 
              src="/Group 48098144.png" 
              alt="Logo" 
              className="h-6 sm:h-8 w-6 sm:w-8" 
              loading="lazy"
            />
          </div>
          <span className="ml-2 sm:ml-3 font-bold text-xl sm:text-2xl md:text-3xl text-white">
            Deepcrucs.ai
            <br /> 
            <p className="m-0 text-xs sm:text-sm md:text-base text-white font-light">
              Innovate, integrate, elevate
            </p>
          </span>
        </div>
        
        {/* Center - Navigation items (desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 justify-between absolute left-1/2 transform -translate-x-1/2">
          {['Platform', 'Solutions', 'AI-CRM', 'Security', 'Pricing'].map((item) => (
            <div key={item} className="group relative">
              <button 
                className="flex items-center text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
                aria-expanded={item !== 'Security' && item !== 'Pricing' ? "false" : undefined}
                aria-haspopup={item !== 'Security' && item !== 'Pricing' ? "true" : undefined}
              >
                {item}
                {item !== 'Security' && item !== 'Pricing' && (
                  <span className="ml-1"><BiChevronDown /></span>
                )}
              </button>
            </div>
          ))}
        </div>
        
        {/* Right side - CTA button and mobile menu toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-white h-10 md:h-12 w-28 sm:w-32 md:w-36 text-black px-3 md:px-4 py-1 md:py-2 font-medium sm:font-bold rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base">
            Book a Demo
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {['Platform', 'Solutions', 'AI-CRM', 'Security', 'Pricing'].map((item) => (
              <button
                key={item}
                className="flex items-center justify-between py-2 text-left hover:text-gray-300 transition-colors"
              >
                {item}
                {item !== 'Security' && item !== 'Pricing' && (
                  <BiChevronDown size={20} />
                )}
              </button>
            ))}
            <button className="mt-4 bg-white text-black px-4 py-2 font-medium rounded-md hover:bg-gray-100 transition-colors w-full">
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;