import React from "react";
import HowThisWorks from "@/components/sections/HowThisWorks";
import SolutionsHero from "@/components/sections/SolutionsHero";

import WordsFromCEO from "@/components/sections/WordsFromCEO";
import Brands from "@/components/sections/Brands";

import ActualResults from "@/components/sections/ActualResults";
import FinalCTA from "@/components/sections/FinalCTA";


const SolutionsPage = () => {
  return (
    <div>
      <SolutionsHero />
      <Brands />
      <HowThisWorks isStraight={true} />

      <WordsFromCEO />

      <ActualResults />
      <FinalCTA />

    </div>
  );
};

export default SolutionsPage;
