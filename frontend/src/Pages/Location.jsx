import React from 'react';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';

export default function Location() {
  

  return (
    <section className="bg-black text-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-amber-600 mb-4 sm:mb-6 lg:mb-8 tracking-[0.15em] sm:tracking-[0.2em] leading-tight">
              OUR LOCATIONS
            </h2>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
              Find your closest restaurant and enjoy a signature RBG moment today.
            </p>

            <form  className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="relative flex-1">
                  <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter location here"
                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-amber-600 to-amber-500 text-black px-6 sm:px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300 font-medium tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  SEARCH
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                </button>
              </div>
            </form>
            <button className="flex items-center gap-3 text-amber-500 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base font-medium tracking-wider group">
              <FiMapPin className="transition-transform group-hover:scale-110" size={18} />
              USE YOUR LOCATION
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">

            <div className="relative">  
              <button className="relative group bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-black w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full transition-all duration-500 font-medium tracking-[0.2em] text-sm sm:text-base lg:text-lg flex flex-col items-center justify-center gap-2 shadow-2xl hover:shadow-amber-600/20 transform hover:scale-105">
                <span>VIEW ALL</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1 group-hover:rotate-45" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}