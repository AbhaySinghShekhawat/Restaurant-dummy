import React from 'react';
import img from '../assets/image/img5.jpg'
import { FiArrowRight, FiMusic, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Whaton() {
  const events = [
    {
      id: 1,
      location: "CHESTER",
      title: "LIVE MUSIC FRIDAY & SATURDAY AT OPERA RBG",
      image:img,
      featured: false
    },
    {
      id: 2,
      location: "CHESTER",
      title: "LIVE MUSIC FRIDAY & SATURDAY AT OPERA RBG",
      image: img,
      featured: false
    },
    {
      id: 3,
      location: "MANCHESTER",
      title: "JAZZ EVENING EVERY WEDNESDAY AT OPERA VENUE",
      image:img,
      featured: false
    },
    {
      id: 4,
      location: "LONDON",
      title: "CLASSICAL PERFORMANCE SUNDAY MATINEE SHOW",
      image: img,
      featured: false
    }
  ];

  const featuredEvent = {
    location: "CHESTER",
    title: "Live at OPERA",
    subtitle: "EVERY FRIDAY & SATURDAY",
    image: img
  };
  return (
    <div className="bg-amber-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <h1 className="text-4xl md:text-6xl font-light text-amber-700 tracking-wider mb-4 sm:mb-0">
            WHAT'S ON
          </h1>
          <button className="border-2 border-amber-700 text-amber-700 px-8 py-3 hover:bg-amber-700 hover:text-amber-50 transition-all duration-300 flex items-center gap-2 text-sm tracking-wider">
            VIEW ALL
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="lg:w-1/2">
            <div className="relative h-96 lg:h-full min-h-[500px] overflow-hidden group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${featuredEvent.image})`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-stone-900/10"></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
                <div className="border-2 border-white/80 p-8 backdrop-blur-sm bg-black/20">
                  <p className="text-sm tracking-[3px] mb-4 text-amber-200">
                    {featuredEvent.location}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-light mb-2 tracking-wide">
                    {featuredEvent.title}
                  </h2>
                  <h3 className="text-xl md:text-2xl font-light tracking-[2px] text-amber-100">
                    {featuredEvent.subtitle}
                  </h3>
                </div>
              </div>

              <div className="absolute top-6 left-6">
                <FiMusic className="w-8 h-8 text-white/70" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {events.map((event, index) => (
                <div key={event.id} className="group cursor-pointer">
                  <div className="relative h-64 overflow-hidden mb-4">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${event.image})`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 to-stone-900/60"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
                      <div className="border border-white/60 px-4 py-6 backdrop-blur-sm bg-black/30 w-full">
                        <h3 className="text-2xl font-light mb-2 tracking-wide">
                          Live at
                        </h3>
                        <h4 className="text-3xl font-light tracking-[2px]">
                          OPERA
                        </h4>
                        <p className="text-sm mt-2 text-amber-200 tracking-wide">
                          {event.location}
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <FiMapPin className="w-5 h-5 text-white/80" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-amber-600">
                      <FiCalendar className="w-4 h-4" />
                      <span className="text-sm tracking-wider font-medium">
                        {event.location}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-medium text-amber-800 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <button className="inline-flex items-center gap-2 text-amber-700 text-sm font-medium hover:text-amber-600 transition-colors duration-300 bg-white/80 px-4 py-2 hover:bg-white">
                      DISCOVER MORE
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

