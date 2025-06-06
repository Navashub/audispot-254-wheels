
import React, { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AudiCard, { AudiSpot } from '../components/AudiCard';
import { Skeleton } from '../components/ui/skeleton';

// Updated file extensions from .webp to .jpg
const gallerySpots: AudiSpot[] = [
  {
    id: '1',
    imageUrl: '/images/a7.jpeg',
    title: 'Audi A7 Sportback',
    location: 'Nairobi, Kenya',
    photographer: 'essuman.kwesi',
    description: 'The Audi A7 Sportback combines sleek lines with raw power. This particular model was spotted in Nairobi\'s upscale neighborhood, turning heads with its distinctive paint job and elegant profile.',
    date: '2023-08-15'
  },
  {
    id: '2',
    imageUrl: '/images/q5.jpeg',
    title: 'Audi Q5',
    location: 'Nyeri, Kenya',
    photographer: 'Navas Herbert',
    description: 'The Audi Q5 is a versatile SUV that blends luxury with practicality. This example was captured in the scenic landscapes of Nyeri, showing how well this premium SUV handles diverse terrain.',
    date: '2023-08-10'
  },
  {
    id: '3',
    imageUrl: '/images/ttrs.jpeg',
    title: 'Audi TTRS',
    location: 'Nairobi, Kenya',
    photographer: 'dogo_creatives',
    description: 'The Audi TTRS represents pure sports car performance in a compact package. With its distinctive five-cylinder engine, this TTRS delivers an unmistakable sound that echoes through Nairobi\'s streets.',
    date: '2023-08-05'
  },
  {
    id: '4',
    imageUrl: '/images/a5r.jpeg',
    title: 'Audi A5',
    location: 'Ololokwe, Kenya',
    photographer: 'grimlens_ke',
    description: 'The Audi A5 showcases elegant styling and premium craftsmanship. This particular model was photographed against the stunning backdrop of Ololokwe, highlighting its sophisticated design language.',
    date: '2023-07-28'
  },
  {
    id: '5',
    imageUrl: '/images/a4.jpeg',
    title: 'Audi A4',
    location: 'Tigoni, Kenya',
    photographer: '_thegray.daytona',
    description: 'The Audi A4 represents the perfect balance of executive comfort and driving dynamics. This example was spotted in the lush green surroundings of Tigoni, emphasizing its versatile character.',
    date: '2023-07-20'
  },
  {
    id: '6',
    imageUrl: '/images/sq5.jpeg',
    title: 'Audi SQ5',
    location: 'Nairobi, Kenya',
    photographer: 'mainas_diary',
    description: 'The Audi SQ5 combines the practicality of an SUV with the performance of a sports car. This high-performance variant turns heads on Nairobi\'s streets with its powerful stance and distinctive exhaust note.',
    date: '2023-07-15'
  }
];

// Export gallery spots data so it can be used in other components
export { gallerySpots };

const Gallery: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate initial loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title="Spotted Audis Gallery"
          subtitle="Explore the finest Audis spotted across Kenya"
          backgroundImage="/images/a5b.jpeg"
          showButtons={false}
        />
        
        <section className="section-padding bg-white dark:bg-audi-black">
          <div className="container-section">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Collection</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Browse through our gallery of spotted Audis from across Kenya. 
                From classic models to the latest releases, discover the diversity of Audi vehicles.
              </p>
            </div>
            
            <div className="gallery-grid">
              {isLoading ? (
                // Skeleton loader for cards
                Array(6).fill(0).map((_, index) => (
                  <div key={index} className="premium-card overflow-hidden h-full flex flex-col">
                    <Skeleton className="aspect-[4/3] w-full" />
                    <div className="p-4">
                      <Skeleton className="h-6 w-3/4 mb-3" />
                      <Skeleton className="h-4 w-1/2 mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))
              ) : (
                gallerySpots.map((spot) => (
                  <AudiCard key={spot.id} spot={spot} />
                ))
              )}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/submit" className="cta-button">
                Submit Your Own Audi
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
