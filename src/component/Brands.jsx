import React from 'react';

const Brands = () => {
//   const [currentCard, setCurrentCard] = useState(0);

    const logos = [
      "/Azure 1.svg",
        "/Amazon_Web_Services_Logo.svg 1.svg", 
    "/67360e822fa15f7f86921343_IDX Logo Blue 1.svg",
    "/Google_Gemini_logo.svg 1.svg",
    "/pngimg.com - chatgpt_PNG13 1.svg",
    "/MongoDB_Logo.svg 1.svg", 
    
  ];

//   const cards = [
//     {
//       id: '01',
//       title: 'Innovate',
//       description: 'Intelligently automate legal analysis, drafting, and review with our Agentic AI.',
//       image: '/1d611ab1a79611fef4540a140b24949daed48db4.jpg',
//       bgColor: 'bg-black',
//       textColor: 'text-white'
//     },
//     {
//       id: '02',
//       title: 'Integrate',
//       description: 'Seamlessly connect systems, documents, and processes to create unified, intelligent legal workflows.',
//       image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2938&auto=format&fit=crop',
//       bgColor: 'bg-[#DAD4C9]',
//       textColor: 'text-black'
//     },
//     {
//       id: '03',
//       title: 'Elevate',
//       description: 'AI That Fits In & plug into existing technologies & process, protect your investments— No Disruption, Only Scale.',
//       image: '/1d611ab1a79611fef4540a140b24949daed48db4.jpg',
//       bgColor: 'bg-[#AFA18F]',
//       textColor: 'text-white'
//     }
//   ];

//   const handleCardClick = (index) => {
//     setCurrentCard(index);
//   };

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
//   const CARD_COUNT = cards.length;
//   const TOTAL_FOLDED_SPACE = (CARD_COUNT - 1) * FOLDED_WIDTH;

  return (
    <div className="font-sans bg-gray-50 overflow-hidden">
      {/* Global styles for custom animation easing */}
      <style jsx global>{`
        .ease-fluid {
          transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
        }
      `}</style>
      
      <div className=" mx-auto">
        {/* <div className="mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-light text-gray-800 mb-2 sm:mb-4 tracking-tight">
            Our Core Principles
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
        </div> */}

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
      
        {/* Trusted By Section */}
        <section className="bg-white py-8 sm:py-12 md:py-16 rounded-2xl shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
Technology Partners           
 </h2>
            
            <div className="w-full bg-white mt-6 sm:mt-8 md:mt-10">
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2 items-center justify-items-center px-4 sm:px-10">
                {logos.map((logo, index) => (
                  <div key={index} className="h-16 sm:h-12 md:h-14 lg:h-16 w-full flex items-center justify-center p-2">
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
               <section className="relative w-full h-screen bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/b4525fb4805ff3ad7d191506faac499b703fc9ae.jpg')" }}
        >
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10" />
        </div>

        {/* Content over the gradient */}
        <div className="relative z-50 h-full flex flex-col justify-end pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-semibold text-white leading-snug max-w-2xl">
                Innovate. Integrate. Elevate.
                </h1>
                
<a href="https://forms.gle/caijcf38pDjETCeb9">
              <button className="bg-white cursor-pointer text-black font-medium px-5 sm:px-6 py-2 sm:py-3 rounded-md flex items-center gap-2 hover:bg-gray-200 transition text-sm sm:text-base">
                Book a Demo
                <span className="ml-1">→</span>
                  </button>
                  </a>

              </div>
              
          </div>
          </div>
                                  <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black to-transparent z-30"></div>

      </section>
    
      </div>
    </div>
  );
};

export default Brands;