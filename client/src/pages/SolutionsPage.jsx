import React from "react";
import HowThisWorks from "@/components/sections/HowThisWorks";
import SolutionsHero from "@/components/sections/SolutionsHero";
import ActualResults from "@/components/sections/ActualResults";
import FinalCTA from "@/components/sections/FinalCTA";

const SolutionsPage = () => {
  return (
    <div>
      <SolutionsHero />
      <HowThisWorks isStraight={true} />
      <ActualResults />
      <FinalCTA />
    </div>
  );
};

export default SolutionsPage;
