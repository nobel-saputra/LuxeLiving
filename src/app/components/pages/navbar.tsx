"use client";

import { useState } from "react";
import { poppins, Menu, KodeKananNavbar } from "../../lib/ui";
import { NavLinkDeks, NavLinkMob } from "../organism/navLink";
import LogoImage from "../atoms/LogoImage";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-[#F8F4E1] sticky top-0 z-50 shadow-2xl text-[#212529] p-4 ${poppins.className}`}>
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LogoImage />

          {/* Hamburger Menu untuk Mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>

          {/* Navigation Links - Desktop */}
          <NavLinkDeks />

          {/* Kanan - Desktop */}
          <KodeKananNavbar />
        </div>

        {/* Tampilan mobile menu */}
        {isOpen && <NavLinkMob />}
      </div>
    </nav>
  );
}
