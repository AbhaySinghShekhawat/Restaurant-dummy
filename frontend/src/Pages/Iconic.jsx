import { FiArrowRight } from 'react-icons/fi';
import img from '../assets/image/img4.avif'

export default function Iconic() {
  return (
    <section className="bg-stone-100 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">

          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <img
                src={img}
                alt="Luxury restaurant interior with ornate ceiling and chandelier"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm text-amber-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wider shadow-lg">
                PREMIUM DINING
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <p className="text-amber-600 text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] mb-4 sm:mb-6 uppercase">
              DISCOVER RESTAURANT BAR & GRILL
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-amber-700 mb-6 sm:mb-8 lg:mb-10 tracking-[0.1em] sm:tracking-[0.15em] leading-tight">
              LUXURY IN
              <span className="block mt-2">ICONIC</span>
              <span className="block mt-2">SPACES</span>
            </h2>
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-4 sm:mb-6">
                Perfectly seared steak, sea-fresh sashimi, or a bottle or two of champagne at the bar with friends.
              </p>
              
              <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                Pull up a seat and let us make your lunch, brunch, dinner or special event, one to remember. The finest quality, service and experiences await.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="group bg-transparent border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 font-medium tracking-[0.2em] text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
                BOOK A TABLE
                <FiArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </button>
              
              <button className="text-gray-600 hover:text-amber-700 px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 font-medium tracking-[0.2em] text-sm sm:text-base border border-gray-300 hover:border-amber-700 backdrop-blur-sm">
                EXPLORE MENU
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}