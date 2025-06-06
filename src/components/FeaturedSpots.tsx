
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import AudiCard, { AudiSpot } from './AudiCard';
import { Skeleton } from './ui/skeleton';

// Mock data for featured spots - updated file extensions from .webp to .jpeg
const featuredSpotsData: AudiSpot[] = [
  {
    id: '1',
    imageUrl: '/images/a7.jpeg',
    title: 'Audi A7 Sportback',
    location: 'Nairobi, Kenya',
    photographer: 'essuman.kwesi',
    date: '2023-08-15'
  },
  {
    id: '2',
    imageUrl: '/images/a5b.jpeg',
    title: 'Audi A5',
    location: 'Ololokwe, Kenya',
    photographer: 'grimlens_ke',
    date: '2023-08-10'
  },
  {
    id: '3',
    imageUrl: '/images/a5.jpeg',
    title: 'Audi A5 Sportback',
    location: 'Nairobi, Kenya',
    photographer: 'kisinga_v',
    date: '2023-08-05'
  }
];

interface FeaturedSpotsProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
}

const FeaturedSpots: React.FC<FeaturedSpotsProps> = ({ 
  title = "Featured Spots",
  subtitle = "Check out these amazing Audis spotted across Kenya",
  limit = 3,
  showViewAll = true
}) => {
  // Limit the number of spots to show
  const spotToShow = featuredSpotsData.slice(0, limit);
  
  return (
    <section className="section-padding bg-white dark:bg-audi-black">
      <div className="container-section">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="gallery-grid">
          {spotToShow.map((spot) => (
            <Suspense key={spot.id} fallback={
              <div className="premium-card overflow-hidden h-full flex flex-col">
                <Skeleton className="aspect-[4/3] w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            }>
              <AudiCard spot={spot} />
            </Suspense>
          ))}
        </div>
        
        {showViewAll && (
          <div className="text-center mt-10">
            <Link to="/gallery" className="cta-button">
              View All Spots
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSpots;
