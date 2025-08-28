import React from "react";
import legacyImage from "@/assets/images/legacy.webp";
import SectionWrapper from "@/layouts/SectionWrapper";
import { QuoteCard } from "@/components/ui/Cards";
import AnimatedHeader from "@/components/ui/AnimatedHeader";

const LegacySection = () => {
  const quotes = [
    {
      quote: "What is impossible for one individual is possible for many",
    },
    {
      quote: "Help for self-help – an urban concept.",
    },
  ];
  return (
    <SectionWrapper className="max-w-[1460px] mx-auto">
      <div className="m-8 flex justify-center">
        <AnimatedHeader
          words={[
            { text: "Carrying", isGradient: false },
            { text: "the", isGradient: false },
            { text: "Legacy", isGradient: false },
            { text: "Forward", isGradient: false },
          ]}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center justify-center mx-auto text-black"
        />
      </div>

      <div className="bg-dark-tint text-white rounded-md px-6 py-8 flex flex-col md:flex-row justify-between gap-6 text-center sm:text-left mb-8 md:mb-16">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote.quote} />
        ))}
      </div>
      {/* Today Section */}
      <div className="space-y-3">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Today: energy, housing and platform cooperatives
        </h3>
        <p className="text-base md:text-lg lg:text-xl font-normal">
          The idea lives on – locally, digitally, effectively. From energy to
          housing to platform cooperatives, members pool capital, data,
          expertise and demand to operate in a resilient and sustainable manner.
          In doing so, they combine a focus on the common good with professional
          corporate management – regionally anchored, internationally networked.
        </p>
      </div>

      {/* Why We Choose Section */}
      <div className="space-y-3">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Why we choose these role models
        </h3>
        <p className="text-base md:text-lg lg:text-xl font-normal">
          They represent self-help, democracy and responsibility — principles we
          bring into the digital age.
        </p>
      </div>

      {/* Bridge to DigiCoop Section */}
      <div className=" space-y-3">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Bridge to DigiCoop
        </h3>
        <p className="text-base md:text-lg lg:text-xl font-normal">
          By combining the cooperative legacy with technology, we ensure that
          solidarity, transparency, and participation remain relevant and
          impactful in a digital-first world.
        </p>
      </div>

      <div className="h-[564px] rounded overflow-hidden mt-4">
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
