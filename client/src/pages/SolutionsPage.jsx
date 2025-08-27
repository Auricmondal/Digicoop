import React from "react";

import HowThisWorks from "../components/sections/HowThisWorks";

import SolutionsHero from "@/components/sections/SolutionsHero";


const SolutionsPage = () => {
  return (
    <div>

      <HowThisWorks isStraight={true} />

      <SolutionsHero />

    </div>
  );
};

export default SolutionsPage;
