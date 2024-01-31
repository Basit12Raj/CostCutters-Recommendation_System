import React from 'react';
import { motion } from 'framer-motion';

function InterestingSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1.5,
        type: 'spring',
        stiffness: 80,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-[#198754] to-[#0a3d62] h-28 flex flex-col justify-center items-center text-white shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl font-bold mb-2"
        variants={textVariants}
      >
        Found something interesting ?
      </motion.h1>
      <motion.p
        className="text-xl"
        variants={textVariants}
      >
        Elevate Your Experience Today!
      </motion.p>
    </motion.div>
  );
}

export default InterestingSection;
