import React from "react";
import { ButtonFlippedReveal } from "./Buttons";

export function SolutionCard({image, title, subtitle, buttontext}){
    return (
        <div className="bg-[#EAF2FF] border border-gray-300 rounded-xl m-5"> {/* Parent */}
            <div className="rounded-t-lg p-10"> {/* Image Section */}
                <div className="bg-white w-20 h-20 rounded-lg" />
                {image}
                <div/>
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-b-xl p-2">
                <div className="bg-green-100 px-3 py-1 m-1">
                    {title}
                </div>
                <div className="bg-green-200 px-3 py-1 m-1">
                    {subtitle}
                </div>
                <div className="">
                    <ButtonFlippedReveal
                    // icon={<ArrowRight />}
                    // hoverIcon={<ArrowRight className="text-primary bg-white rounded-full"/>}
                    className= "bg-[#EAF2FF] text-primary-dark rounded-2xl w-full h-[64px] border-[2px] flex items-center justify-center">
                    {buttontext}
                    </ButtonFlippedReveal>
                </div>
            </div>
        </div>
    );
};