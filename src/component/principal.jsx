import React, { useState, useEffect } from 'react';

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
        <div className="absolute left-12 sm:left-16 md:left-20 lg:left-24 right-0 top-0 bottom-0 p-2 sm:p-4 md:p-6 lg:p-8 ">
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
                  className={`w-1/2 md:w-[45%] h-[60%] sm:h-[70%] md:h-[80%] rounded-2xl flex-shrink-0 transition-all duration-500 ease-fluid flex items-center justify-center ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 sm:-translate-x-8'
                  }`}
                  style={{ transitionDelay: isActive ? '200ms' : '0ms' }}
                >
                  <img 
                    src={image} 
                    alt={title} 
                    className="h-full w-96 object-cover rounded-2xl shadow-lg" 
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
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    {
      id: '01',
      title: 'Innovate',
      description: 'Intelligently automate legal analysis, drafting, and review with our Agentic AI.',
      image: '/Screenshot 2025-08-11 at 3.51.14 PM.png',
      bgColor: 'bg-black',
      textColor: 'text-white'
    },
    {
      id: '02',
      title: 'Integrate',
      description: 'Seamlessly connect systems, documents, and processes to create unified, intelligent legal workflows.',
      image: '/Integrate.png',
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

  useEffect(() => {
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
    <div className="font-sans bg-gray-100 py-12 sm:py-16 md:py-20 overflow-hidden mx-0 md:mx-0 my-16 md:my-0">
      {/* Global styles for custom animation easing */}
      <style jsx global>{`
        .ease-fluid {
          transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mb-2 sm:mb-4 tracking-tight font-semibold text-black">
            Our Core Principles
          </h1>
        </div>

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
      </div>
    </div>
  );
};

export default CorePrinciples;