
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutFounder from '../components/AboutFounder';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title="About Audispot254"
          subtitle="Kenya's premier community for Audi enthusiasts, spotters, and owners"
          backgroundImage="/images/about.avif"
          showButtons={false}
        />
        
        <AboutFounder />
        
        <section className="section-padding bg-audi-lightgrey dark:bg-gray-900">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Why We Exist</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Audispot254 is more than just a website or social media account - it's a community united by passion
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="premium-card p-6 text-center">
                <div className="w-16 h-16 bg-audi-red rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-4">Celebrate</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We celebrate the engineering excellence, design, and performance that defines the Audi brand across Kenya.
                </p>
              </div>
              
              <div className="premium-card p-6 text-center">
                <div className="w-16 h-16 bg-audi-red rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We connect enthusiasts, owners, and admirers through events, content sharing, and community engagement.
                </p>
              </div>
              
              <div className="premium-card p-6 text-center">
                <div className="w-16 h-16 bg-audi-red rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-4">Create</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We create a platform for members to share their stories, showcase their vehicles, and contribute to the community.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <a 
                href="https://www.instagram.com/audispot254" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
