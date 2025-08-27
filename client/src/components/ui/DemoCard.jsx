import React from "react";
import Explore from "../shared/Explore";
import SolutionsBg from "../../assets/images/solutions-bg.jpg";

const DemoCard = ({ subsection, index, isReversed, isStraight = false }) => {
  // Different background colors based on isStraight prop
  const getBackgroundColor = (index, isStraight) => {
    if (isStraight) {
      // For straight layout, use green/teal color scheme
      if (index % 2 === 0) {
        return "bg-cover bg-center"; // Light green for even indices
      } else {
        return "bg-dark-tint"; // Light teal for odd indices
      }
    } else {
      // Original alternating blue scheme
      if (index % 2 === 0) {
        return "bg-md-tint"; // Blue gradient for 1st, 3rd
      } else {
        return "bg-dark-tint"; // Light blue background for 2nd, 4th
      }
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-10 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
      <div className="flex-1 order-2 lg:order-none">
        <div
          className={`w-full h-full ${getBackgroundColor(index, isStraight)} rounded-2xl flex items-center justify-center p-2 overflow-hidden relative`}
        >
          {/* Background layer with brightness filter */}
          {isStraight && index % 2 === 0 && (
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{
                backgroundImage: `url(${SolutionsBg})`,
                backgroundSize: '130%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.8)'
              }}
            />
          )}

          <img
            src={subsection.img}
            alt={`${subsection.title} Preview`}
            className="max-w-full max-h-full object-contain rounded-lg translate-transform translate-y-10 translate-x-15 relative z-10"
          />
        </div>
      </div>

      <div className="w-full lg:w-[389px] h-auto lg:h-[320px] flex flex-col justify-center gap-6 py-6 opacity-100 text-center lg:text-left order-1 lg:order-none">
        {/* H3 Title */}
        <h3 className="text-[1.125rem] sm:text-[1.375rem] lg:text-[1.75rem] font-semibold leading-[1.25] tracking-[0em] text-center lg:text-left text-black ">
          {subsection.title}
        </h3>

        {/* Body text */}
        <p className="text-[1rem] lg:text-[1.125rem] font-normal leading-[1.6] tracking-[0em] text-center lg:text-left text-black ">
          {subsection.description}
        </p>

        {/* Shared Explore button */}
        <div className="flex justify-center lg:justify-start">
          <Explore />
        </div>
      </div>

    </div>
  );
};

export default DemoCard;
