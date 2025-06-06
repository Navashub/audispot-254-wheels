
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-audi-black text-white pt-12 pb-6">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and about */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/46bd7047-6fb2-48c0-bbb6-b3ce48696f02.png" 
                alt="Audispot254 Logo" 
                className="h-10 w-auto" 
              />
              <h3 className="text-xl font-bold">
                AUDISPOT<span className="text-audi-red">254</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Kenya's premier community for Audi enthusiasts, spotting the finest Audis across the country and sharing the passion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/audispot254" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-audi-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@audispot254" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-audi-red transition-colors"
                aria-label="TikTok"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-tiktok"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-audi-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-audi-red transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-audi-red transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-audi-red transition-colors">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-gray-300 hover:text-audi-red transition-colors">
                  Submit Your Audi
                </Link>
              </li>
              <li>
                <a href="mailto:info@audispot254.com" className="text-gray-300 hover:text-audi-red transition-colors">
                  audispot254@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-4">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Audispot254 | Powered by Passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
