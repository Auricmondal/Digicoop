import React, { useState } from "react";
import { ChevronLeft, Menu, X } from "lucide-react";
import NavLink from "../ui/NavLink";
import useIsMobile from "../../hooks/useResize";
import MobileMenu from "../ui/nav/MobileMenu";
import MenuButton from "../ui/nav/MenuButton";
import DesktopMenu from "../ui/nav/DesktopMenu";
import { useNavigate } from "react-router-dom";
import BrandLogo from "./BrandLogo";

function Navbar() {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(isMobile);
  const [isSolutionDropdownOpen, setIsSolutionDropdownOpen] = useState(false);
  const navigate = useNavigate();

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
    "Digital Marketing",
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "Data Analytics",
  ];

  return (
    <header id="navbar" className="bg-white shadow-sm sticky top-0 z-40 py-3 text-lg ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <BrandLogo path={"/"} />

          {/* Desktop Navigation */}
          <DesktopMenu
            isSolutionDropdownOpen={isSolutionDropdownOpen}
            toggleSolutionDropdown={toggleSolutionDropdown}
            solutionItems={solutionItems}
            handleNavigation={handleNavigation}
            setIsSolutionDropdownOpen={setIsSolutionDropdownOpen}
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
