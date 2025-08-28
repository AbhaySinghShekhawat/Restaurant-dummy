import React from 'react';
import { FiArrowRight, FiMail, FiFile, FiUsers } from 'react-icons/fi';

export default function Hotofthe(){
  

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                <FiFile className="w-8 h-8 text-white" />
              </div>
              <div className="hidden lg:block w-24 h-px bg-amber-600"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wider leading-tight">
              HOT OFF THE{' '}
              <span className="block text-amber-400">PRESS</span>
            </h2>

            <div className="hidden lg:flex items-center mt-8 space-x-8">
              <div className="flex items-center text-gray-300">
                <FiUsers className="w-5 h-5 mr-2 text-amber-400" />
                <span className="text-sm">5,000+ Subscribers</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiMail className="w-5 h-5 mr-2 text-amber-400" />
                <span className="text-sm">Weekly Updates</span>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Stay in the know with Restaurant Bar & Grill's latest events, 
              new menu launches, offers and invites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="ENTER EMAIL ADDRESS..."
                  className="w-full bg-white text-gray-900 placeholder-gray-500 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 text-sm tracking-wider font-medium"
                />
                <div className="absolute inset-y-0 left-0 w-1 bg-amber-600"></div>
              </div>
              
              <button
                className={`px-8 py-4 font-medium tracking-wider transition-all duration-300 flex items-center justify-center 
                    bg-green-600 text-white
                    bg-amber-600 text-white hover:bg-amber-700 hover:scale-105
                `}
              >
                
                    <span>SUBSCRIBED!</span>
                
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-6 max-w-2xl mx-auto lg:mx-0">
              We respect your privacy. Unsubscribe at any time. By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

