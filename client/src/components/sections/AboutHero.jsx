import React from "react";
import aboutHero from "../../assets/images/about-hero.webp";
import { AboutGradientBadge, GradientBadge } from "../ui/Badges";

const AboutHero = () => {
  return (
    <section className="bg-[linear-gradient(55.96deg,_var(--color-primary)_32.82%,_var(--color-dark-tint)_97.21%)] text-white pb-16 ">
      <div className="flex flex-col gap-5 items-center text-center py-10">
        <AboutGradientBadge text={"Meet The Team"} />
        <h1 className="max-w-[764px] text-[28px] md:text-[40px] lg:text-5xl font-semibold p-1 px-10">
          Carrying a Legacy Into the Digital Future
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-[30px] overflow-hidden h-[65vh]">
          <img
            src={aboutHero}
            alt="Team DigiCoop"
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-b from-[rgba(255,255,255,0)] to-primary pointer-events-none flex items-end">
            <div className="mt-6 flex flex-col sm:flex-row gap-20 items-center text-sm sm:text-base px-10 py-10 sm:px-8 text-white w-full">
              <div className="my-2">
                <span className="font-semibold text-custom-neutral-300">
                  Location
                </span>
                <br />
                <span className="font-semibold text-white text-xl">Berlin, Germany</span>
              </div>
              <div className="my-2">
                <span className="font-semibold text-custom-neutral-300">
                  Founded By
                </span>
                <br />
                <span className="font-semibold text-white text-xl">John Doe</span>
              </div>
              <div className="my-2">
                <span className="font-semibold text-custom-neutral-300">
                  Founded in
                </span>
                <br />
                <span className="font-semibold text-white text-xl">2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
