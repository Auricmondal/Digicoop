import React from "react";
import legacyImage from "../../assets/images/legacy.webp";
import SectionWrapper from "../../layouts/SectionWrapper";
import { QuoteCard } from "../ui/Cards";

const LegacySection = () => {
  return (
    <SectionWrapper className="max-w-[1460px] mx-auto">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center m-8">
        Carrying the Legacy Forward
      </h2>

      <p className="text-base md:text-2xl text-center md:text-start mb-4">
        The cooperative story is filled with innovators:
      </p>

      <div className="bg-dark-tint text-white rounded-md px-6 py-8 flex flex-col md:flex-row justify-between gap-6 text-center sm:text-left mb-8 md:mb-16">
        <QuoteCard quote="Trebor Scholz, who reimagined cooperation in the digital space." />

        <QuoteCard quote="José Maria Arizmendiarrieta, who showed that entrepreneurship can be member-owned." />
      </div>
      <p className="text-gray-700 md:text-xl lg:text-2xl mb-8">
        We see DigiCoop as the next step in this legacy. By offering audit-proof processes, simple participation channels, and automated workflows, we bring the cooperative idea into practice for the 21st century. For us, the cooperative idea remains what it has always been: a timeless promise that grows stronger through cooperation.
      </p>

      <div className="h-[564px] rounded overflow-hidden ">
        <img
          src={`${legacyImage}`}
          alt="Team working with sticky notes"
          className="h-full w-full object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default LegacySection;