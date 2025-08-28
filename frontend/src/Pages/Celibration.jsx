import { FiArrowRight } from 'react-icons/fi';
import vid from '../assets/video/video2.mp4'

export default function Celibration() {
  return (
    <section className="relative flex items-center overflow-hidden">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={vid} />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          
          <div className="max-w-4xl">

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white mb-6 sm:mb-8 lg:mb-12 tracking-[0.1em] sm:tracking-[0.15em] leading-tight">
              SENSATIONAL
              <span className="block mt-2 sm:mt-4">CELEBRATIONS</span>
            </h2>

            <div className="max-w-2xl mb-8 sm:mb-10 lg:mb-12">
              <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-4 sm:mb-6">
                Looking to host an event with exceptional food, incredible drinks and iconic spaces? Look no further.
              </p>
              
              <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                We have a variety of private areas for hire so you can throw decadent dinners & blow-out events that go down in history. Contact our dedicated events team and start planning your one-of-a-kind experience today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}