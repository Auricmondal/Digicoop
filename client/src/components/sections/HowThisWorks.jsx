import React from "react";
import solutions from "@/assets/images/solutions.webp";
import DemoCard from "@/components/ui/DemoCard";
import { GradientBadge } from "@/components/ui/Badges";
import SectionWrapper from "@/layouts/SectionWrapper";
import AnimatedHeader from "@/components/ui/AnimatedHeader";

const HowThisWorks = () => {
  const subsections = [
    {
      title: "Join & Manage with DigiV",
      description:
        "Start by bringing your cooperative online. With DigiV, members can join in minutes, administrators can manage shares and rentals, and all governance documents stay securely stored in one place.",
      img: solutions,
    },
    {
      title: "Keep Everything Organized",
      description:
        "From member lists and resolutions to loan agreements and financial statements, DigiV ensures every critical record is version-secure and always ready when you need it.",
      img: solutions,
    },
    {
      title: "Prepare for Audits Effortlessly",
      description:
        "When it's time for review, DigiAudit steps in. It creates a structured, transparent audit trail where all documents and processes are accessible in one central folder.",
      img: solutions,
    },
    {
      title: "Save Time and Reduce Costs",
      description:
        "With guided workflows, automatic checks, and fewer manual steps, audits become faster, clearer, and far less expensive — leaving more resources for your cooperative's growth.",
      img: solutions,
    },
  ];

  return (
    <SectionWrapper className="bg-tint">
      {/* ^ background uses Tint #EAF2FF */}

      <div className="max-w-[1460px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col justify-center text-center gap-4">
          {/* Pill with gradient border */}
          <span>
            <GradientBadge text={"How This Works"} />
          </span>

          {/* Header content container with responsive sizing */}
          <div className="w-full max-w-[90%] sm:max-w-[600px] lg:max-w-[724px] h-auto lg:h-[168px] mx-auto flex flex-col justify-center gap-2 lg:gap-[10px] opacity-100">
            {/* ^ Primary Dark #001F52 */}
            {/* ^ Dark Tint #467FFD */}
            <AnimatedHeader
              words={[
                { text: "From", isGradient: false },
                { text: "Chaos", isGradient: false },
                { text: "to", isGradient: false },
                { text: "Clarity", isGradient: true },
              ]}
              className="text-primary-dark text-center text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.01em] justify-center mb-4"
            />

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
