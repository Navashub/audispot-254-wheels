
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import SubmitAudiForm from '../components/SubmitAudiForm';

const Submit: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title="Submit Your Audi"
          subtitle="Share your Audi with the community and be featured on our platforms"
          backgroundImage="/images/rsq8.jpeg"
          showButtons={false}
        />
        
        <section className="section-padding bg-white dark:bg-audi-black">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Submit Your Audi</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Have a stunning Audi you'd like to share? Submit your photos and details below to be featured on our website and social media.
                </p>
              </div>
              
              <SubmitAudiForm />
              
              <div className="mt-12 bg-audi-lightgrey dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Submission Guidelines</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Images should be high quality and show the vehicle clearly</li>
                  <li>Please provide accurate information about the model and location spotted</li>
                  <li>Credit the photographer or owner when applicable</li>
                  <li>All submissions are reviewed before being published</li>
                  <li>By submitting, you grant Audispot254 permission to share your content on our platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Submit;
