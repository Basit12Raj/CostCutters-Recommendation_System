// HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <div className="bg-blue-500 h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="flex space-x-8">
          <img src="ab2.png" alt="Rocket" className="w-16 h-16" />
          <img src="ab3.png" alt="Drone" className="w-24 h-24" />
        </div>
        <h1 className="text-white text-4xl font-bold">Let's Compare</h1>
        <p className="text-white text-lg">Shop wise with price comparisons from Re:Wise</p>
        <p className="text-white text-sm">Supports user reviews, price comparison, user generated links and price updates</p>
        <button className="mt-4 bg-green-500 px-8 py-2 rounded text-white hover:bg-green-600">
          CHECK FEATURES
        </button>
        <div className="flex space-x-8 mt-8">
          <img src="ab2.png" alt="Mixer" className="w-24 h-24" />
          <img src="ab3.png" alt="Red Camera" className="w-24 h-24" />
          <img src="ab2.png" alt="White Camera" className="w-24 h-24" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
