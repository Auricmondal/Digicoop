import React from "react";

export function ButtonFlippedReveal({
  className,
  children,
  icon,
  hoverIcon,
  onClick,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`group cursor-pointer  ${className}`}
      style={{
        borderImage:
          "linear-gradient(93.63deg, rgba(255, 255, 255, 0.35) 3.45%, rgba(153, 153, 153, 0) 117.37%) 1",
      }}
      {...props}
    >
      <span className="relative block overflow-hidden text-[20px]">
        <span className="flex transform transition-transform duration-300 group-hover:-translate-y-full text-[15px] md:text-[20px]">
          {children}
        </span>
        <span className="flex absolute left-0 top-0 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[15px] md:text-[20px]">
          {children}
        </span>
      </span>
      <span className="relative w-5 h-5">
        <span className="absolute inset-0 transform transition-opacity duration-300 group-hover:opacity-0">
          {icon}
        </span>
        <span className="absolute inset-0 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {hoverIcon}
        </span>
      </span>
    </button>
  );
}

export function ButtonOutlineHoverSolid({
  className,
  children,
  onClick,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-dark-tint text-dark-tint hover:text-white hover:bg-dark-tint ${className} bg-transparent text-[15px] md:text-[20px]`}
      {...props}
    >
      {children}
    </button>
  );
}
