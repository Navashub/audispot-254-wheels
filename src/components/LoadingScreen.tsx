
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-audi-black z-50">
      <div className="flex flex-col items-center">
        <img 
          src="/lovable-uploads/46bd7047-6fb2-48c0-bbb6-b3ce48696f02.png" 
          alt="Audispot254 Logo" 
          className="h-16 w-auto mb-6" 
        />
        <div className="audi-loading">
          <div className="audi-ring"></div>
          <div className="audi-ring"></div>
          <div className="audi-ring"></div>
          <div className="audi-ring"></div>
        </div>
        <span className="mt-6 font-poppins text-lg font-medium">
          <span className="text-audi-black dark:text-white">AUDISPOT</span>
          <span className="text-audi-red">254</span>
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
