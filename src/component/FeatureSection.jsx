import React from 'react';

const FeatureSection = () => {
  return (
    <div className="bg-gray-100">
      {/* Section 1 */}
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-8 sm:mb-12">
          Move Forward Faster
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Left Card */}
          <div className="h-full">
            <div className="bg-neutral-200 rounded-xl sm:rounded-2xl flex justify-center mb-6 sm:mb-8 overflow-hidden">
              <img 
                src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
                alt="Personalized Dashboard" 
                className="w-full max-w-lg h-auto sm:h-72 object-cover mt-10 sm:mt-20 rounded-lg" 
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3">Personalized</h3>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              Use pre-built workflows or build your own, fully customized to your
              organization's processes and strengths.
            </p>
          </div>

          {/* Right Card */}
          <div className="h-full">
            <div className="bg-[#c8e0f5] rounded-xl sm:rounded-2xl flex justify-center overflow-hidden">
              <img 
                src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
                alt="Dashboard Interface" 
                className="w-full max-w-lg h-auto sm:h-[500px] object-cover mt-10 sm:mt-20 rounded-lg sm:rounded-2xl" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="pb-12 md:pb-16 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Left Card */}
          <div className="h-full">
            <div className="bg-neutral-200 rounded-xl sm:rounded-2xl flex justify-center mb-6 sm:mb-8 overflow-hidden">
              <img 
                src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
                alt="Transparent Dashboard" 
                className="w-full max-w-lg h-auto sm:h-96 object-cover mt-10 sm:mt-20 rounded-lg" 
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3">Transparent</h3>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              Follow Harvey's reasoning at every stage, with outputs you can trace, validate, and refine.
            </p>
          </div>

          {/* Right Card */}
          <div className="h-full">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3">Guided</h3>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
              Step-by-step inputs, context, and logic configurable to match
              real-world legal work.
            </p>
            
            <div className="bg-neutral-200 rounded-xl sm:rounded-2xl flex justify-center mb-6 sm:mb-8 overflow-hidden">
              <img 
                src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
                alt="Guided Interface" 
                className="w-full max-w-lg h-auto sm:h-64 object-cover mt-6 sm:mt-10 rounded-lg" 
                loading="lazy"
              />
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3">Expert Quality</h3>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              Deliver consistent, high-quality work at scale using domain-specific models and your own firm's expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;