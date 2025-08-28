import React from 'react';
import { FiStar, FiHeart, FiAward } from 'react-icons/fi';
import img from '../assets/image/img2.avif'
import img1 from '../assets/image/img3.avif'

export default function Memorebel() {
  const dishes = [
    {
      id: 1,
      title: "SIGNATURE STEAKS",
      description: "Premium cuts grilled to perfection with seasonal accompaniments",
      image:img,
      category: "MAINS",
      icon: <FiAward className="w-5 h-5" />
    },
    {
      id: 2,
      title: "ARTISAN SASHIMI",
      description: "Fresh oceanic delicacies presented with Japanese precision",
      image: img1,
      category: "FRESH",
      icon: <FiStar className="w-5 h-5" />
    }
  ];


  return (
    <div className="bg-stone-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-4xl mb-16">
          <div className="mb-6">
            <span className="text-amber-600 text-sm font-medium tracking-[3px] uppercase">
              ELEVATED CLASSICS THAT CREATE
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-amber-700 leading-tight mb-8">
            MEMORABLE MOMENTS WITH{' '}
            <span className="block text-amber-600">GREAT FOOD</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
            Experience culinary excellence where every dish tells a story of passion, 
            precision, and the finest ingredients crafted by our master chefs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {dishes.map((dish, index) => (
            <div 
              key={dish.id} 
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >

              <div className="relative overflow-hidden mb-6 bg-gray-800 aspect-[4/3]">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-2 text-xs font-medium tracking-wider">
                  {dish.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-center text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      {dish.icon}
                    </div>
                    <p className="text-sm font-medium">View Details</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-light text-amber-700 group-hover:text-amber-600 transition-colors duration-300">
                  {dish.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {dish.description}
                </p>
                
                <div className="flex items-center gap-2 text-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-sm font-medium">Discover More</span>
                  <div className="w-8 h-px bg-amber-600"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

