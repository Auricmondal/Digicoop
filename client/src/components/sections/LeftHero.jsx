import React from "react";
import { GradientBadge } from "../ui/Badge";
import { ButtonFlippedReveal, ButtonOutlineHoverSolid } from "../ui/Button";
import AnimatedText from "../ui/AnimatedText.jsx";

export default function LeftSection() {
  return (
    <div className="flex flex-col gap-6 text-center items-center md:text-start md:justify-start justify-center md:items-start">
      <GradientBadge text={"Built for Corporatives"} />

      <h1 className="font-dmsans font-semibold text-[64px] leading-[100%] tracking-[-0.022em] capitalize">
        Powering Cooperative Digital <AnimatedText />
      </h1>

      <p className="font-dmsans font-normal text-[20px] mt-3 leading-[100%] tracking-[-0.022em] capitalize">
        Securely Join, Manage And Govern Cooperatives — From Share Purchases To
        Audit-Ready Documentation — With One Simple, Compliant Platform.
      </p>

      <div className="flex gap-4 mt-4 mb-20">
        <ButtonFlippedReveal text={"Get Started"} />
        <ButtonOutlineHoverSolid text={"Book Demo"} />
      </div>
      <div className="font-dmsans text-custom-neutral-500 font-normal text-[16px] leading-[100%] tracking-[-0.022em] capitalize hidden md:block">
        Scroll Down
      </div>
    </div>
  );
}
