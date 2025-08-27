import React, { useState } from "react";
import useIsMobile from "../../hooks/useResize";
import MobileMenu from "../ui/nav/MobileMenu";
import MenuButton from "../ui/nav/MenuButton";
import DesktopMenu from "../ui/nav/DesktopMenu";
import { useLocation, useNavigate } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import useScrollPosition from "../../hooks/useScrollPosition";

function Navbar() {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(isMobile);
  const [isSolutionDropdownOpen, setIsSolutionDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const scrolled = useScrollPosition(50);
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsSolutionDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSolutionDropdownOpen(false);
  };

  const toggleSolutionDropdown = (event) => {
    event.stopPropagation();
    setIsSolutionDropdownOpen(!isSolutionDropdownOpen);
  };

  const solutionItems = [
    "Digital Audit",
    "Digital Administration"
  ];

  return (
    <header id="navbar" className={`w-full top-0 z-40 py-3 text-lg duration-300 transform ease-in-out
      ${scrolled ? location.pathname.startsWith('/about') ? `bg-primary shadow-sm` : `bg-white shadow-sm` : "bg-transparent text-white"}
      ${location.pathname === "/" ? "sticky" : "fixed"}
    `}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <BrandLogo path={"/"} />

          {/* Desktop Navigation */}
          <DesktopMenu
            solutionItems={solutionItems}
            handleNavigation={handleNavigation}
          />

          {/* Mobile Menu Button */}
          <MenuButton isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isSolutionDropdownOpen={isSolutionDropdownOpen}
        toggleSolutionDropdown={toggleSolutionDropdown}
        solutionItems={solutionItems}
        handleNavigation={handleNavigation}
      />
    </header>
  );
}

export default Navbar;
