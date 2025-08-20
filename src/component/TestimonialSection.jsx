// "use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    img: "/img1.png",
    name: "Digital Justice Infrastructure –",
    position: " From courts to counsel, reimagined",
    text: "We build the backbone for paperless, transparent, and AI-assisted justice systems — from automated filings to multilingual case portals.",
    video: false,
  },
  {
    img: "/img2.png",
    name: "AI-Driven Legal Operations –",
    position: "Workflows that work for you",
    text: "End-to-end automation for law firms, in-house legal teams, and public institutions — reducing non-billable hours and improving case turnaround times.",
    video: false,
  },
  {
    img: "/img3.png",
    name: "Legal CRM & Client Engagement –",
    position: "Relationships that scale",
    text: "ntegrated client, case, and compliance management to help professionals deliver faster, smarter, and more transparent services.",
    video: false,
  },
  {
    img: "/img4.png",
    name: "Compliance & Regulatory Intelligence –",
    position: "Always a step ahead",
    text: "Proactive tracking, alerts, and AI analysis of jurisdiction-specific laws, regulations, and deadlines — from GST and AML to ESG and IP.",
    video: false,
  },
  {
    img: "  /img5.png",
    name: "Access to Justice Solutions –",
    position: " Legal help for the underserved",
    text: "Multilingual AI assistants, DIY contract tools, and affordable dispute resolution for SMEs, migrant workers, and underrepresented communities.",
    video: false,
  },
  {
    img: "/img6.png",
    name: "Consulting & AI Strategy –",
    position: " Your roadmap to legal AI adoption",
    text: "Advisory services for governments, law firms, and corporates to design, deploy, and scale AI-native legal ecosystems.",
    video: false,
  },
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change testimonial every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-white" >
      {/* ====== TESTIMONIAL SECTION ====== */}
      <div className="bg-[#f8f8f8] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex justify-center" id='solutionsSection'>
  <div className="w-full max-w-7xl">
    {/* Heading */}
    <div className="mb-8 sm:mb-10 lg:mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
        Solutions & Services
      </h2>
    </div>

    {/* Content */}
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
      {/* Left Image */}
      <div className="w-full lg:w-[300px] xl:w-[350px] h-[250px] sm:h-[300px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 relative">
        <img
          src={currentTestimonial.img}
          alt="Main Testimonial"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {currentTestimonial.video && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-all">
            <button
              className="bg-white/80 hover:bg-white/90 p-3 sm:p-4 rounded-full shadow-lg transition-all"
              aria-label="Play testimonial video"
            >
              ▶
            </button>
          </div>
        )}
      </div>

      {/* Right Text */}
      <div className="flex-1">
        <div className="mb-4 sm:mb-6">
          <p className="text-[#393939] text-2xl sm:text-4xl font-medium max-w-full lg:max-w-5xl">
            {currentTestimonial.name}
          </p>
          <p className="text-[#393939] text-2xl sm:text-4xl font-medium max-w-full lg:max-w-5xl mb-4">
            {currentTestimonial.position}
          </p>
          <p className="text-[#878787] text-lg leading-relaxed max-w-full lg:max-w-3xl">
            {currentTestimonial.text}
          </p>
        </div>

        {/* Thumbnails */}
        <div className="mt-10">
          <div className="flex overflow-x-auto pb-2 gap-3 sm:gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {testimonials.slice(1, 7).map((item, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="flex-shrink-0 w-24 h-24 sm:w-full sm:h-72 sm:aspect-[3/4]"
              >
                <img
                  src={item.img}
                  alt={`Testimonial ${idx + 1}`}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* ====== OUR IMPACT SECTION ====== */}
      <div className="flex items-center justify-center bg-gray-100 p-4 font-sans">
  <div className="w-full max-w-7xl">
    {/* Title section */}
    <h1 className="text-4xl md:3xl lg:5xl font-semibold text-black mb-10">Our Impact</h1>

    {/* Main content container with flexbox layout */}
    <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-start justify-center md:justify-start gap-6">

      {/* First row of content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        
        {/* Left black card */}
        <div className="flex items-center p-8 bg-gray-900 text-white rounded-3xl shadow-lg w-full md:w-[500px] min-h-[140px]">
          <span className="text-6xl md:text-7xl font-extrabold leading-none">
            2x
          </span>
          <p className="ml-24 text-sm md:text-2xl font-medium text-right">
            Lawyer productivity <br /> without replacing jobs
          </p>
        </div>

        {/* Middle image (Lady Justice) */}
        <div className="w-full md:w-40 min-h-[140px] h-[140px] flex items-center justify-center">
          <img
            src="/JUSTIS2.png"
            alt="Lady Justice statue"
            className="rounded-3xl shadow-lg w-full h-full"
          />
        </div>

        {/* Right beige card */}
        <div className="flex items-center justify-between p-8 bg-stone-200 text-gray-800 rounded-3xl shadow-lg w-full md:w-auto min-h-[140px]">
          <span className="text-6xl md:text-7xl font-extrabold leading-none">
            60%
          </span>
          <p className="ml-4 text-lg md:text-xl font-medium leading-snug text-right">
            automation in <br /> compliance workflows
          </p>
        </div>
      </div>

      {/* Second row of content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full mt-4 md:mt-0 md:ml-20 md:mr-20">
        
        {/* Left grey/brown card */}
        <div className="flex items-center justify-between p-8 bg-stone-500 text-white rounded-3xl shadow-lg w-full md:w-auto min-h-[140px]">
          <span className="text-6xl md:text-7xl font-extrabold leading-none">
            30%+
          </span>
          <p className="ml-4 text-lg md:text-xl font-medium leading-snug text-right">
            cost savings <br /> for SMEs
          </p>
        </div>

        {/* Middle purple/pink card */}
        <div className="flex items-center justify-between p-8 bg-purple-200 text-gray-800 rounded-3xl shadow-lg w-full md:w-auto min-h-[140px]">
          <span className="text-6xl md:text-7xl font-extrabold leading-none">
            10x
          </span>
          <p className="ml-4 text-lg md:text-xl font-medium leading-snug text-right">
            faster legal <br /> research and drafting
          </p>
        </div>

        {/* Right image (Blindfolded person holding scales) */}
        <div className="w-full md:w-40 min-h-[140px] h-[140px] flex items-center justify-center">
          <img
            src="/JUSTICS.png"
            alt="Blindfolded person holding scales"
            className="rounded-3xl shadow-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</div>
      
    </div>
  );
}
