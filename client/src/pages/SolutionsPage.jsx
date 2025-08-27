import React from "react";
import HowThisWorks from "@/components/sections/HowThisWorks";
import SolutionsHero from "@/components/sections/SolutionsHero";

const SolutionsPage = () => {
  return (
    <div>
      <SolutionsHero />
      <HowThisWorks isStraight={true} />
    </div>
  );
};

export default SolutionsPage;
