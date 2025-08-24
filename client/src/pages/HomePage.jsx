import Hero from "../components/sections/Hero";
import Brands from "../components/sections/Brands";
import OurSolutions from "../components/sections/OurSolutions";
import HowThisWorks from "../components/sections/HowThisWorks";
import FAQSection from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Brands />
      <OurSolutions />
      <HowThisWorks />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
