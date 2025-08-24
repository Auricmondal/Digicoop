import React from "react";
import { SolutionCard } from "../ui/Cards";
import { GradientBadge } from "../ui/Badges";

const OurSolutions = () => {
  return (
    <div className="bg-amber-100">
      {/*Parent Background*/}
      <div className="bg-cyan-100 flex flex-col justify-between items-center p-5">
        <GradientBadge text="Our Solutions" />

        <div className="">
          {/* Title */}
          Smarter Tools for Stronger <span>Cooperatives</span>
        </div>

        <div className="text-center">
          {/* Subtitle */}
          Practical, compliant, and easy to use - our tools give cooperatives
          the clarity and control they need.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Responsive Grid*/}
        <SolutionCard title="Digital Administration" subtitle="DigiV is your cooperative’s command center. Manage memberships, shares, documents, and governance processes online — fast, secure, and fully compliant. No more paperwork, just clarity and control." buttontext="Discover DigiV"/>
      </div>
    </div>
  );
};
export default OurSolutions;
