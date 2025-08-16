"use client";
import React from "react";

const LegalDashboardSection = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-16">
      <style jsx>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 24px));
          }
        }
        @keyframes marquee-rtl {
          0% {
            transform: translateX(calc(-100% - 24px));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 20s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 20s linear infinite;
        }
        .hover-pause:hover .animate-marquee-ltr,
        .hover-pause:hover .animate-marquee-rtl {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side with Background */}
        <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
          {/* Background Image */}
          <div className="absolute lg:ml-32 h-72 md:h-80 lg:h-96 w-full max-w-[350px] md:max-w-[430px] inset-0 rounded-3xl overflow-hidden">
            <img
              src="/Rectangle 19 (1).png"
              alt="Professional working"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Foreground Content */}
          <div className="relative bg-[rgb(217,215,209)] rounded-3xl shadow-lg mt-4 h-72 md:h-80 lg:h-96 w-full max-w-md mx-auto overflow-hidden hover-pause">
            {/* Top Row - left to right */}
            <div className="flex gap-4 md:gap-6 animate-marquee-ltr w-max mt-8 md:mt-16">
              <Card icon="≡" color="bg-blue-500" title="Smart Index" />
              <Card icon="✎" color="bg-teal-400" title="Quick Edit" />
              <Card icon="📄" color="bg-green-500" title="Ask Docs" />
              <Card icon="👁" color="bg-orange-400" title="View Files" />
              <Card icon="💬" color="bg-green-400" title="Doc Summary" />
              <Card icon="≡" color="bg-blue-500" title="Smart Index" />
            </div>

            {/* Bottom Row - right to left */}
            <div className="flex gap-4 md:gap-6 animate-marquee-rtl w-max mt-4 md:mt-6">
              <Card icon="👁" color="bg-orange-400" title="View Files" />
              <Card icon="💬" color="bg-green-400" title="Doc Summary" />
              <Card icon="👁" color="bg-orange-400" title="View Files" />
              <Card icon="💬" color="bg-green-400" title="Doc Summary" />
            </div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="order-1 lg:order-2">
          <span className="bg-black text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
            Deepcrucs Agentic AI
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-6 leading-tight sm:leading-snug">
            <span className=" px-1">From Case to Court</span>
          </h2>

          <h3 className="text-gray-400 text-2xl sm:text-3xl font-light mt-1 sm:mt-2">Faster</h3>

          <p className="text-gray-600 mt-4 sm:mt-6 leading-relaxed text-base sm:text-lg">
            Summarize lengthy legal documents in seconds, create smart clickable
            indexes, and chat directly with your files for instant answers. Build
            event timelines across multiple cases with Chronology, and
            effortlessly preview, edit, or manage files — all in one adaptive AI
            workspace designed to save hours and keep your practice in control.
          </p>
        </div>
      </div>
    </section>
  );
};

// Enhanced Card Component with premium touches
const Card = ({ icon, color, title }) => (
  <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm flex flex-col items-start min-w-[120px] sm:min-w-[140px] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
    <div className={`w-7 h-7 sm:w-8 sm:h-8 ${color} rounded-sm flex items-center justify-center mb-2 sm:mb-3 transition-colors duration-300`}>
      <span className="text-white text-sm font-bold">{icon}</span>
    </div>
    <p className="text-xs sm:text-sm font-medium text-gray-800">{title}</p>
  </div>
);

export default LegalDashboardSection;