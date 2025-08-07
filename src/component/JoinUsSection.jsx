import React from 'react';

export default function LegoraHeroSections() {
  return (
    <div className="overflow-hidden">
      {/* Original Hero Section */}
      <section className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <button className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm text-sm sm:text-base text-gray-700 font-medium hover:shadow-md transition-shadow duration-200">
              Join Us
            </button>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 order-last lg:order-first">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                  Join us in
                </h1>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-400 leading-tight">
                  rethinking legal work
                </h2>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                We are fast-moving, highly ambitious, love shipping, 
                and deeply care for our users. We are on a rocket 
                trajectory, live with 1000s of lawyers, and the 
                biggest firms in several markets, backed by Y 
                Combinator, as well as Benchmark, and are having a 
                blast doing it. At Legora, you won't only experience 
                the future, but you'll get to dictate it.
              </p>

              {/* Vision and Mission */}
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    AI-powered legal ecosystem that is intuitive, 
                    fast, and scalable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    To reduce cognitive load, 
                    automate complexity, and 
                    elevate the legal 
                    profession.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 sm:pt-6">
                <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base">
                  Book Demo
                </button>
              </div>
            </div>

            {/* Right Content - Images */}
            <div className="lg:pl-8 relative order-first lg:order-last">
              {/* Back Image (peeking from right) */}
              <div className="hidden lg:block absolute -right-4 sm:-right-8 top-2 w-full h-full z-0">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl h-[400px] sm:h-[500px] lg:h-[550px] w-[90%] ml-auto">
                  <div className="bg-white rounded-3xl overflow-hidden h-full">
                    <img 
                      src="/Rectangle 19.png" 
                      alt="Professional working" 
                      className="w-full h-full object-cover rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              {/* Front Image */}
              <div className="relative z-10 top-4 sm:top-8 lg:top-10">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-1">
                  <div className="bg-white rounded-3xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face" 
                      alt="Professional working on laptop" 
                      className="w-full h-64 sm:h-80 lg:h-[550px] object-cover rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reversed Hero Section */}
      <section className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8 flex justify-center lg:justify-start">
            <button className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm text-sm sm:text-base text-gray-700 font-medium hover:shadow-md transition-shadow duration-200 lg:ml-40">
              About Us
            </button>
          </div>

          {/* Main Content - reversed order */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Images on left */}
            <div className="lg:pr-8 relative order-first">
              {/* Back Image (peeking from left) */}
              <div className="hidden lg:block absolute -left-4 sm:-left-8 top-2 w-full h-full z-0">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl h-[400px] sm:h-[500px] lg:h-[550px] w-[90%] mr-auto">
                  <div className="bg-white rounded-3xl overflow-hidden h-full">
                    <img 
                      src="/Rectangle 19.png" 
                      alt="Professional working" 
                      className="w-full h-full object-cover rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              {/* Front Image */}
              <div className="relative z-10 top-4 sm:top-8 lg:top-10">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-1">
                  <div className="bg-white rounded-3xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face" 
                      alt="Professional working on laptop" 
                      className="w-full h-64 sm:h-80 lg:h-[550px] object-cover rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content on right */}
            <div className="space-y-6 sm:space-y-8 order-last">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                  About us in
                </h1>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-400 leading-tight">
                  rethinking legal work
                </h2>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                We founded Company with a simple thesis. AI is going to fundamentally change how legal work gets done. In 2023, we began collaborating with the biggest law firm in the Nordics. Together, we brought enterprise-grade generative AI to their team. Through shared efforts, mutual growth, and true problem-solving, we engineered a product tailored to the needs of lawyers at the top firms.
              </p>

              {/* CTA Button */}
              <div className="pt-4 sm:pt-6">
                <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base">
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Image CTA Section */}
      <section className="relative w-full h-screen bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/b4525fb4805ff3ad7d191506faac499b703fc9ae.jpg')" }}
        >
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10" />
        </div>

        {/* Content over the gradient */}
        <div className="relative z-20 h-full flex flex-col justify-end pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-snug max-w-2xl">
                Unlock professional class AI for your firm
              </h1>

              <button className="bg-white text-black font-medium px-5 sm:px-6 py-2 sm:py-3 rounded-md flex items-center gap-2 hover:bg-gray-200 transition text-sm sm:text-base">
                Book a Demo
                <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}