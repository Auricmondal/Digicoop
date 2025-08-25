import React from "react";
import { GradientBadge } from "../ui/Badges";
import SectionWrapper from "../../layouts/SectionWrapper";

const ContactUs = () => {
  return (
    <SectionWrapper className="mx-auto bg-tint flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 max-w-[1460px]">
        <GradientBadge text={"Contact Us"} />

        <h1 className="text-3xl font-bold mb-2 text-center">
          Let&apos;s Build{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-dark-tint">
            Together
          </span>
        </h1>

        <p className="max-w-xl text-center text-sm mb-6 px-4 text-gray-800">
          Whether you&apos;re ready to digitize your cooperative or simply
          curious about how DigiCoop works, we&apos;d love to hear from you. Our
          team is here to answer questions, guide you through the platform, and
          explore how we can support your cooperative&apos;s journey.
        </p>
      </div>

      <form
        className="bg-white rounded-2xl w-full p-6 flex flex-col gap-2 max-w-[1460px]"
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
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-md font-semibold transition"
        >
          Submit
        </button>
      </form>
    </SectionWrapper>
  );
};

export default ContactUs;
