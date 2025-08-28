import React from "react";
import { GradientBadge } from "@/components/ui/Badges";
import SectionWrapper from "@/layouts/SectionWrapper";
import AnimatedHeader from "@/components/ui/AnimatedHeader";

const WordsFromCEO = () => {
  return (
    <SectionWrapper className="">
      <div className="flex flex-col items-center gap-4 max-w-[1460px] mx-auto">
        <GradientBadge text="Word from the CEO" />

        <h2 className="flex flex-col items-center justify-center text-center text-4xl md:text-5xl font-semibold leading-[1.1] tracking-normal max-w-[500px]">
          <AnimatedHeader
            words={[
              { text: "Experience", isGradient: false },
              { text: "Digital", isGradient: false },
              { text: "Governance", isGradient: false },
              { text: "in", isGradient: false },
              { text: "Action", isGradient: true },
            ]}
            className="font-semibold text-black text-center text-4xl md:text-5xl justify-center leading-[1.1] tracking-normal"
          />
        </h2>

        <p className="mt-4 text-md md:text-lg max-w-2xl text-black text-center">
          In just a few minutes, discover how DigiCoop transforms cooperative
          management into a streamlined, compliant, and transparent digital
          process.
        </p>
      </div>
      <div className="h-[400px] md:h-[593px] bg-custom-neutral-700 mt-10 rounded-lg flex items-center justify-center text-white text-xl max-w-[1460px] mx-auto">
        <video
          src="https://www.youtube.com/watch?v=QmP9wr_plTA&ab_channel=StartCodingWithMe"
          className="w-full h-full object-cover rounded-lg"
          controls
        />
      </div>
    </SectionWrapper>
  );
};

export default WordsFromCEO;
