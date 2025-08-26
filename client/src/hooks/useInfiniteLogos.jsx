import React, { useEffect, useRef } from 'react'

// Custom hook for infinite scroll logo duplication
const useInfiniteLogos = (logos, containerWidth, itemWidth = 184) => {
  const duplicatedLogos = useRef([]);

  useEffect(() => {
    if (containerWidth > 0 && logos.length > 0) {
      const logosPerScreen = Math.ceil(containerWidth / itemWidth) + 5;
      const requiredSets = Math.ceil(logosPerScreen / logos.length) + 1;
      
      const extendedLogos = Array(requiredSets).fill(logos).flat();
      duplicatedLogos.current = extendedLogos;
    }
  }, [containerWidth, logos, itemWidth]);

  return duplicatedLogos.current;
};

export default useInfiniteLogos;