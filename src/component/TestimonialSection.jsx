import React from 'react';

const testimonials = [
  {
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Devashish Nayak',
    position: 'Senior Software Engineer, Sooprs',
    text: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries “',
    video: true,
  },
  {
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    video: false,
  },
  {
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    video: false,
  },
  {
    img: 'https://randomuser.me/api/portraits/women/55.jpg',
    video: false,
  },
  {
    img: 'https://randomuser.me/api/portraits/men/12.jpg',
    video: false,
  },
];

export default function TestimonialSection() {
  return (
    <div className="bg-[#f8f8f8] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900">
            Don't take our word for it!
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-400">
            Hear it from our partners.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
          {/* Left Video */}
          <div className="w-full lg:w-[300px] xl:w-[350px] h-[250px] sm:h-[300px] lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 relative">
            <img
              src={testimonials[0].img}
              alt="Main Testimonial"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {testimonials[0].video && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-all">
                <button 
                  className="bg-white/80 hover:bg-white/90 p-3 sm:p-4 rounded-full shadow-lg transition-all"
                  aria-label="Play testimonial video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14.752 11.168l-5.197-2.999A1 1 0 008 9.001v5.998a1 1 0 001.555.832l5.197-2.999a1 1 0 000-1.664z" 
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Testimonial Text */}
          <div className="flex-1">
            <div className="mb-4 sm:mb-6">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-full lg:max-w-2xl">
                {testimonials[0].text}
              </p>
            </div>
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <p className="font-semibold text-gray-900 text-lg sm:text-xl">{testimonials[0].name}</p>
              <p className="text-gray-500 text-sm sm:text-base">{testimonials[0].position}</p>
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {testimonials.slice(1).map((item, idx) => (
                <div
                  key={idx}
                  className="aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={`Testimonial ${idx + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}