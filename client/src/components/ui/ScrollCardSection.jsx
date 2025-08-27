import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollStackSection = ({ direction = "vertical", children }) => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const items = wrapperRef.current.querySelectorAll(".item");

    // Prepare items: position offscreen
    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, direction === "horizontal" ? { xPercent: 100 } : { yPercent: 100 });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        // pinSpacing: false,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, i) => {
      if (i < items.length - 1) {
        tl.to(item, { scale: 0.9, borderRadius: "10px" });
        tl.to(
          items[i + 1],
          direction === "horizontal" ? { xPercent: 0 } : { yPercent: 0 },
          "<"
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      tl.kill();
    };
  }, [direction]);

  return (
    <section
      ref={sectionRef}
      className={`hidden md:block scroll-section ${direction}-section section overflow-hidden`}
    >
      <div ref={wrapperRef} className="wrapper relative h-screen w-full">
        <div className="list relative h-full w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ScrollStackSection;
