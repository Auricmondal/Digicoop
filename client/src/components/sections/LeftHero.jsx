import React from "react";
import { GradientBadge } from "../ui/Badge";
import { ButtonFlippedReveal, ButtonOutlineHoverSolid } from "../ui/Button";
import AnimatedText from "../ui/AnimatedText.jsx";
import { Mouse, ArrowRight, ArrowUpRight } from "lucide-react";

export default function LeftSection() {
  return (
    <div className="h-full flex flex-col gap-6 text-center items-center md:text-start  justify-center md:items-start">
      <GradientBadge text={"Built for Corporatives"} />

      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
        Powering Cooperative Digital <AnimatedText />
      </h1>

      <p className="mt-4 text-md md:text-lg max-w-2xl text-gray-400">
        Securely Join, Manage And Govern Cooperatives — From Share Purchases To
        Audit-Ready Documentation — With One Simple, Compliant Platform.
      </p>

      <div className="flex gap-4 mt-4 mb-20">
        <ButtonFlippedReveal
          icon={<ArrowRight />}
          hoverIcon={
            <ArrowUpRight className="text-primary bg-white rounded-full" />
          }
          className={
            "bg-primary text-white rounded-2xl w-[195px] h-[58px] border-[2px] flex gap-1 items-center justify-center"
          }
        >
          Get Started
        </ButtonFlippedReveal>
        <ButtonOutlineHoverSolid
          className={
            "w-[190px] h-[58px] rounded-2xl gap-1 flex items-center justify-center"
          }
        >
          Book Demo <ArrowRight />
        </ButtonOutlineHoverSolid>
      </div>
      <div className="text-custom-neutral-500 font-normal text-[16px] leading-[100%] tracking-[-0.022em] capitalize hidden md:flex gap-1 items-center">
        <Mouse />
        Scroll Down
      </div>
    </div>
  );
}
