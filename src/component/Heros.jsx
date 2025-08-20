"use client";
import React from "react";
import { FaListUl, FaEdit, FaFileAlt, FaEye, FaCommentDots } from "react-icons/fa";

const LegalDashboardSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <style jsx>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 1.5rem));
          }
        }
        @keyframes marquee-rtl {
          0% {
            transform: translateX(calc(-100% - 1.5rem));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 25s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 25s linear infinite;
        }
        .hover-pause:hover .animate-marquee-ltr,
        .hover-pause:hover .animate-marquee-rtl {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Side with Background */}
        <div className="relative order-2 lg:order-1 mt-10 lg:mt-0">
          {/* Background Image */}
          <div className="absolute lg:ml-16 h-64 mt-4 ml-2 md:mt-0 lg:mt-0 sm:h-64 md:h-80 lg:h-96 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[430px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/Rectangle 19 (1).png"
              alt="Professional working"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent lg:bg-black/40"></div>
          </div>

          {/* Foreground Content */}
          <div className="relative bg-gradient-to-br from-[#e8e6e1] to-[#d9d7d1] rounded-2xl lg:rounded-3xl shadow-xl mt-8 sm:mt-12 lg:mt-4 h-64 sm:h-72 md:h-80 lg:h-96 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-hidden border border-gray-200/50">
            {/* Top Row - left to right */}
            <div className="flex gap-4 sm:gap-5 md:gap-6 animate-marquee-ltr w-max mt-2 sm:mt-8 md:mt-8">
              <Card icon={<FaListUl />} color="bg-gradient-to-br from-blue-600 to-blue-500" title="Smart Index" />
              <Card icon={<FaEdit />} color="bg-gradient-to-br from-teal-500 to-teal-400" title="Quick Edit" />
              <Card icon={<FaFileAlt />} color="bg-gradient-to-br from-green-600 to-green-500" title="Ask Docs" />
              <Card icon={<FaEye />} color="bg-gradient-to-br from-amber-600 to-amber-500" title="View Files" />
              <Card icon={<FaCommentDots />} color="bg-gradient-to-br from-emerald-600 to-emerald-500" title="Doc Summary" />
            </div>

            {/* Bottom Row - right to left */}
            <div className="flex gap-4 sm:gap-5 md:gap-6 animate-marquee-rtl w-max mt-3 mb-8 sm:mb-10 md:mb-12">
              <Card icon={<FaListUl />} color="bg-gradient-to-br from-blue-600 to-blue-500" title="Smart Index" />
              <Card icon={<FaEdit />} color="bg-gradient-to-br from-teal-500 to-teal-400" title="Quick Edit" />
              <Card icon={<FaFileAlt />} color="bg-gradient-to-br from-green-600 to-green-500" title="Ask Docs" />
              <Card icon={<FaEye />} color="bg-gradient-to-br from-amber-600 to-amber-500" title="View Files" />
              <Card icon={<FaCommentDots />} color="bg-gradient-to-br from-emerald-600 to-emerald-500" title="Doc Summary" />
            </div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="order-1 lg:order-2 lg:text-left px-2 sm:px-0">
          <span className="bg-gradient-to-r from-gray-900 to-black text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-md">
            Deepcrucs Agentic AI
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mt-5 sm:mt-6 md:mt-7 leading-tight sm:leading-snug bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            <span className="px-1">From Case to Court</span>
          </h2>

          <h3 className="text-gray-500 text-xl sm:text-2xl md:text-3xl font-light mt-2 sm:mt-3 tracking-wide">
            Faster & Smarter
          </h3>

          <p className="text-gray-600 mt-5 sm:mt-6 md:mt-7 leading-relaxed text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-light">
            Summarize lengthy legal documents in seconds, create smart clickable
            indexes, and chat directly with your files for instant answers. Build
            event timelines across multiple cases with Chronology, and
            effortlessly preview, edit, or manage files — all in one adaptive AI
            workspace designed to save hours and keep your practice in control.
          </p>

          {/* CTA Buttons */}
          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Features
            </button>
            <button className="bg-white border border-gray-300 text-gray-800 px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              View Demo
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

// Updated Card Component with premium styling
const Card = ({ icon, color, title }) => (
  <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-lg flex flex-col items-center min-w-[110px] xs:min-w-[120px] sm:min-w-[140px] md:min-w-[150px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 group">
    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl ${color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
      <span className="text-white text-xl sm:text-2xl">{icon}</span>
    </div>
    <p className="text-xs xs:text-sm sm:text-base font-medium text-gray-800 mt-3 sm:mt-4 text-center tracking-tight">{title}</p>
  </div>
);

export default LegalDashboardSection;