import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStore, faStar } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white p-16 font-poppins shadow-lg rounded-lg">
      <h1 className="text-5xl font-semibold text-blue-800 mb-4">Let's Compare</h1>
      <p className="text-xl font-medium text-gray-800 mb-12">Choose your product with precise comparisons</p>
      <div className="flex flex-row justify-around space-x-10">
        <div className="flex flex-col items-center justify-center space-y-4 hover:text-blue-700 transition-transform transform hover:scale-105 duration-300">
          <FontAwesomeIcon icon={faCheck} className="text-6xl text-blue-600" />
          <p className="text-lg font-medium text-gray-700">Review Your Choices</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 hover:text-blue-700 transition-transform transform hover:scale-105 duration-300">
          <FontAwesomeIcon icon={faStore} className="text-6xl text-blue-600" />
          <p className="text-lg font-medium text-gray-700">Explore Multi-Vendors</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 hover:text-blue-700 transition-transform transform hover:scale-105 duration-300">
          <FontAwesomeIcon icon={faStar} className="text-6xl text-blue-600" />
          <p className="text-lg font-medium text-gray-700">Relish the Results</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
