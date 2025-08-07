import React, { useState, useEffect, useRef } from 'react';

const ScrollableSections = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  const sectionsData = [
    {
      id: 0,
      title: "Innovation & Technology",
      content: "Discover cutting-edge solutions that transform the way we work and live. Our technology stack includes AI, machine learning, and blockchain innovations that drive the future forward.",
      image: "/aihero.png",
    },
    {
      id: 1,
      title: "Creative Design",
      content: "Explore beautiful designs that capture imagination and inspire creativity. From minimalist aesthetics to bold visual statements, we craft experiences that resonate with users.",
      image: "/0cc220677236fbb2f0cbd1da198f100bb19b2154.png",
    },
    {
      id: 2,
      title: "Global Community",
      content: "Connect with people from around the world and build meaningful relationships. Our platform brings together diverse perspectives and creates opportunities for collaboration.",
      image: "/aihero.png",
    },
    {
      id: 3,
      title: "Sustainable Future",
      content: "Join us in creating a sustainable tomorrow through eco-friendly practices and green technology. Every small step counts towards a better planet for future generations.",
      image: "/0cc220677236fbb2f0cbd1da198f100bb19b2154.png",
    },
    {
      id: 4,
      title: "Data Analytics",
      content: "Harness the power of data to make informed decisions and drive business growth. Our analytics platform provides insights that transform raw data into actionable intelligence.",
      image: "/aihero.png",
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      let newActiveSection = 0;
      let maxVisibility = 0;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const visibleHeight = Math.min(rect.bottom, containerRect.bottom) - 
                             Math.max(rect.top, containerRect.top);
        
        if (visibleHeight > maxVisibility && visibleHeight > 0) {
          maxVisibility = visibleHeight;
          newActiveSection = index;
        }
      });

      setActiveSection(newActiveSection);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] text-black mb-10 bg-gray-50 rounded-3xl overflow-hidden">
      {/* Left Side - Scrollable Content */}
      <div 
        ref={containerRef}
        className="w-full lg:w-1/2 max-w-full lg:max-w-5xl overflow-y-auto scroll-smooth order-2 lg:order-1"
      >
        {sectionsData.map((section, index) => (
          <div
            key={section.id}
            ref={el => sectionRefs.current[index] = el}
            className="max-w-full p-6 sm:p-8 md:p-12 flex flex-col justify-center min-h-[400px] lg:min-h-[600px]"
          >
            <div className="max-w-2xl mx-auto">
              <div className="text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4 opacity-75">
                Section {index + 1}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                {section.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 opacity-90">
                {section.content}
              </p>
              
              {/* Mobile-only image that alternates position */}
              <div className="lg:hidden my-6">
                <div className={`relative w-full h-64 rounded-xl overflow-hidden ${
                  index % 2 === 0 ? 'order-1' : 'order-2'
                }`}>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Dynamic Images (Desktop only) */}
      <div className="hidden lg:block w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full relative flex items-center justify-center order-1 lg:order-2">
        <div className="relative w-full h-full overflow-hidden">
          {sectionsData.map((section, index) => (
            <div
              key={section.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                activeSection === index 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Indicator */}
     
    </div>
  );
};

export default ScrollableSections;