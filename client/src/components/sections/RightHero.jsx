import React from "react";
import HeroImage from "@/assets/images/hero.webp";

const nodes = [
  { id: 1, label: "Member Login", top: "25%", left: "15%" },
  { id: 2, label: "Digi Audit", top: "25%", right: "15%" },
  { id: 3, label: "DigiV", bottom: "30%", left: "15%" },
  { id: 4, label: "Secured Transaction", bottom: "30%", right: "15%" },
];

export default function RightSection() {
  return (
    <div className=" bg-primary-dark rounded-[2rem] md:rounded-tr-[0rem] md:rounded-br-[0rem] flex-1 min-h-[400px] m-[10px] md:m-0 h-full">
      <div
        className="bg-contain min-h-[400px] bg-no-repeat bg-center h-full max-w-[1460px] mx-auto"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
    </div>
  );
}
