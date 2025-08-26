import React, { useEffect, useState, useRef } from "react";

export default function AnimatedHeader({
  words = [],
  gradient = "from-primary to-dark-tint",
  className = "",
}) {
  const [visibleCount, setVisibleCount] = useState(0);

  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3, // triggers when 30% of element is in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  // Animation trigger once visible
  useEffect(() => {
    if (!hasAnimated) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setVisibleCount((prev) => prev + 1);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [hasAnimated, words.length]);

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap gap-2 ${className}`}
      style={{ whiteSpace: "pre-line" }}
    >
      {words.map((word, idx) => {
        const isVisible = idx < visibleCount;

        return (
          <React.Fragment key={idx}>
            {word.isBreak && idx !== 0 && <div className="w-full h-0" />}
            <span
              key={idx}
              className={`inline-block font-semibold transition-opacity duration-400 ease-in-out ${
                word.isGradient
                  ? `bg-clip-text text-transparent bg-gradient-to-r ${gradient}`
                  : `text-foreground`
              }`}
              style={
                isVisible
                  ? { animation: "slide-up-fade 0.5s ease-in-out" }
                  : { opacity: 0, visibility: "hidden" }
              }
            >
              {word.text}
            </span>
            {word.isBreak && <div className="w-full h-0" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
