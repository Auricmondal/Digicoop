import React from "react";
import SectionWrapper from "@/layouts/SectionWrapper";
import AnimatedHeader from "@/components/ui/AnimatedHeader";

const OurVision = () => {
  return (
    <SectionWrapper className="bg-[linear-gradient(107.86deg,_var(--color-primary)_40.38%,_var(--color-dark-tint)_100%)] text-white flex flex-col gap-8 items-center">
      <div className="text-[32px] font-semibold">
        <AnimatedHeader
          words={[
            { text: "Our", isGradient: false },
            { text: "Vision", isGradient: false },
          ]}
          className="text-white text-center text-[32px] justify-center"
        />
      </div>
      <p className="text-base md:text-xl lg:text-2xl lg:px-[12vw] md:px-8 max-w-[2460px]">
        At DigiCoop, our vision is simple: bring the timeless values of
        cooperatives — self-help, democracy, and shared responsibility — into
        the digital age. We want every cooperative, no matter its size, to have
        access to tools that make management transparent, participation easy,
        and auditing seamless. By combining cooperative heritage with modern
        technology, we empower organizations to focus on what truly matters:
        their members and their mission.
      </p>
    </SectionWrapper>
  );
};

export default OurVision;
