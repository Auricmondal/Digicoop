import React from "react";

const SectionWrapper = ({ children, className = "", ...props }) => {
  return (
    <section
      className={`px-4 sm:px-8 lg:px-12 py-6 sm:py-12 lg:py-16 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
