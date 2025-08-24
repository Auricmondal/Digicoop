import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Custom hook for container width detection
const useContainerWidth = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  return { containerRef, containerWidth };
};

export default useContainerWidth;