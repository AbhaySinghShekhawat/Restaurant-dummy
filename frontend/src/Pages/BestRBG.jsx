import { useState, useEffect } from 'react';
import img from '../assets/image/img1.avif'
import img1 from '../assets/image/img2.avif'
import img2 from '../assets/image/img3.avif'

export default function BestRBG() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "BOTTOMLESS BRUNCH",
      description: "Join us for the ultimate bank holiday weekend treat.",
      details: "Enjoy your choice of dish plus 90 minutes of bottomless drinks for just £35 per person.",
      availability: "Available Saturday 23rd August – Monday 25th August, 12–3pm.",
      image: img,
      bgColor: "bg-amber-50"
    },
    {
      id: 2,
      title: "SIGNATURE STEAKS",
      description: "Experience our premium cuts cooked to perfection.",
      details: "Dry-aged steaks from the finest British farms, served with our signature sides and sauces.",
      availability: "Available daily from 5pm. Reservations recommended.",
      image: img1,
      bgColor: "bg-stone-100"
    },
    
    {
      id: 3,
      title: "CRAFT COCKTAILS",
      description: "Handcrafted cocktails by our expert mixologists.",
      details: "From classic martinis to innovative seasonal creations, each drink is a masterpiece.",
      availability: "Bar open daily from 4pm. Happy hour 5-7pm weekdays.",
      image: img2,
      bgColor: "bg-purple-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-amber-600 tracking-wider">
            THE BEST OF RBG
          </h2>
        </div>

        <div className="relative">

          <div className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] min-h-[400px] max-h-[800px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-50 to-stone-100">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                <div className="relative h-full flex flex-col lg:flex-row">
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5 z-10"></div>

                  <div className="w-full lg:w-3/5 h-1/2 sm:h-2/5 lg:h-full relative overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-[6000ms] scale-110 hover:scale-100"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:via-transparent lg:to-transparent"></div>
                  </div>

                  <div className="w-full lg:w-2/5 h-1/2 sm:h-3/5 lg:h-full relative z-20 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-16 bg-gradient-to-br from-white/98 to-amber-50/95 backdrop-blur-sm">
                    <div className="max-w-xl mx-auto lg:mx-0">

                      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mb-4 sm:mb-6 rounded-full"></div>
                      
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight text-gray-900 mb-3 sm:mb-4 lg:mb-6 tracking-[0.15em] sm:tracking-[0.2em] leading-tight">
                        {slide.title}
                      </h3>
                      
                      <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-4 sm:mb-6 leading-relaxed">
                        {slide.description}
                      </p>
                      
                      <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 leading-relaxed font-light">
                        {slide.details}
                      </p>
                      
                      <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 italic font-light">
                        {slide.availability}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button className="group bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-amber-700 hover:to-amber-600 transition-all duration-300 text-sm sm:text-base font-medium tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                          <span className="flex items-center justify-center gap-2">
                            DISCOVER MORE
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </button>
                        <button className="border-2 border-gray-400 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:border-amber-600 hover:text-amber-600 transition-all duration-300 text-sm sm:text-base font-medium tracking-wider backdrop-blur-sm">
                          VIEW MENU
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}