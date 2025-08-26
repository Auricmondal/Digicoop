import React from "react";
import cooperativeGuy from "../../assets/images/cooperativeguy.webp";
import groupWork from "../../assets/images/group-work.webp";
import SimpleCard from "../ui/SimpleCard";
import SectionWrapper from "../../layouts/SectionWrapper";

const HowThisWorks = () => {
  const subsections = [
    {
      description:
        "The idea for DigiCoop was born out of a clear need: cooperatives around the world were still relying on paperwork, manual processes, and fragmented systems that slowed them down. Inspired by the pioneers of the cooperative movement — from Raiffeisen’s rural solidarity to the Rochdale weavers’ principles of democracy — we asked ourselves: what if these same values could be supported by digital tools?",
      img: cooperativeGuy,
    },
    {
      description:
        "That question shaped our mission. We set out to design a platform that would simplify everyday cooperative tasks like onboarding, governance, and auditing — while staying true to the principles that built the cooperative movement.",
      img: groupWork,
    },
  ];

  return (
    <SectionWrapper className="bg-white">
      {/* ^ background uses Tint #EAF2FF */}

      <div className="max-w-[1460px] flex flex-col mx-auto lg:gap-8">
        {/* Section Header */}
        <div className="flex flex-col justify-center text-center">

          {/* Header content container  */}
          <div className="text-[32px] font-semibold lg:pb-4">How We Started</div>
        </div>

        {/* Subsections */}
        <div className="space-y-16 lg:space-y-24">
          {subsections.map((subsection, index) => (
            <React.Fragment key={index}>
              <SimpleCard
                subsection={subsection}
                isReversed={index % 2 === 1}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowThisWorks;
