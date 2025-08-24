import React from "react";
import { ButtonFlippedReveal } from "./Buttons";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function SolutionCard({ image, title, subtitle, buttontext }) {
  return (
    <div className="bg-[#EAF2FF] border border-gray-300 rounded-xl">
      {/* Image Section */}
      <div className="rounded-t-lg h-100 overflow-hidden">
        <div
          className="bg-cover bg-no-repeat h-120 w-150 rounded-lg transform translate-y-[4%] translate-x-[15%] hover:transform hover:scale-115 hover:translate-x-[9%] ease-in-out duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div />
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-b-xl p-6 hover:shadow-lg">
        <h3 className="m-1">{title}</h3>
        <p className="m-1">{subtitle}</p>
        <div className="">
          <ButtonFlippedReveal
            icon={<ArrowRight />}
            hoverIcon={
              <ArrowUpRight className="text-primary bg-white rounded-full" />
            }
            className="bg-[#EAF2FF] text-primary-dark rounded-xl w-full h-[64px] border-[2px] flex items-center justify-center font-semibold"
          >
            {buttontext}
          </ButtonFlippedReveal>
        </div>
      </div>
    </div>
  );
}
