
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Skeleton } from '../components/ui/skeleton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

// Lazy loaded components
const HeroSection = lazy(() => import('../components/HeroSection'));
const FeaturedSpots = lazy(() => import('../components/FeaturedSpots'));
const SocialProof = lazy(() => import('../components/SocialProof'));

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen bg-gray-100 flex items-center justify-center"><Skeleton className="w-full h-screen" /></div>}>
          <HeroSection 
            title="AUDISPOT254"
            subtitle="Kenya's Premier Community for Audi Enthusiasts"
            backgroundImage="/images/AUDI-COVER-PHOTO.jpg"
          />
        </Suspense>
        
        <section className="section-padding bg-audi-black text-white">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Audispot254</h2>
              <p className="text-lg mb-8">
                Audispot254 started as a passion project and has grown into Kenya's largest community of Audi enthusiasts. 
                We celebrate the engineering excellence, design, and performance that defines the Audi brand while connecting 
                owners and admirers throughout the country.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.instagram.com/audispot254" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button"
                >
                  Follow on Instagram
                </a>
                <a 
                  href="https://www.tiktok.com/@audispot254" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="secondary-button"
                >
                  Follow on TikTok
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Suspense fallback={
          <div className="section-padding bg-white">
            <div className="container-section">
              <Skeleton className="h-12 w-1/2 mx-auto mb-6" />
              <Skeleton className="h-6 w-3/4 mx-auto mb-12" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="premium-card">
                    <Skeleton className="aspect-[4/3] w-full" />
                    <div className="p-4">
                      <Skeleton className="h-6 w-3/4 mb-3" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }>
          <FeaturedSpots 
            title="Spotted Audis"
            subtitle="Check out these beautiful Audis spotted across Kenya by our community"
          />
        </Suspense>
        
        <Suspense fallback={
          <div className="section-padding bg-white">
            <div className="container-section">
              <Skeleton className="h-12 w-1/2 mx-auto mb-6" />
              <Skeleton className="h-6 w-3/4 mx-auto mb-12" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Skeleton className="h-64" />
                <Skeleton className="h-64" />
              </div>
            </div>
          </div>
        }>
          <SocialProof />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
