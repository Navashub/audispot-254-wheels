
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Submit', path: '/submit' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Support Us', path: '/support-us' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-audi-black/90 dark:bg-white/90 shadow-md backdrop-blur-sm' 
        : 'bg-gradient-to-b from-black/50 to-transparent dark:from-white/20 dark:to-transparent'}`}>
      <div className="container-section">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/46bd7047-6fb2-48c0-bbb6-b3ce48696f02.png" 
              alt="Audispot254 Logo" 
              className="h-9 w-auto" 
            />
            <span className={`text-xl font-bold 
              ${isScrolled 
                ? 'text-white dark:text-audi-black' 
                : 'text-white dark:text-white'}`}>
              AUDISPOT<span className="text-audi-red">254</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-poppins font-medium transition-colors duration-300 
                  ${isScrolled 
                    ? 'text-white/80 dark:text-audi-black hover:text-white dark:hover:text-audi-red' 
                    : 'text-white hover:text-audi-red'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 
                ${isScrolled 
                  ? 'text-white dark:text-audi-black' 
                  : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden animate-fade-in 
            ${isScrolled 
              ? 'bg-audi-black/90 dark:bg-white/90' 
              : 'bg-black/70 dark:bg-white/20'}`}>
            <div className="px-2 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-3 px-4 rounded-md font-medium transition-colors duration-300 
                    ${isScrolled 
                      ? 'text-white/80 dark:text-audi-black hover:text-white dark:hover:text-audi-red' 
                      : 'text-white hover:bg-white/10 hover:text-audi-red'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
