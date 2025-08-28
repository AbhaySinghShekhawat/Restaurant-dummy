
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import video from '../assets/video/video1.mp4'

export default function Hero() {
  
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src=
          {video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight tracking-wider">
              A CELEBRATION OF{' '}
              <span className="block mt-2 sm:mt-4">
                OCEAN <span className="text-yellow-400">&</span> LAND
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-3xl mx-auto">
              Experience the finest flavors from sea and earth in an unforgettable culinary journey
            </p>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-yellow-300 transition-colors duration-200 flex items-center gap-2">
                EXPLORE MENU <FiArrowRight />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-200">
                VIEW LOCATIONS
              </button>
            </div>
          </div>
        </div>
      </section>      
    </>
  );
}