import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_DATA = [
  {
    title: "Compare and Choose the Best Products",
    description: "Discover the perfect product for your needs with our expert insights.",
    imgSrc: "laptopo.jpg",
  },
  {
    title: "Find Amazing Deals and Offers",
    description: "Save money by finding the best deals available right now.",
    imgSrc: "watch.jpg",
  },
  {
    title: "Expert Reviews and Analysis",
    description: "Get insights from industry experts and make informed decisions.",
    imgSrc: "shoes.jpg",
  },
  {
    title: "Join Our Community for Best Insights",
    description: "Be a part of our community and share your knowledge and experiences.",
    imgSrc: "oil.jpg",
  }
];

const HeroSection = () => {
  const [currentPage, setCurrentPage] = useState('page1');
  const [typedTitle, setTypedTitle] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setTypedTitle(''); // Reset immediately when the page changes
  };

  const currentData = HERO_DATA[parseInt(currentPage.replace('page', ''), 10) - 1];

  useEffect(() => {
    setTypedTitle(currentData.title); // Set the title immediately without typing effect
  }, [currentPage, currentData.title]);

  const pageVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 60 } },
    exit: { opacity: 0, x: '100vw', transition: { ease: 'easeInOut' } }
  };

  const imgVariants = {
    hover: { scale: 1.1 }
  };

  return (
    <section className="relative bg-gradient-to-r from-[#198754] to-[#0a3d62] text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
        <AnimatePresence mode='wait'>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageVariants}
            key={currentPage}
            className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left space-y-5"
          >
            <motion.h1 className="text-6xl lg:text-4xl font-serif font-bold leading-snug ml-12 tracking-wide mx-4">{typedTitle}</motion.h1>
            <motion.p className="text-lg lg:text-xl ml-12 tracking-wide leading-relaxed mx-4">{currentData.description}</motion.p>
            {/* Rest of the content */}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="lg:w-1/2 lg:ml-20"
          variants={imgVariants}
          whileHover="hover"
        >
          <img src={currentData.imgSrc} alt="Hero Image" className="w-80 h-52 mr-6 ml-24 object-cover rounded-lg shadow-2xl" />
        </motion.div>
      </div>
      <div className="flex justify-center items-center mt-10 space-x-4">
        {['page1', 'page2', 'page3', 'page4'].map((page, idx) => (
          <label key={idx} className="block relative cursor-pointer mb-2">
            <input
              type="radio"
              name="page"
              value={page}
              checked={currentPage === page}
              onChange={() => handlePageChange(page)}
              className="hidden"
            />
            <motion.div
              whileHover={{ scale: 1.25 }}
              className={`w-4 mx-1 h-4 border-4 rounded-full transform transition-all
                ${currentPage === page ? `border-${["indigo", "red", "yellow", "green"][idx]}-600 bg-${["indigo", "red", "yellow", "green"][idx]}-600 scale-150` : 'border-white hover:border-indigo-600'}
              `}></motion.div>
          </label>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
