import React, { useState, useEffect, useRef } from 'react';

const ScrollableSections = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  // Sample data for sections with corresponding images
  const sectionsData = [
    {
      id: 0,
      title: "Innovation & Technology",
      content: "Discover cutting-edge solutions that transform the way we work and live. Our technology stack includes AI, machine learning, and blockchain innovations that drive the future forward. We believe in creating solutions that not only solve current problems but anticipate future needs. Our team of experts works tirelessly to push the boundaries of what's possible, ensuring that every product we develop meets the highest standards of excellence and innovation.",
      image: "/aihero.png",
    //   bgColor: "bg-gradient-to-br from-blue-600 to-purple-700"
    },
    {
      id: 1,
      title: "Creative Design",
      content: "Explore beautiful designs that capture imagination and inspire creativity. From minimalist aesthetics to bold visual statements, we craft experiences that resonate with users. Our design philosophy centers around understanding user needs and translating them into intuitive, beautiful interfaces. We combine artistic vision with practical functionality to create designs that are not only visually stunning but also highly functional and user-friendly.",
      image: "/0cc220677236fbb2f0cbd1da198f100bb19b2154.png",
    //   bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      title: "Global Community",
      content: "Connect with people from around the world and build meaningful relationships. Our platform brings together diverse perspectives and creates opportunities for collaboration. We foster an environment where ideas can flourish and where individuals from different backgrounds can come together to create something greater than the sum of their parts. Our community-driven approach ensures that every voice is heard and valued.",
      image: "/aihero.png",
    //   bgColor: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      id: 3,
      title: "Sustainable Future",
      content: "Join us in creating a sustainable tomorrow through eco-friendly practices and green technology. Every small step counts towards a better planet for future generations. We are committed to reducing our environmental impact while delivering exceptional results. Our sustainable practices include using renewable energy, minimizing waste, and developing products that contribute to a cleaner, greener world.",
      image: "/0cc220677236fbb2f0cbd1da198f100bb19b2154.png",
    //   bgColor: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Data Analytics",
      content: "Harness the power of data to make informed decisions and drive business growth. Our analytics platform provides insights that transform raw data into actionable intelligence. We help organizations understand their data better, identify trends, and make data-driven decisions that lead to success. Our advanced algorithms and visualization tools make complex data accessible and understandable for everyone.",
      image: "/aihero.png",
    //   bgColor: "bg-gradient-to-br from-indigo-600 to-blue-700"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      // Calculate which section is most visible
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
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="flex h-[600px] text-black mb-10">
      {/* Left Side - Scrollable Content */}
      <div 
        ref={containerRef}
        className="w-1/2 max-w-5xl overflow-y-auto scroll-smooth"
      >
        {sectionsData.map((section, index) => (
          <div
            key={section.id}
            ref={el => sectionRefs.current[index] = el}
            className={`max-w-4xl p-12 flex flex-col justify-center transition-all duration-500 ${section.bgColor}`}
          >
            <div className="max-w-lg">
              <div className="text-sm uppercase tracking-wider mb-4 opacity-75">
                Section {index + 1}
              </div>
              <h1 className="text-5xl font-bold mb-8 leading-tight">
                {section.title}
              </h1>
              <p className="text-xl leading-relaxed mb-8 opacity-90">
                {section.content}
              </p>
              {/* <div className="flex items-center space-x-6">
                <div className="w-16 h-1 bg-white opacity-50 rounded"></div>
                <span className="text-lg opacity-75">
                  {String(index + 1).padStart(2, '0')} / {String(sectionsData.length).padStart(2, '0')}
                </span>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Dynamic Images */}
      <div className="w-1/2 relative flex items-center justify-center rounded-4xl">
        <div className="relative w-full h-full overflow-hidden rounded-4xl">
          {sectionsData.map((section, index) => (
            <div
              key={section.id}
              className={`absolute max-w-4xl inset-0 transition-all duration-1000 ease-in-out ${
                activeSection === index 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-auto h-full object-cover rounded-4xl"
              />
              <div className="absolute inset-0 bg-opacity-30"></div>
            </div>
          ))}
        </div>
        
        {/* Image Overlay Info */}
        {/* <div className="absolute bottom-8 left-8 right-8 bg-black bg-opacity-60 backdrop-blur-md p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-3">
            {sectionsData[activeSection]?.title}
          </h3>
          <p className="text-lg opacity-80">
            Currently viewing section {activeSection + 1} of {sectionsData.length}
          </p>
        </div> */}

        {/* Scroll Progress Indicator */}
        {/* <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col space-y-3">
            {sectionsData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-12 rounded-full transition-all duration-500 ${
                  activeSection === index 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white bg-opacity-40'
                }`}
              ></div>
            ))}
          </div>
        </div> */}

        {/* Section Title on Image */}
        {/* <div className="absolute top-8 left-8">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-lg font-medium">
              {sectionsData[activeSection]?.title}
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ScrollableSections;


