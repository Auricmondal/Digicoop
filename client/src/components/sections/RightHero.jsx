import React from "react";
import { useRive } from "@rive-app/react-canvas";

export default function RightSection() {
  const { rive, RiveComponent } = useRive({
    src: "/animations/digicoop.riv",
    autoplay: true,
  });

  return (
    <div className=" bg-primary-dark rounded-[2rem] lg:rounded-tr-[0rem] lg:rounded-br-[0rem] flex-1 m-[10px] lg:m-0 h-[100%] aspect-[1/1] lg:aspect-auto w-auto">
      <RiveComponent
        className="rive-wrapper min-h-[400px] !h-full w-full flex items-center justify-center"
        aria-label="Sample Rive Animation"
      />
    </div>
  );
}
