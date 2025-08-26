import React from "react";
import aboutHero from "../../assets/images/about-hero.webp";
import { AboutGradientBadge, GradientBadge } from "../ui/Badges";
import SectionWrapper from "../../layouts/SectionWrapper";
import AnimatedHeader from "../ui/AnimatedHeader";

const AboutHero = () => {
  return (
    <SectionWrapper className="bg-[linear-gradient(55.96deg,_var(--color-primary)_32.82%,_var(--color-dark-tint)_97.21%)] text-white pb-16 ">
      <div className="flex flex-col gap-5 items-center text-center py-10">
        <AboutGradientBadge text={"Meet The Team"} />
        <div className="max-w-[764px] p-1 px-10">
          <AnimatedHeader
            words={[
              { text: "Carrying", isGradient: false },
              { text: "a", isGradient: false },
              { text: "Legacy", isGradient: false },
              { text: "Into", isGradient: false },
              { text: "the", isGradient: false },
              { text: "Digital", isGradient: false },
              { text: "Future", isGradient: false },
            ]}
            className="text-white text-center text-[28px] md:text-[40px] lg:text-5xl font-semibold  justify-center"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:px-4">
        <div
          className="relative rounded-[30px] overflow-hidden bg-cover bg-center bg-no-repeat px-4 sm:px-8 pt-10 pb-4 md:pb-10 text-white aspect-[8/9] sm:aspect-[16/9] md:aspect-[21/9] flex items-end"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary pointer-events-none z-0" />

          <div className="relative z-10 flex flex-wrap sm:justify-start items-end gap-y-2 gap-x-8 sm:gap-10 lg:gap-14 w-full">
            <div className="sm:w-[153px]">
              <span className="font-semibold text-custom-neutral-300 text-[14px] md:text-base">
                Location
              </span>
              <br />
              <span className="font-semibold text-white text-base md:text-xl">
                Berlin, Germany
              </span>
            </div>
            <div className="sm:w-[153px]">
              <span className="font-semibold text-custom-neutral-300 text-[14px] md:text-base">
                Founded By
              </span>
              <br />
              <span className="font-semibold text-white text-base md:text-xl">
                John Doe
              </span>
            </div>
            <div className="sm:w-[153px]">
              <span className="font-semibold text-custom-neutral-300 text-[14px] md:text-base">
                Founded in
              </span>
              <br />
              <span className="font-semibold text-white text-base md:text-xl">
                2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutHero;
