import React from 'react';

const FeatureSection = () => {
  return (
    <div>
      <section className="bg-gray-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-16 relative overflow-hidden" id='aiCrmSection'>
  {/* Heading */}
  <div className="text-center max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900">
      The Legal Dashboard
    </h2>
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#AFA18F] mt-1 sm:mt-2 font-medium">
      That Works Like You Do
    </p>
    <p className="text-sm sm:text-base md:text-4xl text-[#878787] mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 rounded-md inline-block">
      Deepcrucs brings your cases, documents, and to-dos into one smart,
      streamlined command center.
    </p>
  </div>

  {/* Images */}
  <div className="relative mt-8 sm:mt-12 md:mt-16 flex justify-center">
    {/* Left Small Image - Hidden on smallest screens */}
    <img
      src="/Rectangle 2.png"
      alt="Left small"
      className="hidden sm:block absolute left-0 sm:-left-8 md:-left-14 top-1/4 sm:top-1/3 -translate-y-1/2 w-40 sm:w-48 md:w-56 lg:w-72 h-32 sm:h-40 md:h-56 rounded-lg sm:rounded-xl"
    />

    {/* Main Center Image */}
    <img
      src="/0cc220677236fbb2f0cbd1da198f100bb19b2154.png"
      alt="Main Dashboard"
      className="w-full max-w-7xl rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg sm:shadow-xl md:shadow-2xl"
    />

    {/* Right Small Image - Hidden on smallest screens */}
    <img
      src="/Rectangle 3.png"
      alt="Right small"
      className="hidden sm:block absolute right-0 sm:-right-8 md:-right-14 bottom-4 sm:bottom-10 w-40 sm:w-48 md:w-56 lg:w-72 h-36 sm:h-48 md:h-64 rounded-lg sm:rounded-xl"
    />
  </div>
  
  {/* Gradient overlay */}
  <div className="absolute bottom-0 left-0 w-full h-40 sm:h-60 bg-gradient-to-b from-gray-50 to-transparent"></div>
</section>
      

      
    <section id='platformSection'>
    <div className="bg-gray-100" >
      {/* Section 1 */}
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">
        <p className="text-5xl font-semibold text-black mb-4">
          Complete LegalOps Platform
        </p>
        <p className='text-[#AFA18F] text-3xl mb-10'>
          Manage tasks, clients, billing, and legal workflows—all from one intelligent interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Left Card */}
          <div className="bg-white h-full rounded-2xl overflow-hidden relative group" >
            <div className="rounded-xl sm:rounded-2xl flex justify-center items-center mb-6 sm:mb-8 overflow-hidden px-4 relative z-10" style={{ backgroundImage: "url('/bb1.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <img 
                src="/b1.png" 
                alt="Personalized Dashboard" 
                className="w-full h-full object-contain rounded-lg mt-4" 
                loading="lazy"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3 ml-2">Case Diary</h3>
              <p className="text-[#9D9D9D] text-base sm:text-lg md:text-xl leading-relaxed ml-2 mb-4">
                Track hearings, case updates, and court schedules with precision. Syncs directly to your calendar for zero missed events.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="h-full bg-white rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0  bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="bg-[#DCE1FE] rounded-xl sm:rounded-2xl flex justify-center items-center mb-6 sm:mb-8 overflow-hidden px-4 relative z-10" style={{ backgroundImage: "url('/bb2.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <img 
                src="/b2.png" 
                alt="Dashboard Interface" 
                className="w-full h-full object-contain rounded-lg mt-4" 
                loading="lazy"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3 ml-2">Lead management</h3>
              <p className="text-[#9D9D9D] text-base sm:text-lg md:text-xl leading-relaxed ml-2 mb-4">
                Manage and qualify prospects using a drag-and-drop lead funnel. Stay organized and boost your conversion rate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="pb-12 md:pb-16 px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Left Card */}
          <div className="h-full bg-white rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="bg-[#f2adbf] rounded-xl sm:rounded-2xl flex justify-center items-center mb-6 sm:mb-8 overflow-hidden px-4 relative z-10" style={{ backgroundImage: "url('/bb3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <img 
                src="/b3.png" 
                alt="Transparent Dashboard" 
                className="w-full h-full object-contain rounded-lg mt-4" 
                loading="lazy"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3 ml-2">Deal Management</h3>
              <p className="text-[#9D9D9D] text-base sm:text-lg md:text-xl leading-relaxed ml-2 mb-4">
                Visualize your deal pipeline from first meeting to close. Built to streamline client acquisition and conversion.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="h-full bg-white rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className=" rounded-xl sm:rounded-2xl flex justify-center items-center mb-6 sm:mb-8 overflow-hidden px-4 relative z-10" style={{ backgroundImage: "url('/bb4.png')", backgroundSize: "cover", backgroundPosition: "center", }}>
              <img 
                src="/b4.png" 
                alt="Guided Interface" 
                className="w-full h-full object-contain rounded-lg mt-4" 
                loading="lazy"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3 ml-2">To-Do List</h3>
              <p className="text-[#9D9D9D] text-base sm:text-lg md:text-xl leading-relaxed ml-2 mb-4">
                Assign, monitor, and update tasks seamlessly. Keep your legal team aligned with deadlines and workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12 md:pb-16 px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Left Card */}
          <div className="h-full bg-white rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="bg-[#eacea7] rounded-xl sm:rounded-2xl flex justify-center items-center mb-6 sm:mb-8 overflow-hidden px-4 relative z-10" style={{ backgroundImage: "url('/bb5.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <img 
                src="/b5.png" 
                alt="Transparent Dashboard" 
                className="w-full h-full object-contain rounded-lg mt-4" 
                loading="lazy"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3 ml-2">Billing & Invoicing</h3>
              <p className="text-[#9D9D9D] text-base sm:text-lg md:text-xl leading-relaxed ml-2 mb-4">
                Generate bills with client-specific data, due dates, and itemized services. Simplifies legal fee tracking and collections.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="h-full bg-white rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="bg-[#c4ecb3] rounded-xl sm:rounded-2xl flex justify-center items-center mb-6 sm:mb-8 overflow-hidden px-4 relative z-10" style={{ backgroundImage: "url('/bb6.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <img 
                src="/b6.png" 
                alt="Guided Interface" 
                className="w-full h-full object-contain rounded-lg mt-4" 
                loading="lazy"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3 ml-2">Case Management</h3>
              <p className="text-[#9D9D9D] text-base sm:text-lg md:text-xl leading-relaxed ml-2 mb-4">
                Organize case details, documents, and tribunal data in one place. Search, filter, and update with zero friction.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-black text-white overflow-hidden">
        {/* Gradient Top Border */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 to-transparent"></div>

        <div className="mt-40 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              The All-in-One Agentic AI <br /> Platform for Legal Team
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Summarize documents, navigate by section, search across cases, and
              build cross-case timelines — all powered by Deepcrucs' intelligent
              legal agents
            </p>
          </div>

          {/* Section Template */}
          {[
            {
              title: "Cross-Case Timeline ",
              subtitle: "Compare Events Across Cases",
              text: "Merge timelines from multiple cases to reveal patterns, links, and strategic insights.",
              video: "/vedio1.mp4",
              reverse: false,
              tag:"Insight AI",
              bgImage: "/timeline-bg.jpg"
            },
            {
              title: "AI Document Summary ",
              subtitle: "Turn Pages into Key Points",
              text: "Condense lengthy legal documents into concise, accurate summaries without losing important context or details.",
              video: "/vedio11.mp4",
              reverse: true,
              tag:"Summarize AI",
              bgImage: "/summary-bg.jpg"
            },
            {
              title: "Document Chat Search",
              subtitle: "Ask Your File Anything",
              text: "Query your documents in plain language and get instant, pinpoint answers directly from the file's content.",
              video: "/vedio2.mp4",
              reverse: false,
              tag:"Ask AI",
              bgImage: "/search-bg.jpg"
            },
            {
              title: "Smart Annotations",
              subtitle: "Navigate by Section",
              text: "Automatically generate an indexed view of your document with clickable sections linked to exact locations.",
              video: "/vedios3.mp4",
              reverse: true,
              tag:"Annotate AI",
              bgImage: "/annotate-bg.jpg"
            },
          ].map((sec, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
                sec.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${sec.reverse ? "lg:order-2" : ""} relative`}>
                <div className="absolute inset-0 bg-[url('${sec.bgImage}')] bg-cover bg-center opacity-5 -z-10 rounded-xl"></div>
                <span className="inline-block bg-white text-black font-semibold text-sm px-3 py-1 rounded-full mb-4">
                  {sec.tag}
                </span>
                <h2 className="text-4xl font-bold mb-2">
                  {sec.title} <br /> {sec.subtitle}
                </h2>
                <p className="text-[#B1B1B1] text-xl">{sec.text}</p>
              </div>
              <div
                className={`flex justify-center ${
                  sec.reverse ? "lg:justify-start lg:order-1" : "lg:justify-end"
                }`}
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg p-2 w-full max-w-lg relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg w-full"
                    disablePictureInPicture
                    disableRemotePlayback
                  >
                    <source src={sec.video} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
      </section>
      </div>
  );
};

export default FeatureSection;