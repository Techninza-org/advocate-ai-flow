import React from 'react';

const Hero = () => {
    return (
        <div 
            className="relative h-96 md:h-96 lg:h-screen xl:h-screen bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('/aihero.png')" }}
        >
            {/* Overlay with better contrast control */}
            <div className="absolute inset-0  bg-opacity-40"></div>
            
            {/* Content container with improved responsive padding and sizing */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
                {/* Responsive typography with smooth scaling */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 md:mb-6">
                    Deepcrucs.ai
                </h1>
                
                {/* Responsive paragraph with optimal line lengths */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
                    Human-Centric Legal AI. Adaptive Workflows to Automate, Analyse & Accelerate Justice
                </p>
                
                {/* Button with improved hover state and accessibility */}
                <button 
                    className="mt-6 sm:mt-8 bg-white text-black px-5 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                    Explore Platform
                    <span className="ml-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 sm:h-5 sm:w-5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M13 7l5 5m0 0l-5 5m5-5H6" 
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Hero;