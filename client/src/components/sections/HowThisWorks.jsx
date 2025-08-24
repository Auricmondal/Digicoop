import React from "react";
import HowThisWorks1 from "../../assets/images/HowThisWorks1.webp";
import DemoCard from "../ui/DemoCard";
import { GradientBadge } from "../ui/Badges";
import SectionWrapper from "../../layouts/SectionWrapper";

const HowThisWorks = () => {
  const subsections = [
    {
      title: "Join & Manage with DigiV",
      description:
        "Start by bringing your cooperative online. With DigiV, members can join in minutes, administrators can manage shares and rentals, and all governance documents stay securely stored in one place.",
      img: HowThisWorks1,
    },
    {
      title: "Keep Everything Organized",
      description:
        "From member lists and resolutions to loan agreements and financial statements, DigiV ensures every critical record is version-secure and always ready when you need it.",
      img: HowThisWorks1,
    },
    {
      title: "Prepare for Audits Effortlessly",
      description:
        "When it's time for review, DigiAudit steps in. It creates a structured, transparent audit trail where all documents and processes are accessible in one central folder.",
      img: HowThisWorks1,
    },
    {
      title: "Save Time and Reduce Costs",
      description:
        "With guided workflows, automatic checks, and fewer manual steps, audits become faster, clearer, and far less expensive — leaving more resources for your cooperative's growth.",
      img: HowThisWorks1,
    },
  ];

  return (
    <SectionWrapper className="bg-tint">
      {/* ^ background uses Tint #EAF2FF */}

      <div className="max-w-[1460px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          {/* Pill with gradient border */}
          <GradientBadge text={"How This Works"} />

          {/* Header content container with responsive sizing */}
          <div className="w-full max-w-[90%] sm:max-w-[600px] lg:max-w-[724px] h-auto lg:h-[168px] mx-auto flex flex-col justify-center gap-2 lg:gap-[10px] opacity-100">
            <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.01em] text-primary-dark mb-4">
              {/* ^ Primary Dark #001F52 */}
              From Chaos to{" "}
              <span className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.01em] bg-gradient-to-r from-primary to-dark-tint bg-clip-text text-transparent">
                Clarity
              </span>
              {/* ^ Dark Tint #467FFD */}
            </h2>

            <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.25rem] font-normal leading-[1.6] tracking-[0] text-center text-black ">
              DigiCoop turns complex cooperative tasks into a smooth digital
              flow — one place for members, documents, and audits that just
              works.
            </p>
          </div>
        </div>

        {/* Subsections */}
        <div className="space-y-16 lg:space-y-24">
          {subsections.map((subsection, index) => (
            <React.Fragment key={index}>
              <DemoCard
                subsection={subsection}
                index={index}
                isReversed={index % 2 === 1}
              />

              {/* Responsive Divider Line - Only show between sections (not after last one) */}
              {index < subsections.length - 1 && (
                <hr className="w-full lg:hidden mx-auto border-0 border-t border-dark-tint/80" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowThisWorks;
