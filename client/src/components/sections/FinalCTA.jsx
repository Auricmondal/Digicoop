import React from "react";
import { ButtonFlippedReveal } from "@/components/ui/Buttons";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/layouts/SectionWrapper";
import CTAImageLeft from "@/assets/images/cooperatives.webp";
import CTAImageRight from "@/assets/images/cooperativeguy.webp";

const FinalCTA = () => {
  return (
    <div className="bg-[#EAF2FF]">
      <SectionWrapper className="max-w-[1460px] mx-auto  flex gap-4">
        {/* Right Half */}
        <div
          className="w-full rounded-lg bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${CTAImageLeft})`,
          }}
        >
          <div className="bg-primary/90 text-white relative w-full h-full rounded-lg flex flex-col gap-8 justify-center items-center py-10 px-8">
            <h2 className="w-[80%] md:text-left text-center text-3xl md:text-4xl font-semibold leading-[1.1] tracking-normal">
              Transparency that builds trust, every step.
            </h2>
            <div className="flex w-[80%] justify-center md:justify-start">
              <ButtonFlippedReveal
                icon={<ArrowRight />}
                hoverIcon={
                  <ArrowUpRight className="text-primary rounded-full" />
                }
                className="bg-[#EAF2FF] text-primary-dark rounded-xl h-[64px] flex items-center font-semibold py-4 px-6"
              >
                Book a Demo Now
              </ButtonFlippedReveal>
            </div>
          </div>
        </div>
        {/* Left Half */}
        <div
          className="hidden md:block bg-cover bg-center bg-no-repeat w-[40%] rounded-xl"
          style={{ backgroundImage: `url(${CTAImageRight})` }}
        ></div>
      </SectionWrapper>
    </div>
  );
};

export default FinalCTA;
