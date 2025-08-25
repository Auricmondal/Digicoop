import React from 'react'
import { motion } from 'framer-motion'

// Logo Item Component
const LogoItem = ({ logo, index }) => {
  return (
    <motion.div
      className="flex-shrink-0 mx-16 flex items-center justify-center"
      style={{ minWidth: '120px' }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <motion.img
        src={logo.src}
        alt={logo.name}
        className="h-12 w-auto object-contain"
        initial={{ opacity: 0.4, filter: "grayscale(100%)" }}
        animate={{ opacity: 0.4, filter: "grayscale(100%)" }}
        whileHover={{ 
          opacity: 1, 
          filter: "grayscale(0%)",
          transition: { duration: 0.3 }
        }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </motion.div>
  );
};

export default LogoItem;