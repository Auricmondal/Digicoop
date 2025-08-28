import React from "react";
import cooperativeGuy from "@/assets/images/cooperativeguy.webp";
import groupWork from "@/assets/images/group-work.webp";
import SimpleCard from "@/components/ui/SimpleCard";
import SectionWrapper from "@/layouts/SectionWrapper";
import AnimatedHeader from "@/components/ui/AnimatedHeader";

const HowThisWorks = () => {
  const subsections = [
    {
      description: (
        <>
          {/* Raiffeisen */}
          <p>
            <span className="font-semibold">Friedrich Wilhelm Raiffeisen </span>
            <span>
              showed how self-organised solidarity can overcome poverty and fuel
              regional development. His blueprint for rural cooperatives
              worldwide was rooted in trust, responsibility, and the common
              good.
            </span>
          </p>
          <p className="space-y-1">
            <span className="font-semibold">Hermann Schulze- </span>
            <span>
              professionalised the urban cooperative movement by combining
              economic rationality with democratic participation, laying the
              foundation for modern credit and commodity cooperatives.
            </span>
          </p>
          <p className="space-y-3">
            <span className="font-semibold">
              The Rochdale Pioneers ${`(1844) `}
            </span>
            <span>
              established principles still relevant today: open membership,
              democratic control, transparency, and education.
            </span>
          </p>
        </>
      ),
      img: cooperativeGuy,
    },
    {
      description: (
        <>
          <p>
            <span className="font-semibold">Louise Otto-Peters </span>
            <span>
              demonstrated that cooperatives are also instruments of social
              participation and justice, strengthening women’s independence and
              self-organisation.
            </span>
          </p>
          <p className="space-y-2">
            <span className="font-semibold">Alphonse Desjardins </span>
            <span>
              created savings and credit cooperatives as social infrastructure,
              making financial services affordable and accessible.
            </span>
          </p>
        </>
      ),
      img: groupWork,
    },
    {
      description: (
        <>
          <p>
            <span className="font-semibold">José María Arizmendiarrieta </span>
            <span>
              built Mondragón after WWII, proving that education, solidarity,
              and diversification could create one of the world’s most
              innovative cooperative networks.
            </span>
          </p>
          <p className="space-y-2">
            <span className="font-semibold">Elinor Ostrom </span>
            <span>
              highlighted how communities can sustainably manage shared
              resources through rules, monitoring, and self-governance.
            </span>
          </p>
          <p className="space-y-2">
            <span className="font-semibold">Trebor Scholz </span>
            <span>
              coined the idea of platform cooperativism — applying cooperative
              principles to digital platforms, ensuring fairness, value
              distribution, and data sovereignty.
            </span>
          </p>
        </>
      ),
      img: cooperativeGuy,
    },
  ];

  return (
    <SectionWrapper className="bg-white">
      {/* ^ background uses Tint #EAF2FF */}

      <div className="max-w-[1460px] flex flex-col mx-auto lg:gap-8">
        {/* Section Header */}
        <div className="flex flex-col justify-center text-center">
          {/* Header content container  */}
          <div className="text-[32px] font-semibold lg:pb-4">
            <AnimatedHeader
              words={[
                { text: "How", isGradient: false },
                { text: "We", isGradient: false },
                { text: "Started", isGradient: false },
              ]}
              className="text-[32px] font-semibold"
            />
          </div>
        </div>

        {/* Subsections */}
        <div className="space-y-16 lg:space-y-24">
          {subsections.map((subsection, index) => (
            <React.Fragment key={index}>
              <SimpleCard
                subsection={subsection}
                isReversed={index % 2 === 1}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <p className="text-base md:text-xl lg:text-2xl lg:px-[12vw] md:px-8 max-w-[2460px] text-center italic font-light mt-4">
        This heritage provides the foundation on which we continue today.
      </p>
    </SectionWrapper>
  );
};

export default HowThisWorks;
