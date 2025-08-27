import React from "react";
import NavLink from "../NavLink";
import { ButtonFlippedReveal, ButtonOutlineHoverSolid } from "../Buttons";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const DesktopMenu = ({ solutionItems, handleNavigation }) => {
  const navbarRef = React.useRef(null);
  const location = useLocation();

  const activeClass = location.pathname === "/" ? "text-blue-600 font-medium" : "text-white hover:text-gray-600 font-medium";
  const inactiveClass = location.pathname === "/" ? "text-gray-700 hover:text-blue-600 font-medium" : "text-white hover:text-gray-600 font-medium";

  return (
    <nav
      className="hidden [@media(min-width:900px)]:flex items-center space-x-2"
      id="navbar"
      ref={navbarRef}
    >
      <NavLink
        onClick={() => handleNavigation("/")}
        className={`transition-colors duration-200 px-2 py-1 rounded-md ${
          location.pathname === "/" ? activeClass : inactiveClass
        }`}
        isActive={location.pathname === "/"}
      >
        Home
      </NavLink>

      <div className="group relative">
        <NavLink
          toggle={true}
          className={`transition-colors duration-200 px-2 py-1 rounded-md ${
            location.pathname.startsWith("/solutions")
              ? activeClass
              : inactiveClass
          }`}
          isActive={location.pathname.startsWith("/solutions")}
        >
          Solution
        </NavLink>

        <div className="absolute top-full left-0 w-max bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 scale-0 group-hover:scale-100 transition-transform duration-200 ease-in-out origin-top-left">
          {solutionItems.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                handleNavigation(
                  `/solutions/${item.toLowerCase().replace(" ", "-")}`
                )
              }
              className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-150"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <NavLink
        onClick={() => handleNavigation("/about")}
        className={`transition-colors duration-200 px-2 py-1 rounded-md ${
          location.pathname.startsWith("/about") ? activeClass : inactiveClass
        }`}
        isActive={location.pathname.startsWith("/about")}
      >
        About
      </NavLink>

      <NavLink
        onClick={() => handleNavigation("/about/#contact")}
        className={`transition-colors duration-200 px-2 py-1 rounded-md ${
          location.pathname.startsWith("/about/#contact")
            ? activeClass
            : inactiveClass
        }`}
        isActive={location.pathname.startsWith("/about/#contact")}
      >
        Contact
      </NavLink>
      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <ButtonOutlineHoverSolid
          onClick={() => handleNavigation("/login")}
          className={`h-[58px] rounded-2xl px-4 text-center ${
            location.pathname.startsWith("/about")
              ? "border-white text-white"
              : "border-dark-tint text-dark-tint"
          } hover:text-white hover:bg-dark-tint`}
        >
          Log In
        </ButtonOutlineHoverSolid>
        <ButtonFlippedReveal
          onClick={() => handleNavigation("/signup")}
          icon={<ArrowRight />}
          hoverIcon={
            <ArrowUpRight className="text-primary bg-white rounded-full" />
          }
          className={`rounded-2xl py-5 px-4 h-[58px] border-[2px] flex gap-1 items-center justify-center
            ${
              location.pathname.startsWith("/about")
                ? "bg-white text-primary"
                : "bg-tint text-white"
            }
            `}
        >
          Get Started
        </ButtonFlippedReveal>
      </div>
    </nav>
  );
};

export default DesktopMenu;
