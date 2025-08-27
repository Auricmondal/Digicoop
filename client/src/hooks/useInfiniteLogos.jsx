// Modified useInfiniteLogos.jsx
import { useMemo } from 'react';

const useInfiniteLogos = (logos, containerWidth, itemWidth = 184) => {
  // Use memoization to avoid unnecessary calculations
  const duplicatedLogos = useMemo(() => {
    if (containerWidth > 0 && logos.length > 0) {
      const logosPerScreen = Math.ceil(containerWidth / itemWidth) + 5;
      const requiredSets = Math.ceil(logosPerScreen / logos.length) + 1;
      
      // Limit the maximum number of duplications to prevent performance issues
      const safeRequiredSets = Math.min(requiredSets, 10); // Cap at a reasonable number
      return Array(safeRequiredSets).fill(logos).flat();
    }
    return [];
  }, [containerWidth, logos, itemWidth]);

  return duplicatedLogos;
};

export default useInfiniteLogos;