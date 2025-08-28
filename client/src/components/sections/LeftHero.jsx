import React from "react";
import { GradientBadge } from "@/components/ui/Badges.jsx";
import {
  ButtonFlippedReveal,
  ButtonOutlineHoverSolid,
} from "@/components/ui/Buttons.jsx";
import AnimatedText from "@/components/ui/AnimatedText.jsx";
import { Mouse, ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedHeader from "@/components/ui/AnimatedHeader.jsx";

export default function LeftSection() {
  return (
    <div className="h-full flex flex-col gap-6 text-center items-center lg:text-start  justify-center lg:items-start">
      <GradientBadge text={"Built For Cooperatives"} />

      <div className="text-4xl md:text-5xl lg:text-7xl font-semibold flex flex-wrap justify-center lg:justify-start items-center">
        <AnimatedHeader
          words={[
            { text: "Powering", isGradient: false },
            { text: "Cooperative", isGradient: false },
            { text: "Digital", isGradient: false },
          ]}
          className="font-semibold text-black text-4xl md:text-5xl justify-center md:justify-start lg:text-7xl"
        />
        <AnimatedText />
      </div>

      <p className="mt-4 text-md md:text-lg max-w-2xl text-gray-400">
        Securely Join, Manage And Govern Cooperatives — From Share Purchases To
        Audit-Ready Documentation — With One Simple, Compliant Platform.
      </p>

      <div className="flex gap-4 mt-4 mb-20 justify-center lg:justify-start w-full md:w-auto">
        <ButtonFlippedReveal
          icon={<ArrowRight />}
          hoverIcon={
            <ArrowUpRight className="text-primary bg-white rounded-full" />
          }
          className={
            "bg-primary text-white rounded-2xl py-5 px-4 h-[58px] flex gap-1 items-center justify-center"
          }
        >
          Get Started
        </ButtonFlippedReveal>
        <ButtonOutlineHoverSolid
          className={
            "h-[58px] rounded-2xl px-4 text-center border-dark-tint text-dark-tint hover:text-white hover:bg-dark-tint"
          }
        >
          Book Demo
        </ButtonOutlineHoverSolid>
      </div>
      <div className="text-custom-neutral-500 font-normal text-[16px] leading-[100%] tracking-[-0.022em] capitalize hidden lg:flex gap-1 items-center">
        <Mouse />
        Scroll Down
      </div>
    </div>
  );
}
