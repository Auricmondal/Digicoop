import React from "react";
import HowThisWorks from "@/components/sections/HowThisWorks";
import SolutionsHero from "@/components/sections/SolutionsHero";
import WordsFromCEO from "@/components/sections/WordsFromCEO";
import Brands from "@/components/sections/Brands";

const SolutionsPage = () => {
  return (
    <div>
      <SolutionsHero />
      <Brands />
      <HowThisWorks isStraight={true} />
      <WordsFromCEO />
    </div>
  );
};

export default SolutionsPage;
