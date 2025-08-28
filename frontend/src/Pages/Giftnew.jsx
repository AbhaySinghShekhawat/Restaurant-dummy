import React from 'react';
import { FiGift, FiUsers, FiArrowRight } from 'react-icons/fi';
import img from '../assets/image/img6.jpg'
import img1 from '../assets/image/img7.jpg'

export default function Giftnew() {
  const giftCards = [
    {
      id: 1,
      title: "GIFT A BIG MOMENT",
      subtitle: "Create unforgettable memories",
      buttonText: "BUY GIFTCARD",
      image: img,
      icon: <FiGift className="w-6 h-6" />,
      gradient: "from-amber-900/80 to-orange-900/80"
    },
    {
      id: 2,
      title: "JOIN CLUB IR",
      subtitle: "Exclusive member benefits await",
      buttonText: "DISCOVER MORE",
      image: img1,
      icon: <FiUsers className="w-6 h-6" />,
      gradient: "from-red-900/80 to-rose-900/80"
    }
  ];

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wider mb-4">
            SPECIAL OFFERS
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover exclusive experiences and join our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {giftCards.map((card) => (
            <div 
              key={card.id}
              className="group relative h-96 md:h-[500px] overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-[1.02]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:blur-sm group-hover:scale-110"
                style={{
                  backgroundImage: `url(${card.image})`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-opacity duration-500 group-hover:opacity-90`}></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">

                <div className="mb-6 p-3 border-2 border-white/60 rounded-full text-white transition-all duration-300 group-hover:border-white group-hover:bg-white/10 group-hover:scale-110">
                  {card.icon}
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 tracking-wider transition-all duration-300 group-hover:transform group-hover:scale-105">
                  {card.title}
                </h3>

                <p className="text-white/90 text-lg mb-8 max-w-md transition-all duration-300 group-hover:text-white">
                  {card.subtitle}
                </p>

                <button className="bg-transparent border-2 border-white text-white px-8 py-3 font-medium tracking-wider transition-all duration-300 hover:bg-white hover:text-gray-900 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl flex items-center gap-2">
                  {card.buttonText}
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

