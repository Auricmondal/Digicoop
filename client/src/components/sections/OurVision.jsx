import React from "react";
import SectionWrapper from "@/layouts/SectionWrapper";
import AnimatedHeader from "@/components/ui/AnimatedHeader";

const OurVision = () => {
  return (
    <SectionWrapper className="bg-[linear-gradient(107.86deg,_var(--color-primary)_40.38%,_var(--color-dark-tint)_100%)] text-white flex flex-col gap-8 items-center">
      {/* Heading */}
      <div className="text-[32px] font-semibold ">
        <AnimatedHeader
          words={[
            { text: "Our", isGradient: false },
            { text: "Vision", isGradient: false },
          ]}
          className="text-white text-center text-[32px] justify-center"
        />
      </div>
      <div className="max-w-[1460px] mx-auto flex flex-col gap-6">
        {/* Intro Paragraph */}
        <p className="text-base md:text-xl lg:text-2xl  text-center">
          Cooperatives are more than just a legal form – they are an idea:
          people come together to achieve economic, social and cultural goals.
          They stand for self-help, democracy and responsibility – principles
          that we continue to uphold today with modern means.
        </p>
        {/* Platform Vision Paragraph */}
        <p className="text-base md:text-xl lg:text-2xl text-center">
          Our platform translates this legacy into digital practice:
        </p>
        {/* Bullet Points */}
        <ul className="list-disc list-outside pl-6 text-base md:text-xl lg:text-2xl  mspace-y-2">
          <li>
            Transparency and traceability through centralised, audit-proof
            processes.
          </li>
          <li>
            Co-determination and access through simple digital participation
            channels.
          </li>
          <li>
            Effectiveness and scaling through standardised, automated processes.
          </li>
        </ul>
        {/* Closing Line */}
        <p className="text-base md:text-xl lg:text-2xl max-w-[1460px] mx-auto text-center italic font-light">
          In this way, the cooperative idea remains what it always was: a
          timeless promise that becomes reality through cooperation.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default OurVision;
