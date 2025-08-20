import React from 'react';
import { BiChevronDown } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

 const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // header ki height lelo (responsive ke hisaab se)
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;

    // thoda extra spacing (e.g. 24px)
    const extraOffset = 96;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - (headerHeight + extraOffset);

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  }

  setIsMobileMenuOpen(false); // mobile menu close karna
};

  return (
    <div className="sticky top-0 z-50 bg-black">
      <nav className="flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 justify-between max-w-7xl mx-auto">
        {/* Left side - Logo */}
        <a href="/">
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
        </a>
        
        {/* Center - Navigation items (desktop) */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-8 justify-center flex-1 px-4">
          {[
            { name: 'AI-CRM', id: 'aiCrmSection' },
            { name: 'Platform', id: 'platformSection' },
            { name: 'Solutions $ Services', id: 'solutionsSection' },
            { name: 'About us', id: 'aboutSection' },
            { name: 'Contact us', id: 'contactSection' }
          ].map((item) => (
            <div key={item.name} className="group relative">
              <button 
                className="flex items-center text-white hover:text-gray-300 transition-colors text-xs lg:text-sm xl:text-base cursor-pointer whitespace-nowrap"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        
        {/* Right side - CTA button and mobile menu toggle */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <a href="http://43.204.149.188/app/login">
            <button className="hidden sm:block h-10 md:h-12 w-28 border-white border sm:w-32 md:w-36 text-white px-2 md:px-4 py-1 md:py-2 font-medium sm:font-bold rounded-md hover:bg-gray-100 hover:text-black transition-colors text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap">
              Login/Register
            </button>
          </a>
          <a href="https://forms.gle/caijcf38pDjETCeb9">
            <button className="hidden sm:block cursor-pointer bg-white h-10 md:h-12 w-28 sm:w-32 md:w-36 text-black px-2 md:px-4 py-1 md:py-2 font-medium sm:font-bold rounded-md hover:bg-gray-100 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap">
              Book a Demo
            </button>
          </a>
          
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

      {/* Mobile menu - positioned absolutely within the sticky container */}
      <div className={`md:hidden bg-black text-white ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 px-6 py-4 border-t border-gray-800">
          {[
            { name: 'AI-CRM', id: 'aiCrmSection' },
            { name: 'Platform', id: 'platformSection' },
            { name: 'Solutions & Services', id: 'solutionsSection' },
            { name: 'About us', id: 'aboutSection' },
            { name: 'Contact us', id: 'contactSection' }
          ].map((item) => (
            <button
              key={item.name}
              className="flex items-center justify-between py-2 text-left hover:text-gray-300 transition-colors w-full"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          ))}
          <div className="flex flex-col space-y-3 pt-2">
            <a href="http://43.204.149.188/app/login">
              <button className="border border-white text-white px-4 py-2 font-medium rounded-md hover:bg-gray-800 transition-colors w-full">
                Login/Register
              </button>
            </a>
            <a href="https://forms.gle/caijcf38pDjETCeb9">
              <button className="bg-white cursor-pointer text-black px-4 py-2 font-medium rounded-md hover:bg-gray-100 transition-colors w-full">
                Book a Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;