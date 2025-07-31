import React from 'react';

export default function LegoraHeroSections() {
  return (
    <div className="">
      {/* Original Hero Section */}
      <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-4">
            <button className="bg-white px-6 py-3 rounded-full shadow-sm text-gray-700 font-medium hover:shadow-md transition-shadow">
              Join Us
            </button>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                  Join us in
                </h1>
                <h2 className="text-5xl lg:text-6xl font-light text-gray-400 leading-tight">
                  rethinking legal work
                </h2>
              </div>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                We are fast-moving, highly ambitious, love shipping, 
                and deeply care for our users. We are on a rocket 
                trajectory, live with 1000s of lawyers, and the 
                biggest firms in several markets, backed by Y 
                Combinator, as well as Benchmark, and are having a 
                blast doing it. At Legora, you won't only experience 
                the future, but you'll get to dictate it.
              </p>

              {/* Vision and Mission */}
              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI-powered legal ecosystem that is intuitive, 
                    fast, and scalable.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To reduce cognitive load, 
                    automate complexity, and 
                    elevate the legal 
                    profession.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Book Demo
                </button>
              </div>
            </div>

            {/* Right Content - Images */}
            <div className="lg:pl-8 -top-20 relative">
              {/* Back Image (peeking from right) */}
              <div className="hidden lg:block absolute -right-8 top-2 w-full h-full z-0">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl h-[550px] w-[550px] ml-auto">
                  <div className="bg-white rounded-3xl overflow-hidden h-full">
                    <img 
                      src="/Rectangle 19.png" 
                      alt="Professional working" 
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Front Image */}
              <div className="relative z-10 top-10">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-1">
                  <div className="bg-white rounded-3xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face" 
                      alt="Professional working on laptop" 
                      className="w-full h-96 lg:h-[550px] object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reversed Hero Section */}
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-4 flex justify-center">
            <button className="bg-white ml-40 px-6 py-3 rounded-full shadow-sm text-gray-700 font-medium hover:shadow-md transition-shadow">
              About Us
            </button>
          </div>

          {/* Main Content - reversed order */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images now on left */}
            <div className="lg:pr-8 -top-20 relative order-first lg:order-none">
              {/* Back Image (peeking from left) */}
              <div className="hidden lg:block absolute -left-8 top-2 w-full h-full z-0">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl h-[550px] w-[550px] mr-auto">
                  <div className="bg-white rounded-3xl overflow-hidden h-full">
                    <img 
                      src="/Rectangle 19.png" 
                      alt="Professional working" 
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Front Image */}
              <div className="relative z-10 top-10">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-1">
                  <div className="bg-white rounded-3xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face" 
                      alt="Professional working on laptop" 
                      className="w-full h-96 lg:h-[550px] object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content now on right */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                  About us in
                </h1>
                <h2 className="text-5xl lg:text-6xl font-light text-gray-400 leading-tight">
                  rethinking legal work
                </h2>
              </div>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                We founded Company with a simple thesis. AI is going to fundamentally change how legal work gets done. In 2023, we began collaborating with the biggest law firm in the Nordics. Together, we brought enterprise-grade generative AI to their team. Through shared efforts, mutual growth, and true problem-solving, we engineered a product tailored to the needs of lawyers at the top firms.
              </p>

              {/* Vision and Mission */}
              {/* <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI-powered legal ecosystem that is intuitive, 
                    fast, and scalable.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To reduce cognitive load, 
                    automate complexity, and 
                    elevate the legal 
                    profession.
                  </p>
                </div>
              </div> */}

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
        <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/b4525fb4805ff3ad7d191506faac499b703fc9ae.jpg')" }}
    >
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10" />

      {/* Content over the gradient in one row */}
      <div className="absolute bottom-10 left-10 right-10 z-20 flex justify-between items-center flex-col md:flex-row gap-6 md:gap-0">
        <h1 className="text-white text-3xl lg:text-5xl font-semibold leading-snug">
          Unlock professional <br />
          class AI for your firm
        </h1>

        <button className="bg-white text-black font-medium px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-200 transition">
          Book a Demo
          <span className="ml-1">→</span>
        </button>
      </div>
    </div>
    </div>
  );
}