import React from "react";
import AboutHero from "../components/sections/AboutHero";
import OurVision from "../components/sections/OurVision";
import HowWeStarted from "../components/sections/HowWeStarted";
import ContactUs from "../components/sections/Contact";


const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <OurVision />
      <HowWeStarted />
      <ContactUs />
    </div>
  );
};

export default AboutPage;
