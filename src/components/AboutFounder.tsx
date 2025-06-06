
import React from 'react';

const AboutFounder: React.FC = () => {
  return (
    <section className="section-padding bg-white dark:bg-audi-black">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Founder's Story</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                Audispot254 was born out of a deep passion for Audi vehicles and the desire to create a community for enthusiasts across Kenya. Founded by Navas Herbert, the journey began with a simple Instagram page to showcase spotted Audis.
              </p>
              <p className="mb-4">
                What started as a hobby quickly grew into Kenya's premier Audi enthusiast community. The vision was simple: to celebrate the engineering excellence, design, and performance that defines the Audi brand while connecting owners and admirers throughout the country.
              </p>
              <p className="mb-4">
                Today, Audispot254 has evolved beyond social media into a comprehensive platform for all things Audi in Kenya - from regular meetups and events to an active online community sharing their passion, knowledge, and of course, stunning photographs of their beloved four rings.
              </p>
              <blockquote className="border-l-4 border-audi-red pl-4 italic">
                "Audispot254 isn't just about the cars - it's about the people, the stories, and the shared passion that brings us together. Every Audi has a story, and we're here to tell it."
                <footer className="text-sm mt-2">- Navas Herbert, Founder</footer>
              </blockquote>
            </div>
            <div className="mt-8">
              <a
                href="https://medium.com/@LawiKiprotich/entrepreneurship-passion-and-audis-the-story-of-audispot254-as-told-by-the-founder-25fe6608179c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-audi-red hover:text-red-700 font-medium flex items-center"
              >
                Read the full story on Medium
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img
              src="/images/navasfounder.jpeg"
              alt="Founder with Audi"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Mission & Vision</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="premium-card p-6">
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <span className="bg-audi-red text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                Our Mission
              </h4>
              <p>
                To cultivate and nurture the growing community of Audi enthusiasts in Kenya by providing a platform for connection, knowledge sharing, and celebration of the Audi brand's heritage and innovation.
              </p>
            </div>
            <div className="premium-card p-6">
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <span className="bg-audi-red text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                Our Vision
              </h4>
              <p>
                To become the definitive hub for Audi enthusiasts in East Africa, fostering a thriving community that celebrates automotive excellence while connecting people through their shared passion for the four rings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
