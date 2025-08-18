// "use client";
import React from "react";

const ScrollableSections = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-200 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            The All-in-One Agentic AI <br /> Platform for Legal Team
            <span className="inline-block bg-gray-600 text-white text-sm font-bold rounded-full w-6 h-6 align-middle ml-2">
              d
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Summarize documents, navigate by section, search across cases, and
            build cross-case timelines — all powered by Deepcrucs’ intelligent
            legal agents
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Info */}
          <div>
            <span className="inline-block bg-white text-black font-semibold text-sm px-3 py-1 rounded-full mb-4">
              Insight AI
            </span>
            <h2 className="text-2xl md:xl lg:2xl font-bold mb-2">
              Cross-Case Timeline <br /> Compare Events Across Cases
            </h2>
            <p className="text-gray-300">
              Merge timelines from multiple cases to reveal patterns, links, and
              strategic insights.
            </p>
          </div>

          {/* Right Image Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg p-2">
              <img
                src="/legal-dashboard.png" // Replace with your image
                alt="Legal Dashboard"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableSections;
