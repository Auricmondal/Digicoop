import React from "react";
import { GradientBadge } from "../ui/Badges.jsx";
import {
  ButtonFlippedReveal,
  ButtonOutlineHoverSolid,
} from "../ui/Buttons.jsx";
import AnimatedText from "../ui/AnimatedText.jsx";
import { Mouse, ArrowRight, ArrowUpRight } from "lucide-react";

export default function LeftSection() {
  return (
    <div className="h-full flex flex-col gap-6 text-center items-center md:text-start  justify-center md:items-start">
      <GradientBadge text={"Built For Cooperatives"} />

      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
        Powering Cooperative Digital <AnimatedText />
      </h1>

      <p className="mt-4 text-md md:text-lg max-w-2xl text-gray-400">
        Securely Join, Manage And Govern Cooperatives — From Share Purchases To
        Audit-Ready Documentation — With One Simple, Compliant Platform.
      </p>

      <div className="flex gap-4 mt-4 mb-20 flex-col md:flex-row w-full md:w-auto">
        <ButtonFlippedReveal
          icon={<ArrowRight />}
          hoverIcon={
            <ArrowUpRight className="text-primary bg-white rounded-full" />
          }
          className={
            "bg-primary text-white rounded-2xl py-5 px-4 h-[58px] border-[2px] flex gap-1 items-center justify-center"
          }
        >
          Get Started
        </ButtonFlippedReveal>
        <ButtonOutlineHoverSolid
          className={"h-[58px] rounded-2xl px-4 text-center"}
        >
          Book Demo
        </ButtonOutlineHoverSolid>
      </div>
      <div className="text-custom-neutral-500 font-normal text-[16px] leading-[100%] tracking-[-0.022em] capitalize hidden md:flex gap-1 items-center">
        <Mouse />
        Scroll Down
      </div>
    </div>
  );
}
