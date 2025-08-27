import React from "react";
import Explore from "@/components/shared/Explore";

const DemoCard = ({ subsection, index, isReversed }) => {
  // Alternating background colors
  const getBackgroundColor = (index) => {
    // 1st and 3rd (index 0, 2) - Blue gradient
    // 2nd and 4th (index 1, 3) - Light blue background
    if (index % 2 === 0) {
      return "bg-md-tint"; // Blue gradient for 1st, 3rd
    } else {
      return "bg-dark-tint"; // Light blue background for 2nd, 4th
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-10 ${isReversed ? "lg:flex-row-reverse" : ""}`}>

                  <div className="w-full lg:w-[389px] h-auto lg:h-[320px] flex flex-col justify-center gap-6 py-6 opacity-100 text-center lg:text-left order-1 lg:order-none"
                  >
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

                  <div className="flex-1 order-2 lg:order-none">
                    <div
                      className={`w-full h-full ${getBackgroundColor(index)} rounded-2xl flex items-center justify-center p-2 overflow-hidden`}
                    >
                      <img
                        src={subsection.img}
                        alt={`${subsection.title} Preview`}
                        className="max-w-full max-h-full object-contain rounded-lg translate-transform translate-y-10 translate-x-15"
                      />
                    </div>
                  </div>
                </div>
  );
};

export default DemoCard;
