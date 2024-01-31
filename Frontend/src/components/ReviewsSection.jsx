import React from 'react';

function ReviewsSection() {
  const reviews = [
    {
      image: "bgr.png",
      date: "August 23, 2017",
      title: "Selfies from the sky made simple",
      description: "by Yuneec Breeze"
    },
    {
      image: "bgr.png",
      date: "August 17, 2017",
      title: "AirSelfie, a pocket-sized camera drone, launches on Kickstarter",
      description: ""
    },
    {
      image: "bgr.png",
      date: "August 16, 2017",
      title: "DJI adds an offline mode to its drones for clients with 'sensitive operations'",
      description: ""
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-center mb-4">Check latest reviews and news</h2>
      <p className="text-center mb-8">Discover rumors, news, comparisons 🔥</p>

      <div className="grid grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={review.image} alt={review.title} className="w-full h-48 object-cover rounded shadow-md mb-4" />
            <p className="text-sm mb-2">{review.date}</p>
            <h3 className="text-md font-semibold mb-1 text-center">{review.title}</h3>
            <p className="text-sm text-gray-600">{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsSection;
