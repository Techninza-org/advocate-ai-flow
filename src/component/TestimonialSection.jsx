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
    <div className="bg-[#f8f8f8] py-12 px-6 sm:px-12 lg:px-20 flex justify-center">
      <div className="w-full max-w-7xl px-12">
        <h2 className="text-3xl md:text-6xl font-light text-gray-900">
          Don't take our word for it!
        </h2>
        <p className="text-3xl md:text-6xl font-light text-gray-400 mb-10">Hear it from our partners.</p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Video */}
          <div className="relative w-full lg:w-[300px] h-[300px] lg:h-auto rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src={testimonials[0].img}
              alt="Main Testimonial"
              className="w-full h-full object-cover"
            />
            {testimonials[0].video && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/80 hover:bg-white/90 p-3 rounded-full shadow-lg transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
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
            <p className="text-gray-600 w-[650px] text-lg leading-relaxed mb-4">
              {testimonials[0].text}
            </p>
            <p className="font-semibold text-gray-900">{testimonials[0].name}</p>
            <p className="text-sm text-gray-500">{testimonials[0].position}</p>
            
            <div className="mt-10 flex flex-wrap gap-4 justify-start">
              {testimonials.slice(1).map((item, idx) => (
                <div
                  key={idx}
                  className="w-[150px] h-[200px] sm:w-[180px] sm:h-[240px] md:w-[200px] md:h-[300px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={item.img}
                    alt={`Testimonial ${idx + 2}`}
                    className="w-full h-full object-cover"
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