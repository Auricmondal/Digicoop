import LeftSection from "./LeftHero";
import RightSection from "./RightHero";
import SectionWrapper from "@/layouts/SectionWrapper";

const Hero = () => {
  return (
    <div className="lg:flex mx-auto justify-between gap-4 items-stretch ">
      <div className=" h-full mx-auto lg:w-[50%]">
        <SectionWrapper className="max-w-[1460px] mx-auto">
          <LeftSection />
        </SectionWrapper>
      </div>
      <div className="w-[100%] lg:w-[50%] ">
        <RightSection />
      </div>
    </div>
  );
};

export default Hero;
