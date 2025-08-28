import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('locations');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'locations', label: 'LOCATIONS', href: '#locations' },
    { id: 'menu', label: 'MENU', href: '#menu' },
    { id: 'private-events', label: 'PRIVATE EVENTS', href: '#private-events' },
    { id: 'club-ir', label: 'CLUB IR', href: '#club-ir' },
    { id: 'gifts-experiences', label: 'GIFTS & EXPERIENCES', href: '#gifts-experiences' },
    { id: 'summer-city', label: 'SUMMER IN THE CITY', href: '#summer-city' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black shadow-lg'
            : 'bg-white/30'
        }`}
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-yellow-400 ${
                    activeSection === item.id
                      ? 'text-yellow-400'
                      : isScrolled
                      ? 'text-white'
                      : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">
                <span className="text-yellow-400">RBG</span>
                <span className="text-xs ml-2 tracking-wider">
                  RESTAURANT<br />
                  BAR & GRILL
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.slice(4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-yellow-400 ${
                    activeSection === item.id
                      ? 'text-yellow-400'
                      : isScrolled
                      ? 'text-white'
                      : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition-colors duration-200 flex items-center gap-2">
                BOOK A TABLE <FiArrowRight />
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-sm font-medium tracking-wide py-2 transition-colors duration-200 hover:text-yellow-400 ${
                    activeSection === item.id ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-yellow-300 transition-colors duration-200 mt-4 flex items-center justify-center gap-2">
                BOOK A TABLE <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}