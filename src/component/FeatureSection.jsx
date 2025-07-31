// src/components/FeatureSection.jsx
import React from 'react';

const FeatureSection = () => {
  return (
    <div>
    <div className="bg-gray-100 py-16 px-6 lg:px-20">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
        Move Forward Faster
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Card */}
        <div className=" h-full rounded-xl relative overflow-hidden">
          <div className="flex bg-neutral-200 rounded-4xl justify-center mb-8">
            <img 
              src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
              alt="Dashboard 1" 
              className="w-[500px] h-72 object-cover mt-20 rounded-lg" 
            />
          </div>
          <h3 className="text-4xl text-gray-800 mb-3">Personalized</h3>
          <p className="text-gray-600 text-xl leading-relaxed">
            Use pre-built workflows or build your own, fully customized to your
            organization's processes and strengths.
          </p>
        </div>

        {/* Right Card */}
        <div className=" rounded-xl relative overflow-hidden">
          <div className="flex justify-center rounded-4xl bg-[#c8e0f5]">
            <img 
              src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
              alt="Dashboard 2" 
              className="w-[500px] h-[500px] mt-20 object-cover rounded-2xl" 
            />
          </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-6 lg:px-20 mb-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Left Card */}
          <div className=" h-full rounded-xl relative overflow-hidden">
           
          <div className="flex bg-neutral-200 rounded-2xl justify-center mb-8">
            <img 
              src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
              alt="Dashboard 1" 
              className="w-[500px] h-92  mt-20 object-cover rounded-lg" 
            />
          </div>
          <h3 className="text-4xl text-gray-800 mb-3">Transparent</h3>
          <p className="text-gray-600 text-xl leading-relaxed">
            Follow Harvey’s reasoning at every stage, with outputs you can trace, validate, and refine.
          </p>
        </div>

        {/* Right Card */}
          <div className=" rounded-xl relative overflow-hidden">
             <h3 className="text-4xl text-gray-800 mb-3">Guided</h3>
          <p className="text-gray-600 text-xl leading-relaxed mb-4">
            Step-by-step inputs, context, and logic configurable to match
            real-world legal work.
          </p>
          <div className="bg-neutral-200 rounded-2xl flex justify-center mb-8">
            <img 
              src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png" 
              alt="Dashboard 2" 
              className="w-[500px] h-64 mt-10 object-cover rounded-lg" 
            />
            </div>
            <h3 className="text-4xl text-gray-800 mb-3">Expert Quality</h3>
          <p className="text-gray-600 text-xl leading-relaxed mb-20">
            Deliver consistent, high-quality work at scale using domain-specific models and your own firm’s expertise.
          </p>
         
        </div>
        </div>
        </div>
      
    </div>
  );
};

export default FeatureSection;