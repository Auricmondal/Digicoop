import React from "react";

const nodes = [
  { id: 1, label: "Member Login", top: "25%", left: "15%" },
  { id: 2, label: "Digi Audit", top: "25%", right: "15%" },
  { id: 3, label: "DigiV", bottom: "30%", left: "15%" },
  { id: 4, label: "Secured Transaction", bottom: "30%", right: "15%" },
];

export default function RightSection() {
  return (
    <div className="relative bg-primary-dark rounded-[2rem] md:rounded-tr-[0rem] md:rounded-br-[0rem] flex-1 min-h-[400px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg px-8 py-6 shadow-md w-36 text-center font-semibold text-blue-900">
        DigiCoop
      </div>

      {nodes.map(({ id, label, top, left, right, bottom }) => {
        const style = {
          position: "absolute",
          top,
          left,
          right,
          bottom,
        };
        return (
          <div
            key={id}
            style={style}
            className="flex items-center gap-2 bg-blue-900 border border-blue-700 rounded-md px-4 py-2 text-white text-sm cursor-default"
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
