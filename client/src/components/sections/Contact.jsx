import React from "react";
import { GradientBadge } from "../ui/Badges";
import SectionWrapper from "../../layouts/SectionWrapper";
import { ButtonFlippedReveal } from "../ui/Buttons";


const ContactUs = () => {
  return (
    <SectionWrapper className="bg-tint">

      <div className="max-w-[1460px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col justify-center text-center gap-6">
          {/* Pill with gradient border */}
          <span>
            <GradientBadge text={"Contact Us"} />
          </span>

          {/* Header content container with responsive sizing */}
          <div className="w-full max-w-[90%] sm:max-w-[600px] lg:max-w-[724px] h-auto mx-auto flex flex-col justify-center gap-2 lg:gap-[10px] opacity-100">
            <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.01em] text-primary-dark mb-4 ">
              {/* ^ Primary Dark #001F52 */}
              Let&apos;s Build{" "}
              <span className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.01em] bg-gradient-to-r from-primary to-dark-tint bg-clip-text text-transparent">
                Together
              </span>
              {/* ^ Dark Tint #467FFD */}
            </h2>

            <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.25rem] font-normal leading-[1.6] tracking-[0] text-center text-black ">
            Whether you&apos;re ready to digitize your cooperative or simply
            curious about how DigiCoop works, we&apos;d love to hear from you. Our
            team is here to answer questions, guide you through the platform, and
            explore how we can support your cooperative&apos;s journey.
            </p>
          </div>
        </div>
      <form
        className="bg-white rounded-2xl w-full p-6 flex flex-col gap-2 max-w-[1460px] my-6"
        style={{ boxShadow: "0px 4px 10.8px 0px rgba(0, 0, 0, 0.1)" }}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-black/10 rounded-md px-4 py-6 text-lg focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-black/10 rounded-md px-4 py-6 text-lg focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full border border-black/10 rounded-md px-4 py-6 text-lg focus:outline-none resize-none"
        />
        <ButtonFlippedReveal className="bg-primary text-white rounded-2xl py-5 px-4 h-[58px] border-[2px] flex gap-1 items-center justify-center" type={"submit"}>
          Submit
        </ButtonFlippedReveal>
      </form>
      </div>
    </SectionWrapper>
  );
};

export default ContactUs;
