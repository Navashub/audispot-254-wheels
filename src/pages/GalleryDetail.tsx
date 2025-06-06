
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { gallerySpots } from './Gallery';
import { toast } from 'sonner';
import { AudiSpot } from '../components/AudiCard';

const GalleryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const spot = gallerySpots.find(s => s.id === id);
  
  // If spot doesn't exist, show a toast notification
  useEffect(() => {
    if (!spot) {
      toast.error('Could not find the requested Audi');
    }
  }, [spot]);
  
  if (!spot) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Audi not found</h2>
            <p className="mb-6">The requested Audi could not be found in our gallery.</p>
            <Link to="/gallery" className="cta-button">
              Return to Gallery
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Create a proper image URL by prepending '/' if it doesn't already exist
  const imageUrl = spot.imageUrl.startsWith('/') ? spot.imageUrl : `/${spot.imageUrl}`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="section-padding bg-white dark:bg-audi-black">
          <div className="container-section">
            <div className="mb-6">
              <Link 
                to="/gallery"
                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-audi-red dark:hover:text-audi-red transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Gallery
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={imageUrl}
                  alt={spot.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Try without the slash if it fails with the slash
                    if (imageUrl.startsWith('/')) {
                      target.src = imageUrl.substring(1);
                    } else {
                      // If that fails too, set a placeholder or default image
                      target.src = "/images/placeholder-car.jpg";
                      target.alt = "Image not available";
                    }
                  }}
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{spot.title}</h1>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {spot.location && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                        <p className="text-lg">{spot.location}</p>
                      </div>
                    )}
                    
                    {spot.date && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Date Spotted</h3>
                        <p className="text-lg">{spot.date}</p>
                      </div>
                    )}
                    
                    {spot.photographer && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Photographer</h3>
                        <p className="text-lg">{spot.photographer}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {spot.description && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-3">About this Audi</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {spot.description}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/submit" className="cta-button">
                    Submit Your Audi
                  </Link>
                  <a 
                    href="https://www.instagram.com/audispot254" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="secondary-button"
                  >
                    Follow on Instagram
                  </a>
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

export default GalleryDetail;
