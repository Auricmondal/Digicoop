import React from "react";
import { X, ChevronLeft } from "lucide-react";
import NavLink from "../NavLink";

const MobileMenu = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isSolutionDropdownOpen,
  toggleSolutionDropdown,
  solutionItems,
  handleNavigation,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
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
        className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-out ${
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
        <div className="flex flex-col h-full">
          <nav className="flex-1 justify-end px-6 py-0 space-y-96 text-right">
            <div className="flex-1 justify-end space-y-1">
              <NavLink
                to="/home"
                className="w-full text-right flex items-center justify-end px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 "
              >
                Home
              </NavLink>

              <div>
                <button
                  onClick={toggleSolutionDropdown}
                  className="w-full text-left flex items-center justify-end px-2 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  <ChevronLeft
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isSolutionDropdownOpen ? "rotate-90" : ""
                    }`}
                  />
                  Solution
                </button>

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
                to="/about"
                className="w-full text-right flex items-center justify-end px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className="w-full text-right flex items-center justify-end px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                Contact
              </NavLink>
            </div>
            {/* Bottom action buttons */}
            <div className="p-6 border-t border-gray-200 space-y-3">
              <button className="w-full px-6 py-3 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium">
                Log In
              </button>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
