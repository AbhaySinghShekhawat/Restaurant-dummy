
import React from 'react';
import { FiInstagram, FiMusic, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  const quickLinks = [
    { name: 'Locations', href: '#' },
    { name: 'Private Events', href: '#' },
    { name: 'Contact Us', href: '#' }
  ];

  const menuLinks = [
    { name: 'Menus', href: '#' },
    { name: 'Gifts & Experiences', href: '#' },
    { name: 'Careers', href: '#' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: FiInstagram, href: '#' },
    { name: 'TikTok', icon: FiMusic, href: '#' },
    { name: 'Facebook', icon: FiFacebook, href: '#' }
  ];

  const footerLinks = [
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Site by Ignite', href: '#' }
  ];

    const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <div className="flex items-center justify-center sm:justify-start mb-8">
            <div className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wider">
              RBG
            </div>
            <div className="ml-4 text-sm sm:text-base text-gray-600 uppercase tracking-wide">
              Restaurant<br />Bar & Grill
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              App Download
            </h3>
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 items-center md:items-start">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on App Store" 
                className="h-12 w-auto"
              />
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Menu & More
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-300 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
            <span>© Individual Restaurants {currentYear}</span>
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="hover:text-gray-900 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

