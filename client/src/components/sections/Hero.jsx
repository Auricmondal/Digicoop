import React from "react";
import LeftSection from "./LeftHero";
import RightSection from "./RightHero";

const Hero = () => {
  return (
    <div className="md:grid grid-cols-7 min-h-[95vh] mx-auto">
      <div className="col-span-4 h-full px-12">
        <LeftSection />
      </div>
      <div className="col-span-3 h-full">
        <RightSection />
      </div>
    </div>
  );
};

export default Hero;
