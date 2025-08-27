// // import React, { useEffect, useRef } from 'react';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';


// // gsap.registerPlugin(ScrollTrigger);

// // const ScrollCardSection = ({ direction = 'vertical', children }) => {
// //   const sectionRef = useRef(null);
// //   const wrapperRef = useRef(null);

// //   useEffect(() => {
// //     const section = sectionRef.current;
// //     const wrapper = wrapperRef.current;
// //     const items = wrapper.querySelectorAll('.item');

// //     // Initial states
// //     items.forEach((item, index) => {
// //       if (index !== 0) {
// //         if (direction === 'horizontal') {
// //           gsap.set(item, { xPercent: 100 });
// //         } else {
// //           gsap.set(item, { yPercent: 100 });
// //         }
// //       }
// //     });

// //     const timeline = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: section,
// //         pin: true,
// //         start: 'top top',
// //         end: () => `+=${items.length * 100}%`,
// //         scrub: 1,
// //         invalidateOnRefresh: true,
// //         // markers: true,
// //       },
// //       defaults: { ease: 'none' },
// //     });

// //     items.forEach((item, index) => {
// //       timeline.to(item, {
// //         scale: 0.9,
// //         borderRadius: '10px',
// //       });

// //       if (items[index + 1]) {
// //         timeline.to(
// //           items[index + 1],
// //           direction === 'horizontal'
// //             ? { xPercent: 0 }
// //             : { yPercent: 0 },
// //           '<'
// //         );
// //       }
// //     });

// //     return () => {
// //       timeline.scrollTrigger?.kill();
// //       timeline.kill();
// //     };
// //   }, [direction]);

// //   return (
// //     <div
// //       ref={sectionRef}
// //       className={`scroll-section ${direction}-section section`}
// //     >
// //       <div className="wrapper" ref={wrapperRef}>
// //         <div role="list" className="list">
// //           {children}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ScrollCardSection;


// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const ScrollCardSection = ({ direction = 'vertical', children }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const items = containerRef.current.querySelectorAll('.item');

//     items.forEach((item, i) => {
//       const animProps =
//         direction === 'horizontal'
//           ? { x: 100, opacity: 0 }
//           : { y: 100, opacity: 0 };

//       gsap.fromTo(
//         item,
//         animProps,
//         {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: item,
//             start: 'top 80%',
//             end: 'bottom 60%',
//             toggleActions: 'play none none reverse',
//             once: false,
//           },
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [direction]);

//   return (
//     <section className="scroll-section py-20" ref={containerRef}>
//       <div className="space-y-16 lg:space-y-24">{children}</div>
//     </section>
//   );
// };

// export default ScrollCardSection;


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
      className={`scroll-section ${direction}-section section overflow-hidden`}
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
