import React from "react";
import NavLink from "../NavLink";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { ButtonFlippedReveal, ButtonOutlineHoverSolid } from "../Buttons";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const DesktopMenu = ({
  isSolutionDropdownOpen,
  toggleSolutionDropdown,
  solutionItems,
  handleNavigation,
  setIsSolutionDropdownOpen,
}) => {
  const navbarRef = React.useRef(null);

  useClickOutside(
    navbarRef,
    () => {
      setIsSolutionDropdownOpen(false);
    },
    isSolutionDropdownOpen
  );

  return (
    <nav
      className="hidden [@media(min-width:900px)]:flex items-center space-x-2"
      id="navbar"
      ref={navbarRef}
    >
      <NavLink
        to="/home"
        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 rounded-md"
      >
        Home
      </NavLink>

      <div
        className="relative"
        onMouseEnter={toggleSolutionDropdown}
        onMouseLeave={toggleSolutionDropdown}
      >
        <NavLink
          toggle={true}
          className="flex text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 rounded-md"
        >
          Solution
        </NavLink>

        {isSolutionDropdownOpen && (
          <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            {solutionItems.map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  handleNavigation(
                    `/solutions/${item.toLowerCase().replace(" ", "-")}`
                  )
                }
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      <NavLink
        to="/about"
        // toggle={true}
        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 rounded-md"
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 rounded-md"
      >
        Contact
      </NavLink>
      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <ButtonOutlineHoverSolid
          onClick={() => handleNavigation("/login")}
          className={"h-[58px] rounded-2xl px-4 text-center"}
        >
          Log In
        </ButtonOutlineHoverSolid>
        <ButtonFlippedReveal
          onClick={() => handleNavigation("/signup")}
          icon={<ArrowRight />}
          hoverIcon={
            <ArrowUpRight className="text-primary bg-white rounded-full" />
          }
          className={
            "bg-primary text-white rounded-2xl py-5 px-4 h-[58px] border-[2px] flex gap-1 items-center justify-center"
          }
        >
          Get Started
        </ButtonFlippedReveal>
      </div>
    </nav>
  );
};

export default DesktopMenu;
