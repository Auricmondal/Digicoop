import React from "react";
import useInfiniteLogos from "../../hooks/useInfiniteLogos";
import useContainerWidth from "../../hooks/useContainerWidth";
import GradientOverlay from "../ui/scroller/GradientOverlay";
import InfiniteScrollContainer from "../ui/scroller/InfiniteScrollContainer";
import LogoItem from "../ui/scroller/LogoItem";

const Brands = ({reversePeriod = 10}) => {
  const logos = [
    {
      id: 1,
      name: "Digicert",
      src: "/brand/img/digicert_icon.png.webp",
    },
    {
      id: 2,
      name: "Group",
      src: "/brand/img/Group.webp",
    },
    {
      id: 3,
      name: "Vector",
      src: "/brand/img/Vector.webp",
    },
    {
      id: 4,
      name: "WSJ",
      src: "/brand/img/WSJ.webp",
    },
  ];

  const { containerRef, containerWidth } = useContainerWidth();
  const duplicatedLogos = useInfiniteLogos(logos, containerWidth, 184);
  const oneSetWidth = logos.length * 184;

  return (
    <div className="w-full bg-white py-16">
      <div className="relative overflow-hidden" ref={containerRef}>
        <GradientOverlay />
        {duplicatedLogos.length > 0 && (
          <InfiniteScrollContainer oneSetWidth={oneSetWidth} duration={25} 
            reversePeriod={reversePeriod}>
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={`${logo.id}-${index}`} logo={logo} index={index} />
            ))}
          </InfiniteScrollContainer>
        )}
      </div>
    </div>
  );
};

export default Brands;
