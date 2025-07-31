import React, { useState } from 'react';

const PrincipleCard = ({ card, index, isActive, onClick, cardPositions }) => {
  const { id, title, description, image, bgColor, textColor } = card;
  const { left, width, zIndex } = cardPositions;

  return (
    <div
      key={id}
      // The custom 'ease-fluid' class is applied for a smoother transition
      className="absolute top-0 bottom-0 transition-all duration-700 ease-fluid"
      style={{ left, width, zIndex }}
      onClick={() => onClick(index)}
    >
      <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ${bgColor} flex`}>
        {/* Rotated Title Tab (Always Visible) */}
        <div className="absolute top-0 bottom-0 left-0 w-24 flex items-center justify-center cursor-pointer">
          <span className={`transform -rotate-90 whitespace-nowrap text-2xl font-light tracking-wider ${textColor}`}>
            {id} <span className="font-medium">{title}</span>
          </span>
        </div>

        {/* Main Card Content */}
        <div 
          className="absolute left-24 right-0 top-0 bottom-0 p-8"
        >
          {/* This container ensures content doesn't spill during animation */}
          <div className="flex items-center h-full overflow-hidden">
            {/* Image container with enhanced animation */}
            <div 
              className={`w-[45%] h-[80%] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 transition-all duration-500 ease-fluid ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: isActive ? '200ms' : '0ms' }} // Delay reveal, but not hiding
            >
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            
            {/* Text content with enhanced animation */}
            <div 
              className={`ml-12 max-w-md transition-all duration-500 ease-fluid ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isActive ? '300ms' : '0ms' }} // Delay reveal, but not hiding
            >
              <h2 className={`text-6xl font-light mb-4 tracking-tight ${textColor}`}>
                {title}
              </h2>
              <p className={`text-lg leading-relaxed ${textColor} opacity-80`}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// This is the main component you will export and use.
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

  // --- Constants for Animation Calculation ---
  const FOLDED_WIDTH = 96; // This is the width of a folded card tab (in pixels).
  const CARD_COUNT = cards.length;
  const TOTAL_FOLDED_SPACE = (CARD_COUNT - 1) * FOLDED_WIDTH;

  return (
    <>
      {/* Global styles for custom animation easing */}
      <style jsx global>{`
        .ease-fluid {
          transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
        }
      `}</style>
      
      <div className="font-sans bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-4 tracking-tight">
              Our Core Principles
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
          </div>

          {/* --- Animation Container --- */}
          <div className="relative w-full h-[500px]">
            {cards.map((card, index) => {
              const isActive = index === currentCard;

              // --- Dynamic Style Calculation ---
              let leftPosition = 0;
              const activeCardWidth = `calc(100% - ${TOTAL_FOLDED_SPACE}px)`;
              
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
                />
              );
            })}
          </div>
        </div>
        <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Trusted by thousands of exceptional lawyers.
          </h2>
          <p className="text-xl text-gray-400 mt-3">
            At the world's top firms
          </p>
          
          <div className='w-full bg-white'>
            <div className="grid grid-cols-2 sm:grid-cols-3 m-10 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-10 items-center justify-items-center">
              {logos.map((logo, index) => (
                <div key={index} className="h-16 w-40 flex items-center justify-center">
                  <img
                    src={`${logo}`}
                    alt={`${logo} logo`}
                    className="h-full w-full object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>
        <div className="bg-[#f6f6f6] py-16 px-4">
        {/* White Box Container */}
        <div className="bg-white max-w-7xl mx-auto rounded-3xl shadow-md py-6">
          <div className="flex flex-col md:flex-row items-center gap-10 relative max-w-5xl mx-auto">
            {/* Left Side with Blue Shape and Images */}
            <div className="relative w-full md:w-1/2 h-[500px]">
              {/* Blue Background Shape with increased gap */}
              <div className="absolute bottom-8 -left-20 w-full rounded-3xl z-0">
                <img
                  src="/Rectangle 24 (1).png"
                  alt="Background Shape"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Foreground Big Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border shadow-xl h-89">
                <img
                  src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
                  alt="Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Overlapping Image */}
              <div className="absolute z-20 bottom-[90px] -left-8 w-58 h-42 rounded-xl overflow-hidden border shadow-lg">
                <img
                  src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
                  alt="Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side Text */}
            <div className="w-full md:w-1/2">
               <div className="mb-4">
            <button className="bg-white px-6 py-3 rounded-full shadow-sm text-gray-700 font-medium hover:shadow-md transition-shadow">
              Since 2005
            </button>
          </div>
              <h2 className="text-3xl md:text-4xl text-black">
                We're a creative branding
              </h2>
              <h3 className="text-[#BCBCBC] text-4xl mt-1 mb-4">
                company of creative thinkers
              </h3>
              <p className="border-l-4 border-blue-500 pl-4 text-gray-500 text-2xl leading-relaxed">
                "Riya opens her tablet. Deepcrucs has already drafted the contract
                and flagged risks. She reviews and sends—all before court."
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CorePrinciples;