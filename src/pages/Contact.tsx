
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import { Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title="Contact Us"
          subtitle="Get in touch with the Audispot254 team"
          backgroundImage="/images/contact.jpeg"
          showButtons={false}
        />
        
        <section className="section-padding bg-white dark:bg-audi-black">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img 
                    src="/lovable-uploads/46bd7047-6fb2-48c0-bbb6-b3ce48696f02.png" 
                    alt="Audispot254 Logo" 
                    className="h-10 w-auto" 
                  />
                  <h2 className="text-3xl font-bold">Get In Touch</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Have questions, suggestions, or just want to connect? Fill out the form, and we'll get back to you as soon as possible.
                </p>
                
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Follow us on social media for the latest updates, events, and featured Audis from across Kenya.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/audispot254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-card p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                  >
                    <Instagram size={36} className="text-audi-black dark:text-white mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Follow us for daily Audi spottings
                    </p>
                    <span className="text-audi-red font-medium">@audispot254</span>
                  </a>
                  
                  {/* TikTok */}
                  <a 
                    href="https://www.tiktok.com/@audispot254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-card p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="36" 
                      height="36" 
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
                    <h3 className="text-xl font-semibold mb-2">TikTok</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Watch exciting videos and clips
                    </p>
                    <span className="text-audi-red font-medium">@audispot254</span>
                  </a>
                </div>
                
                <div className="mt-8 bg-audi-lightgrey dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Other Ways to Reach Us</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <a href="mailto:info@audispot254.com" className="text-audi-red hover:text-red-700">
                        audispot254@gmail.com
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Submissions</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Want to share your Audi? 
                        <Link to="/submit" className="text-audi-red hover:text-red-700 ml-1">
                          Submit here
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
