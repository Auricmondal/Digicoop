import React from 'react'

const GradientOverlay = () => {
  return (
    <>
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
    </>
  );
};

export default GradientOverlay;