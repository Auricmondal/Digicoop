import React from "react";

export function ButtonFlippedReveal({
  className,
  children,
  icon,
  hoverIcon,
  onClick,
  fullWidth = false,
  backgroundImage = "linear-gradient(93.63deg, rgba(127, 145, 175, 1) 3.45%, rgba(153, 153, 153, 0) 117.37%)",
  ...props
}) {
  return (
    <span
      className={`inline-flex p-[1px] ${
        fullWidth ? "w-full" : ""
      } rounded-2xl bg-gradient-to-r`}
      style={{
        backgroundImage: backgroundImage,
        boxShadow: "0px 4px 9.4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <button
        onClick={onClick}
        className={`group ${
          fullWidth ? "w-full" : ""
        } rounded-2xl cursor-pointer w-full md:w-fit ${className}`}
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
    </span>
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
