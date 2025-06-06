
import React from 'react';
import { Instagram } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="section-padding bg-white dark:bg-audi-black">
      <div className="container-section">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Join Our Community</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with over 65,000 Audi enthusiasts across Kenya on our social platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/audispot254"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <Instagram size={48} className="text-audi-black dark:text-white mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Instagram</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              Follow us for daily Audi spottings, community highlights, and events
            </p>
            <span className="text-audi-red font-medium">@audispot254</span>
          </a>
          
          {/* TikTok */}
          <a 
            href="https://www.tiktok.com/@audispot254"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-audi-black dark:text-white mb-4"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            <h3 className="text-2xl font-semibold mb-2">TikTok</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              Watch exciting videos, sound clips, and community content
            </p>
            <span className="text-audi-red font-medium">@audispot254</span>
          </a>
        </div>
        
        <div className="mt-16 bg-audi-lightgrey dark:bg-gray-800 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Featured in our Community</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Growing every day with passionate Audi enthusiasts
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-audi-red mb-1">5.5K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Instagram Followers</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-audi-red mb-1">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Audis Spotted</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-audi-red mb-1">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cities Covered</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-audi-red mb-1">5K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Website Visitors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
