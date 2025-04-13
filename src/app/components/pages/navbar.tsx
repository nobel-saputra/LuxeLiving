"use client";

import { useState } from "react";
import { Image, Link, Search, poppins, Menu } from "../../lib/ui";
import ButtonKu from "../atoms/Button";
import NavLinkDeks from "../organism/navbar/navLinkDeks";
import NavLinkMob from "../organism/navbar/navLinkMob";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-[#F8F4E1] text-[#212529] p-4 ${poppins.className}`}>
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="lg:pl-4">
            <Image src="/images/logo/LuxeLiving-light-mode-logo.png" alt="Logo" width={120} height={120} priority />
          </div>

          {/* Hamburger Menu untuk Mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>

          {/* Navigation Links - Desktop */}
          <NavLinkDeks />

          {/* Kanan - Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:pr-4">
            <Link href="/search" className="hover:text-gray-500">
              <Search className="h-6 w-6" />
            </Link>
            <Link href="/search">
              <ButtonKu>Sell Property</ButtonKu>
            </Link>
          </div>
        </div>

        {/* Tampilan mobile menu */}
        {isOpen && <NavLinkMob />}
      </div>
    </nav>
  );
}
