import React from "react";
import { X, ChevronLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import NavLink from "../NavLink";
import { ButtonFlippedReveal, ButtonOutlineHoverSolid } from "../Buttons";
import { useLocation } from "react-router-dom";

const MobileMenu = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isSolutionDropdownOpen,
  toggleSolutionDropdown,
  solutionItems,
  handleNavigation,
}) => {
  const location = useLocation();

  const activeClass = "text-blue-600 font-medium";
  const inactiveClass = "text-gray-700 hover:text-blue-600 font-medium";

  return (
    <div
      className={`fixed flex justify-end top-0 inset-0 z-50 [@media(min-width:900px)]:hidden transition-opacity duration-300 max-h-screen ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 backdrop-blur-xs bg-opacity-50"
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Sliding menu panel */}
      <div
        className={`flex flex-col justify-between absolute top-0 right-0 h-full w-75 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between px-6 py-2 border-gray-200">
          {/* <h2 className="text-xl font-bold text-gray-800">DigiCoop</h2> */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation content */}
        <div className="flex flex-col h-screen justify-between">
          <nav className="flex flex-col justify-between px-6 py-0 text-right">
            <div className="flex-1 justify-end space-y-2">
              <NavLink
                onClick={() => handleNavigation("/")}
                className={`w-full text-right flex items-center justify-end px-4 py-3 text-base hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 ${location.pathname === "/" ? activeClass : inactiveClass}`}
                isActive={location.pathname === "/"}
              >
                Home
              </NavLink>

              <div>
                <NavLink
                  onClick={toggleSolutionDropdown}
                  className={`w-full text-left flex items-center justify-end px-2 py-3 text-base hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 ${location.pathname.startsWith("/solutions") ? activeClass : inactiveClass}`}
                  isActive={location.pathname.startsWith("/solutions")}
                >
                  <ChevronLeft
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isSolutionDropdownOpen ? "rotate-90" : ""
                    }`}
                  />
                  Solution
                </NavLink>

                {/* Solution submenu with slide animation */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isSolutionDropdownOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-4 mt-2 space-y-1">
                    {solutionItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleNavigation(
                            `/solutions/${item.toLowerCase().replace(" ", "-")}`
                          )
                        }
                        className="w-full text-right block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink
                onClick={() => handleNavigation("/about")}
                className={`w-full text-right flex items-center justify-end px-4 py-3 text-base hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 ${location.pathname.startsWith("/about") ? activeClass : inactiveClass}`}
                isActive={location.pathname.startsWith("/about")}
              >
                About
              </NavLink>

              <NavLink
                onClick={() => handleNavigation("/about/#contact")}
                className={`w-full text-right flex items-center justify-end px-4 py-3 text-base hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 ${location.pathname.startsWith("/about/#contact") ? activeClass : inactiveClass}`}
                isActive={location.pathname.startsWith("/about/#contact")}
              >
                Contact
              </NavLink>
            </div>
          </nav>
        </div>
        {/* Bottom action buttons */}
        <div className="flex flex-col p-4 mt-4 border-gray-200 space-y-3 bottom-0">
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
            fullWidth={true}
            className={
              "bg-primary text-white rounded-2xl py-5 px-4 h-[58px] tify-center w-full"
            }
          >
            Get Started
          </ButtonFlippedReveal>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
