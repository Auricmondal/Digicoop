import React from "react";
import NavLink from "../NavLink";
import { useClickOutside } from "../../../hooks/useClickOutside";

const DesktopMenu = ({
  isSolutionDropdownOpen,
  toggleSolutionDropdown,
  solutionItems,
  handleNavigation,
  setIsSolutionDropdownOpen
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
      className="hidden md:flex items-center space-x-8"
      id="navbar"
      ref={navbarRef}
    >
      <NavLink
        to="/home"
        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 rounded-md"
      >
        Home
      </NavLink>

      <div className="relative">
        <NavLink
          toggle={true}
          onMouseEnter={toggleSolutionDropdown}
          isSolutionDropdownOpen={isSolutionDropdownOpen}
          className="flex text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 rounded-md"
        >
          Solution
        </NavLink>

        {isSolutionDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
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
        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium">
          Log In
        </button>
        <button className="px-6 py-2 bg-primary-dark text-white rounded-lg hover:bg-primary transition-colors duration-200 font-medium">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default DesktopMenu;
