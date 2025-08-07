import React, { useState } from 'react';

const PrincipleCard = ({ card, index, isActive, onClick, cardPositions, isMobile }) => {
  const { id, title, description, image, bgColor, textColor } = card;
  const { left, width, zIndex } = cardPositions;

  return (
    <div
      key={id}
      className="absolute top-0 bottom-0 transition-all duration-700 ease-fluid"
      style={{ left, width, zIndex }}
      onClick={() => onClick(index)}
    >
      <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ${bgColor} flex`}>
        {/* Rotated Title Tab (Always Visible) */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 md:w-20 lg:w-24 flex items-center justify-center cursor-pointer">
          <span className={`transform -rotate-90 whitespace-nowrap text-sm sm:text-lg md:text-xl lg:text-2xl font-light tracking-wider ${textColor}`}>
            {id} <span className="font-medium">{title}</span>
          </span>
        </div>

        {/* Main Card Content */}
        <div className="absolute left-12 sm:left-16 md:left-20 lg:left-24 right-0 top-0 bottom-0 p-2 sm:p-4 md:p-6 lg:p-8">
          <div className="flex items-center h-full overflow-hidden">
            {/* Mobile Layout - Stack vertically */}
            {isMobile && isActive ? (
              <div className="w-full h-full flex flex-col justify-center space-y-4">
                {/* Image container for mobile */}
                <div 
                  className={`w-full h-[40%] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-fluid ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: isActive ? '200ms' : '0ms' }}
                >
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
                
                {/* Text content for mobile */}
                <div 
                  className={`w-full transition-all duration-500 ease-fluid ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isActive ? '300ms' : '0ms' }}
                >
                  <h2 className={`text-xl sm:text-2xl font-light mb-2 tracking-tight ${textColor}`}>
                    {title}
                  </h2>
                  <p className={`text-xs sm:text-sm leading-relaxed ${textColor} opacity-80`}>
                    {description}
                  </p>
                </div>
              </div>
            ) : (
              /* Desktop Layout - Side by side */
              <>
                {/* Image container for desktop */}
                <div 
                  className={`w-1/2 md:w-[45%] h-[60%] sm:h-[70%] md:h-[80%] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 transition-all duration-500 ease-fluid ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 sm:-translate-x-8'
                  }`}
                  style={{ transitionDelay: isActive ? '200ms' : '0ms' }}
                >
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
                
                {/* Text content for desktop */}
                <div 
                  className={`ml-4 sm:ml-8 md:ml-12 max-w-xs sm:max-w-sm md:max-w-md transition-all duration-500 ease-fluid ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 sm:translate-y-8'
                  }`}
                  style={{ transitionDelay: isActive ? '300ms' : '0ms' }}
                >
                  <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 sm:mb-4 tracking-tight ${textColor}`}>
                    {title}
                  </h2>
                  <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${textColor} opacity-80`}>
                    {description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CorePrinciples = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const logos = [
    "/Amazon_Web_Services_Logo.svg 1.svg", 
    "/Google_Gemini_logo.svg 1.svg",
    "/MongoDB_Logo.svg 1.svg", 
    "/pngimg.com - chatgpt_PNG13 1.svg", 
    "/67360e822fa15f7f86921343_IDX Logo Blue 1.svg",
    "/Azure 1.svg"
  ];

  const cards = [
    {
      id: '01',
      title: 'Innovate',
      description: 'Intelligently automate legal analysis, drafting, and review with our Agentic AI.',
      image: '/1d611ab1a79611fef4540a140b24949daed48db4.jpg',
      bgColor: 'bg-black',
      textColor: 'text-white'
    },
    {
      id: '02',
      title: 'Integrate',
      description: 'Seamlessly connect systems, documents, and processes to create unified, intelligent legal workflows.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2938&auto=format&fit=crop',
      bgColor: 'bg-[#DAD4C9]',
      textColor: 'text-black'
    },
    {
      id: '03',
      title: 'Elevate',
      description: 'AI That Fits In & plug into existing technologies & process, protect your investments— No Disruption, Only Scale.',
      image: '/1d611ab1a79611fef4540a140b24949daed48db4.jpg',
      bgColor: 'bg-[#AFA18F]',
      textColor: 'text-white'
    }
  ];

  const handleCardClick = (index) => {
    setCurrentCard(index);
  };

  // Check if mobile
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation constants - responsive
  const FOLDED_WIDTH = isMobile ? 50 : 80;
  const CARD_COUNT = cards.length;
  const TOTAL_FOLDED_SPACE = (CARD_COUNT - 1) * FOLDED_WIDTH;

  return (
    <div className="font-sans bg-gray-50 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Global styles for custom animation easing */}
      <style jsx global>{`
        .ease-fluid {
          transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-light text-gray-800 mb-2 sm:mb-4 tracking-tight">
            Our Core Principles
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
        </div>

        {/* Mobile Card Selector - Show on small screens */}
        {/* <div className="md:hidden mb-6">
          <div className="flex justify-center space-x-4">
            {cards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === currentCard
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {card.id} {card.title}
              </button>
            ))}
          </div>
        </div> */}

        {/* Animation Container */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] mb-12 sm:mb-16 md:mb-20">
          {cards.map((card, index) => {
            const isActive = index === currentCard;
            const activeCardWidth = `calc(100% - ${TOTAL_FOLDED_SPACE}px)`;
            
            let leftPosition;
            if (index < currentCard) {
              leftPosition = index * FOLDED_WIDTH;
            } else if (index > currentCard) {
              const rightSideOffset = (index - currentCard - 1) * FOLDED_WIDTH;
              leftPosition = `calc(${currentCard * FOLDED_WIDTH}px + ${activeCardWidth} + ${rightSideOffset}px)`;
            } else {
              leftPosition = index * FOLDED_WIDTH;
            }
            
            const cardPositions = {
              left: leftPosition,
              width: isActive ? activeCardWidth : `${FOLDED_WIDTH}px`,
              zIndex: isActive ? 20 : 10 + Math.abs(currentCard - index),
            };

            return (
              <PrincipleCard
                key={card.id}
                card={card}
                index={index}
                isActive={isActive}
                onClick={handleCardClick}
                cardPositions={cardPositions}
                isMobile={isMobile}
              />
            );
          })}
        </div>

        {/* Trusted By Section */}
        <section className="bg-white py-8 sm:py-12 md:py-16 rounded-2xl shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Trusted by thousands of exceptional lawyers.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-2 sm:mt-3">
              At the world's top firms
            </p>
            
            <div className="w-full bg-white mt-6 sm:mt-8 md:mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-items-center px-4 sm:px-10">
                {logos.map((logo, index) => (
                  <div key={index} className="h-8 sm:h-12 md:h-14 lg:h-16 w-full flex items-center justify-center p-2">
                    <img
                      src={logo}
                      alt={`Logo ${index}`}
                      className="h-full w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Creative Company Section */}
        <div className="bg-[#f6f6f6] py-8 sm:py-12 md:py-16 px-4 sm:px-6 mt-8 sm:mt-12 md:mt-16 rounded-3xl">
          <div className="bg-white max-w-7xl mx-auto rounded-3xl shadow-md py-6 sm:py-8 md:py-10 px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 relative max-w-5xl mx-auto">
              {/* Left Side with Blue Shape and Images */}
              <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px]">
                {/* Blue Background Shape */}
                <div className="absolute bottom-4 sm:bottom-8 -left-6 sm:-left-12 md:-left-16 lg:-left-20 w-full rounded-3xl z-0">
                  <img
                    src="/Rectangle 24 (1).png"
                    alt="Background Shape"
                    className="w-full h-full object-cover rounded-3xl"
                    loading="lazy"
                  />
                </div>

                {/* Foreground Big Image */}
                <div className="relative z-10 rounded-2xl overflow-hidden border shadow-xl h-[200px] sm:h-[300px] md:h-[400px]">
                  <img
                    src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
                    alt="Dashboard"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Small Overlapping Image */}
                <div className="absolute z-20 bottom-[40px] sm:bottom-[60px] md:bottom-[90px] -left-3 sm:-left-6 md:-left-8 w-[80px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-[60px] sm:h-[100px] md:h-[120px] lg:h-[150px] rounded-xl overflow-hidden border shadow-lg">
                  <img
                    src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
                    alt="Analytics"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Side Text */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="mb-3 sm:mb-4">
                  <button className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm text-sm sm:text-base text-gray-700 font-medium hover:shadow-md transition-shadow">
                    Since 2005
                  </button>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black">
                  We're a creative branding
                </h2>
                <h3 className="text-[#BCBCBC] text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 mb-3 sm:mb-4">
                  company of creative thinkers
                </h3>
                <p className="border-l-4 border-blue-500 pl-3 sm:pl-4 text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  "Riya opens her tablet. Deepcrucs has already drafted the contract
                  and flagged risks. She reviews and sends—all before court."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorePrinciples;