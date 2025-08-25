import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const NavLink = ({
  children,
  className,
  to,
  toggle = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <div className={`group cursor-pointer ${className}`} onClick={onClick}>
      <Link to={to} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <span className="relative block overflow-hidden">
          {/* First span (initial + third animation) */}
          <span
            className="flex
          items-center transform transition-transform duration-200
          group-hover:-translate-y-full
          group-hover:delay-0
          "
          >
            {children}{" "}
            {toggle && (
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-200`}
              />
            )}
          </span>

          {/* Second span (middle animation) */}
          <span
            className=" flex
          items-center absolute left-0 top-0 transform translate-y-full
          transition-transform duration-300
          group-hover:translate-y-0
          group-hover:delay-100
        "
          >
            {children}{" "}
            {toggle && (
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 rotate-180`}
              />
            )}
          </span>
        </span>

        <hr
          className="
      w-0
      group-hover:w-full
      transition-all duration-300 bg-black
      group-hover:delay-300
    "
        />
      </Link>
    </div>
  );
};

export default NavLink;
