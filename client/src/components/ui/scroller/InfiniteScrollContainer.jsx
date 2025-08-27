import React from "react";
import { motion } from "framer-motion";
import useDirectionReversal from "@/hooks/useDirectionReversal";

const InfiniteScrollContainer = ({
  children,
  oneSetWidth,
  duration = 25,
  reversePeriod = null,
}) => {
  const { direction, animationKey } = useDirectionReversal(reversePeriod);

  return (
    <motion.div
      key={`scroll-${animationKey}-${direction}`}
      className="flex"
      animate={{
        x: direction === 1 ? [0, -oneSetWidth] : [0, oneSetWidth],
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      }}
      style={{ width: "max-content" }}
    >
      {children}
    </motion.div>
  );
};

export default InfiniteScrollContainer;
