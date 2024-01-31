import React from 'react';

function PriceTrackingSection() {
  return (
    <>
      <div 
        className="p-4 mt-10 mx-auto w-full h-32 text-white text-center text-lg font-semibold shadow-lg relative"
        style={{
          backgroundImage: `url('sv.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <p className="mt-20 p-2 rounded">We are tracking prices from more than 3 most popular shops to give you best deals</p>
        
      </div>
      <div 
        className="p-4   mx-auto w-full h-32 text-white text-center text-lg font-semibold shadow-lg relative transform scale-y-[-1]"
        style={{
          backgroundImage: `url('sv.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        
      </div>
    </>
  );
}

export default PriceTrackingSection;
