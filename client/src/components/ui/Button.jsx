import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import React from "react";

export function ButtonFlippedReveal({ text }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-[2px] flex items-center justify-center bg-primary text-white relative border-transparent rounded-2xl w-[154px] h-[58px] m-0"
      style={{
        borderImage:
          "linear-gradient(93.63deg, rgba(255, 255, 255, 0.35) 3.45%, rgba(153, 153, 153, 0) 117.37%) 1",
      }}
    >
      <AnimatePresence mode="wait">
        {!hovered ? (
          <motion.span
            key="normal"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute"
          >
            {text}
          </motion.span>
        ) : (
          <motion.span
            key="flipped"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute rotate-180"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export function ButtonOutlineHoverSolid({ text }) {
  return (
    <button className="border-2 border-dark-tint text-dark-tint hover:text-white hover:bg-dark-tint w-[154px] h-[58px] rounded-2xl bg-transparent ">
      {text}
    </button>
  );
}
