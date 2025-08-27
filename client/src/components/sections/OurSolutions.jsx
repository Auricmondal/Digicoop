import React from "react";
import { SolutionCard } from "../ui/Cards";
import { GradientBadge } from "../ui/Badges";
import SolutionsImage from "../../assets/images/solutions.webp";
import SectionWrapper from "../../layouts/SectionWrapper";
import AnimatedHeader from "../ui/AnimatedHeader";

const OurSolutions = () => {
  const solutions = [
    {
      image: SolutionsImage,
      title: "Digital Administration",
      subtitle:
        "DigiV is your cooperative’s command center. Manage memberships, shares, documents, and governance processes online — fast, secure, and fully compliant. No more paperwork, just clarity and control.",
      buttontext: "Discover DigiV",
    },
    {
      image: SolutionsImage,
      title: "Audits Made Effortless",
      subtitle:
        "DigiAudit provides a structured, transparent audit trail. From document requests to final reports, every step is clear, traceable, and digital — saving your team valuable time and reducing audit costs.",
      buttontext: "Discover DigiAudit",
    },
  ];

  return (
    <SectionWrapper className="">
      {/*Parent Background*/}
      <div className="flex flex-col items-center gap-4 max-w-[1460px] mx-auto">
        <GradientBadge text="Our Solutions" />

        {/* Title */}
        <h2 className="flex flex-col items-center justify-center text-center text-4xl md:text-5xl font-semibold leading-[1.1] tracking-normal">
          {/* Smarter Tools for Stronger  */}
          <AnimatedHeader
            words={[
              { text: "Smarter", isGradient: false },
              { text: "Tools", isGradient: false },
              { text: "for", isGradient: false },
              { text: "Stronger", isGradient: false },
              { text: "Cooperatives", isGradient: true, isBreak: true },
            ]}
            className="font-semibold text-black text-center text-4xl md:text-5xl justify-center leading-[1.1] tracking-normal"
          />
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-md md:text-lg max-w-2xl text-gray-400 text-center">
          Practical, compliant, and easy to use - our tools give cooperatives
          the clarity and control they need.
        </p>
      </div>

      {/* Responsive Grid*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 ">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            image={solution.image}
            title={solution.title}
            subtitle={solution.subtitle}
            buttontext={solution.buttontext}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
export default OurSolutions;
