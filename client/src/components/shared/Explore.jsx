import React from "react";
import { ArrowRight } from "lucide-react";

const Explore = ({ children = "Explore", className = "", ...props }) => {
  return (
    // <button
    //   className={`group flex items-center gap-2 
    //     font-[500] text-[20px] leading-[100%] tracking-[0]
    //     font-['DM Sans'] text-[rgba(0,31,82,1)] ${className}`}
    //   {...props}
    // >

      <button
        className={`group flex items-center gap-1
          font-[500] text-[20px] leading-[100%] tracking-[0]
          font-['DM Sans'] text-[rgba(0,31,82,1)]
          w-[98px] h-[58px] py-4 rounded-2xl opacity-100 ${className}`}
        {...props}
      >

      <span>{children}</span>
      <span
        className="flex items-center justify-center 
        w-[23px] h-[24px]  opacity-100
        bg-[rgba(0,31,82,1)] text-white
        transition-transform ease-in-out duration-300
        group-hover:translate-x-2"
      >
        <ArrowRight 
          width={16} 
          height={16} 
          strokeWidth={2.25} 
          className="opacity-100"
        />
      </span>
    </button>
  );
};

export default Explore;
