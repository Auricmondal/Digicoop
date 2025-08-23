import React from "react";
import LeftSection from "./LeftHero";
import RightSection from "./RightHero";

const Hero = () => {
  return (
    <div className="md:flex min-h-[95vh] mx-auto">
      <div className="flex-1 flex items-center justify-center px-12">
        <LeftSection />
      </div>
      <RightSection />
    </div>
  );
};

export default Hero;
