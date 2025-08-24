import React, { useEffect, useState } from 'react'

// Custom hook for infinite scroll logo duplication
const useInfiniteLogos = (logos, containerWidth, itemWidth = 184) => {
  const [duplicatedLogos, setDuplicatedLogos] = useState([]);

  useEffect(() => {
    if (containerWidth > 0 && logos.length > 0) {
      const logosPerScreen = Math.ceil(containerWidth / itemWidth) + 2;
      const requiredSets = Math.ceil(logosPerScreen / logos.length) + 1;
      
      const extendedLogos = Array(requiredSets).fill(logos).flat();
      setDuplicatedLogos(extendedLogos);
    }
  }, [containerWidth, logos, itemWidth]);

  return duplicatedLogos;
};

export default useInfiniteLogos;