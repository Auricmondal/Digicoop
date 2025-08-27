import React from "react";
import SectionWrapper from "../../layouts/SectionWrapper";
import { TestimonialCard } from "../ui/Cards";

const ActualResults = () => {
  const testimonials = [
    {
      efficiency: "45%",
      testimonial:
        "What once required piles of paperwork and hours of coordination is now completed digitally in minutes. Our cooperative runs smoother, faster, and with fewer errors.",
      author: "Anna Müller",
      designation: "Chairwoman, GreenFields Cooperative",
    },
    {
      efficiency: "45%",
      testimonial:
        "What once required piles of paperwork and hours of coordination is now completed digitally in minutes. Our cooperative runs smoother, faster, and with fewer errors.",
      author: "Anna Müller",
      designation: "Chairwoman, GreenFields Cooperative",
    }
  ];
  return (
    <div className="bg-[#EAF2FF]">
      <SectionWrapper className="max-w-[1460px] mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold md:text-left text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-dark-tint to-primary-dark">
          Actual Results from <br/> Industry Leaders
        </h2>

        <div className="rounded-md flex flex-col md:flex-row justify-between gap-6 text-center sm:text-left lg:mb-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              efficiency={testimonial.efficiency}
              testimonial={testimonial.testimonial}
              author={testimonial.author}
              designation={testimonial.designation}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ActualResults;