
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showButtons?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = '/images/r8k.webp',
  showButtons = true
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);
  }, [backgroundImage]);

  return (
    <div 
      className={`relative flex items-center justify-center min-h-screen text-center text-white py-20 px-4 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            {subtitle}
          </p>
        )}
        
        {showButtons && (
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link to="/gallery" className="cta-button">
              View Gallery
            </Link>
            <Link to="/submit" className="secondary-button">
              Submit Your Audi
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
