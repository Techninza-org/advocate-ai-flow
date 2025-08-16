import React from 'react';

const LegoraHeroSection = () => {
  return (
    <div className=" bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Join Us Button */}
        <div className="mb-4">
          <button className="bg-white text-gray-700 px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
            Join Us
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl text-black leading-tight">
                Shaping the Future
              </h1>
              <h2 className="text-5xl lg:text-6xl font-light text-[#BCBCBC] leading-tight">
                of Legal AI
              </h2>
            </div>

            <p className="text-[#878787] text-2xl">
We are on a mission to transform legal operations with AI-driven solutions that reduce complexity, increase efficiency, and expand access to justice. Our platform is built for law firms, businesses, and communities—designed to scale globally, yet adapt locally to the needs of each market we serve.            </p>

            {/* Vision and Mission Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Vision Card */}
              <div className="relative p-6 rounded-2xl text-white overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-4">Vision</h3>
                  <p className="text-gray-200 text-xl leading-relaxed">
                    AI-powered legal ecosystem that is intuitive, scalable, and accessible—bringing speed, accuracy, and fairness to every legal interaction.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="relative p-6 rounded-2xl text-white overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-gray-800/90"></div>
                </div>
                {/* Dot pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 gap-1 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-4">Mission</h3>
                  <p className="text-gray-200 text-xl leading-relaxed">
                    To empower legal professionals and communities by reducing cognitive load, automating complexity, and delivering affordable, high-quality legal services through agentic AI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          {/* <div className="relative">
            <div className="bg-black rounded-3xl p-4 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0403ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Legal professional"
                  className="w-full h-96 object-cover"
                />
                
             
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    AI-generated
                  </span>
                </div>

               
                <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="relative order-first lg:order-last max-w-md mx-auto">
  {/* Back Image (smaller & more compact) */}
  <div className="hidden lg:block absolute -right-2 sm:-right-4 top-1 w-[85%] h-full z-0">
    <div className="bg-black rounded-2xl h-[280px] sm:h-[350px] lg:h-[480px] w-full ml-auto">
      <div className="bg-white rounded-2xl overflow-hidden h-full">
        <img
          src="/Rectangle 19 (1).png"
          alt="Professional working"
          className="w-full h-full bg-black object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
    </div>
  </div>

  {/* Front Image (smaller height) */}
  <div className="relative z-10 top-3 sm:top-5 lg:top-6">
    <div className="bg-black rounded-2xl p-1">
      <div className="bg-white rounded-2xl overflow-hidden">
        <img
          src="/missionimg.png"
          alt="Professional working on laptop"
          className="w-full h-48 sm:h-64 lg:h-[480px] object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</div>


        </div>
      </div>


      <section className="relative bg-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8" id='aboutSection'>
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-6xl font-medium text-gray-900 mt-20">
         About Us
        </h2>
        {/* <h3 className="mt-2 text-2xl sm:text-6xl font-medium text-[#B7A48D]">
          That Works Like You Do
        </h3> */}

        {/* Subtitle */}
        <p className="mt-4 text-2xl text-[#878787] max-w-7xl mx-auto">
          We value authenticity, transparency, and dedication, and these principles guide us in everything we do. From our humble beginnings to where we stand today.
        </p>
      </div>

        {/* Main Image */}
        <div className="max-w-7xl mx-auto">
      <div className="relative flex justify-center">
        <img
          src="/aboutus22.png" // Replace with your main dashboard image
          alt="Legal Dashboard Main"
          className=" h-[600px]"
        />

        {/* Floating Images */}
        {/* <img
          src="/1c39c0286a0f6422f87cda9c10871baa7c19c0c8__1_-removebg-preview.png" // Replace with left small image
          alt="Left floating"
          className="absolute rotate-35 left-20 top-10 -translate-y-1/2 w-56 h-40 rounded-lg z-20"
        />
        <img
          src="/1c39c0286a0f6422f87cda9c10871baa7c19c0c8__1_-removebg-preview.png" // Replace with right small image
          alt="Right floating"
          className="absolute -right-20 -bottom-10 w-72 h-48 rounded-lg z-20"
        /> */}

        {/* Bottom blur */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-white to-transparent z-30"></div> */}
          </div>
          </div>
      </section>
      <div className="bg-white flex items-center justify-center font-sans">
      <div className="mb-6 container mx-auto max-w-7xl flex flex-col md:flex-row items-start space-y-12 md:space-y-0 md:space-x-16 lg:space-x-10">
        {/* Left Column: Heading */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            AI for Justice
          </h1>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mt-2">
            Scaling Legal Services
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#BCBCBC] font-normal leading-tight mt-4">
            for a Billion+ Lives
            </h2>
            <p className="text-[#878787] mt-6 text-lg">
At Deepcrucs.ai, we believe transformative change in the legal world demands both visionary thinking and proven execution. Our founder, Vivek Chandok, is a seasoned AI and DeepTech entrepreneur with over 30 years of experience building and scaling innovation-led ventures across FinTech, LegalTech, and SaaS. He has taken businesses from $0 to $100M in revenue, led global teams of 400+, and built solutions that have impacted millions of people.            </p>
            <p className="text-[#878787] mt-6 text-lg">
Among his award-winning ventures are Mobomoney — one of India’s first contactless payment banks, which scaled to 500K subscribers and 5,000+ merchants — and Saral Rozgar, a workforce marketplace connecting over 7M blue-collar workers to 25,000+ employers. Vivek holds 16+ intellectual property rights, has launched 100+ digital solutions, and won 15+ industry awards. His ability to spot emerging opportunities, build scalable platforms, and deliver measurable impact has been proven across industries.            </p>
            <p className="text-[#878787] mt-6 text-lg">
Supporting him is Debasmita Chandok, MBA, who drives administration, people management, and organizational strategy — ensuring the operational backbone that fuels our innovation. Her leadership in managing teams, streamlining processes, and enabling seamless execution allows Deepcrucs.ai to move fast without compromising quality          </p>
        </div>

        {/* Right Column: Description Text */}
        <div className="flex-1 flex flex-col space-y-8 text-[#878787] leading-relaxed text-lg">
          <p>
Our confidence in succeeding in Legal AI is rooted in first-hand experience. Vivek spent two years deeply embedded in Delhi courts, observing how litigation works on the ground. As an independent consultant, he led the digital transformation of a mid-tier law firm — automating loan recovery, arbitration, and cheque bounce filings. The results were dramatic: 50K+ notices and 1,500+ filings processed daily, 30% cost savings, and 70% productivity gains through full automation.          </p>
          <p className="text-[#878787]">
This journey revealed a massive opportunity — the legal industry is ripe for intelligent automation. Despite being a $900B global market, over 70% of legal professionals still rely on manual processes. In India alone, 50M+ cases are pending in courts. Even advanced economies like the UAE struggle with slow, expensive, and manpower-heavy legal services. SMEs, startups, expats, and underserved communities often face barriers to timely, affordable justice            </p>
            <p className="text-[#878787]">

At Deepcrucs.ai, we are building a privacy-first, AI-native legal operating system designed for emerging and mid-market environments. By uniting CRM, workflows, compliance, billing, and AI copilots in one platform, we’re not just digitizing old processes — we’re reimagining how legal work is done, scaled, and delivered. Our mission is to make justice faster, smarter, and more accessible, while empowering legal professionals to focus on strategy, not repetitive tasks.            </p>
        
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default LegoraHeroSection;