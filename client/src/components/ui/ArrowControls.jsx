import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const ArrowControls = ({ className, prevSlide, nextSlide, ...props }) => {
  return (
    <div
      className={`${className}`}
      {...props}
    >
      <button
        onClick={prevSlide}
        className="bg-primary hover:bg-primary/50 border border-white/60 rounded-lg p-3 opacity-100 px-6 transition-opacity duration-300 shadow-lg"
        aria-label="Previous slide"
      >
        <ArrowLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="bg-primary hover:bg-primary/50 border border-white/70 rounded-lg p-3 opacity-100 px-6 transition-opacity duration-300 shadow-lg"
        aria-label="Next slide"
      >
        <ArrowRight className="text-white w-6 h-6" />
      </button>
    </div>
  );
};

export default ArrowControls;
