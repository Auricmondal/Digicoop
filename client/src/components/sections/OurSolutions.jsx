import React from "react";
import { SolutionCard } from "../ui/Cards";
import { GradientBadge } from "../ui/Badges";
import HeroImage from "../../assets/images/solutions.webp";

const OurSolutions = () => {
  return (
    <div className="py-6 px-6">
      {/*Parent Background*/}
      <div className="flex flex-col items-center gap-4">
        <GradientBadge text="Our Solutions" />

        {/* Title */}
        <h2 className="flex flex-col items-center justify-center text-center">
          Smarter Tools for Stronger <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-dark-tint font-semibold">
            Cooperatives
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-center">
          Practical, compliant, and easy to use - our tools give cooperatives
          the clarity and control they need.
        </p>
      </div>

      {/* Responsive Grid*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 md:mx-8">
        <SolutionCard
          image={HeroImage}
          title={`Digital Administration`}
          subtitle={`DigiV is your cooperative’s command center. Manage memberships, shares, documents, and governance processes online — fast, secure, and fully compliant. No more paperwork, just clarity and control.`}
          buttontext={`Discover DigiV`}
        />
        <SolutionCard
          image ={HeroImage}
          title={`Audits Made Effortless`}
          subtitle={`DigiAudit provides a structured, transparent audit trail. From document requests to final reports, every step is clear, traceable, and digital — saving your team valuable time and reducing audit costs.`}
          buttontext={`Discover DigiAudit`}
        />
      </div>
    </div>
  );
};
export default OurSolutions;
