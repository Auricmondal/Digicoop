import React, { useEffect, useState } from "react";

const useDirectionReversal = (reversePeriod) => {
  const [direction, setDirection] = useState(1);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!reversePeriod) return;

    const interval = setInterval(() => {
      setDirection((prev) => -prev);
      setAnimationKey((prev) => prev + 1);
    }, reversePeriod * 1000);

    return () => clearInterval(interval);
  }, [reversePeriod]);

  return { direction, animationKey };
};

export default useDirectionReversal;
