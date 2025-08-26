import React from "react";
import { ButtonFlippedReveal } from "./Buttons";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import QuotationVector from "../../assets/icons/QuotationVector.svg";

export function SolutionCard({ image, title, subtitle, buttontext }) {
  return (
    <div className="bg-tint border-2 border-gray-200 rounded-xl group/card">
      {/* Image Section */}
      <div className="rounded-t-lg h-90 overflow-hidden">
        <div
          className="bg-cover bg-no-repeat h-200 w-250 rounded-lg transform translate-y-[4%] translate-x-[15%] group-hover/card:transform group-hover/card:scale-115 group-hover/card:translate-x-[9%] ease-in-out duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div />
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-b-xl p-6 hover:shadow-lg ease-in-out duration-500">
        <h3 className="text-2xl md:text-4xl font-semibold leading-tight">{title}</h3>
        <p className="mt-4 mb-2 text-md md:text-lg max-w-2xl text-gray-400">{subtitle}</p>
        <div>
          <ButtonFlippedReveal
            icon={<ArrowRight />}
            hoverIcon={
              <ArrowUpRight className="text-primary bg-white rounded-full" />
            }
            className="bg-tint text-primary-dark rounded-xl w-full h-[64px] border-[2px] flex items-center justify-center font-semibold"
          >
            {buttontext}
          </ButtonFlippedReveal>
        </div>
      </div>
    </div>
  );
}

export function QuoteCard({ quote }) {
  const openquotes = (
    <div className="flex gap-1 shrink-0">
      <img src={QuotationVector} alt="Quote Vector" className="h-8 md:h-24 lg:h-12 w-auto" />
      <img src={QuotationVector} alt="Quote Vector" className="h-8 md:h-24 lg:h-12 w-auto" />
    </div>
  );

  const closequotes = (
    <div className="flex gap-1 shrink-0 rotate-y-180">
      <img src={QuotationVector} alt="Quote Vector" className="h-8 md:h-24 lg:h-12 w-auto"/>
      <img src={QuotationVector} alt="Quote Vector" className="h-8 md:h-24 lg:h-12 w-auto"/>
    </div>
  );

  return (
    <div className="relative flex md:w-1/2">
      <div className="h-full">
        {openquotes}
      </div>

      <div className="min-w-0 flex-1 font-medium text-center text-xl md:text-2xl my-auto">
        <p className="break-words mx-2 my-24">{quote}</p>
      </div>

      <div className="flex items-end md:h-full">
        {closequotes}
      </div>
    </div>
  );
}
