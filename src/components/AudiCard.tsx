
import React from 'react';
import { Link } from 'react-router-dom';

export interface AudiSpot {
  id: string;
  imageUrl: string;
  title: string;
  location?: string;
  photographer?: string;
  description?: string;
  date?: string;
}

interface AudiCardProps {
  spot: AudiSpot;
}

const AudiCard: React.FC<AudiCardProps> = ({ spot }) => {
  // Ensure image URL is properly formatted
  const imageUrl = spot.imageUrl.startsWith('/') 
    ? spot.imageUrl 
    : `/${spot.imageUrl}`;
    
  return (
    <div className="premium-card overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={spot.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/placeholder-car.jpg";
          }}
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-1">{spot.title}</h3>
        
        <div className="flex-grow">
          {spot.location && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              📍 {spot.location}
            </p>
          )}
          
          {spot.photographer && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              📸 {spot.photographer}
            </p>
          )}
          
          {spot.description && (
            <p className="text-sm mt-2 line-clamp-2">
              {spot.description}
            </p>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          {spot.date && (
            <span className="text-xs text-gray-500">
              {spot.date}
            </span>
          )}
          <Link 
            to={`/gallery/${spot.id}`}
            className="text-audi-red hover:text-red-700 font-medium text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AudiCard;
