// components/YouTubeCarousel.jsx
import React, { useState, useEffect, useRef } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import ArrowControls from "@/components/ui/ArrowControls";

const Testimonial = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Video data with aspect ratios
  const reviews = [
    {
      id: "HzOmL8w_pU4",
      name: "WSJ",
      quote: "With DigiCoop, onboarding new members takes minutes instead of weeks. Our cooperative finally feels modern, and our members love how simple the process has become.",
      author: "Emma L., Cooperative Director",
    },
  ];

  // Duplicate reviews for infinite effect
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews];
  const totalReviews = duplicatedReviews.length;

  // Handle auto-scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % duplicatedReviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, duplicatedReviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % duplicatedReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + duplicatedReviews.length) % duplicatedReviews.length);
  };

  // Calculate transform for carousel
  const getTransform = () => {
    if (!carouselRef.current) return "translateX(0)";

    const firstChild = carouselRef.current.children[0];
    const slideWidth = firstChild ? firstChild.offsetWidth : 0;
    const gap = 8; // Tailwind gap-2 = 0.5rem = 8px
    const offset = (slideWidth + gap) * currentIndex;

    return `translateX(-${offset}px)`;
  };

  return (
    <div className="w-full bg-primary px-4 py-8 sm:px-6 lg:px-12 sm:py-12 md:py-12 lg:py-16">
      <div
        className="max-w-[1460px] max-h-4xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative overflow-hidden w-full group">
          <div className="flex flex-row items-center justify-between w-full">
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-8 text-[#467FFD] mx-auto sm:mx-0">
              Customer Reviews
            </h2>

            {/* Navigation arrows */}
            <ArrowControls className="hidden sm:flex flex-row pb-6 gap-3 justify-end" prevSlide={prevSlide} nextSlide={nextSlide} />
          </div>

          {/* Carousel track */}
          <div
            ref={carouselRef}
            className="flex gap-2 bg-transparent transition-transform duration-500 ease-in-out"
            style={{ transform: getTransform() }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className={`flex-shrink-0 rounded-xl overflow-hidden translate-transform bg-transparent border border-white/80 md:w-[90%] w-[100%] ease-in-out duration-300 ${currentIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-70"} ${currentIndex > 0 ? currentIndex < totalReviews - 1 ? "lg:translate-x-[5.5%] md:translate-x-[6%]" : "lg:translate-x-[11%] md:translate-x-[11%]" : ""}`}
              >
                <div className="flex flex-col p-8 space-y-8 max-h-fit h-auto justify-between">
                  <div className="text-7xl text-white/80">
                    {review.name}
                  </div>
                  <p className="text-white lg:text-3xl md:text-2xl sm:text-2xl font-semibold">
                    "{review.quote}"
                  </p>
                  <div className="text-[#467FFD] lg:text-xl md:text-base sm:text-sm">
                    {review.author}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows for mobile */}
          <ArrowControls className="sm:hidden flex flex-row py-6 gap-3 justify-center" prevSlide={prevSlide} nextSlide={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
