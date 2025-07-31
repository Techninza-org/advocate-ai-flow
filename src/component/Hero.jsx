import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/aihero.png')" }}>
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-8xl md:text-9xl font-extrabold mb-4">Deepcrucs.ai</h1>
                <p className="text-lg md:text-2xl max-w-2xl">
                    AI that thinks like you. Intelligent Automation, Adaptive Legal Workflow Engine- Automate, Analyse & Accelerate, the Legal Journey
                </p>
                    <button className="mt-8 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors flex items-center">
                        Explore Plateform
                        <span className="ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Hero;