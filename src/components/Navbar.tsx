"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = ["Home", "Tours", "Hotels", "Blog", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-[#1d5bff] font-extrabold text-xl tracking-tight">
              trip<span className="text-[#f4a20a]">booking</span>.ai
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className={`text-sm font-medium transition-colors ${
                  link === "Home"
                    ? "text-[#1d5bff] border-b-2 border-[#1d5bff] pb-0.5"
                    : "text-gray-600 hover:text-[#1d5bff]"
                }`}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Search + Sign In */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#1d5bff] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
            <button className="bg-[#f4a20a] hover:bg-[#e09600] text-white font-semibold text-sm px-5 py-2 rounded-full transition-colors">
              Sign In
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] bg-white flex flex-col p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[#1d5bff] font-extrabold text-xl">
              trip<span className="text-[#f4a20a]">booking</span>.ai
            </span>
            <button onClick={() => setMenuOpen(false)}>
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-semibold ${link === "Home" ? "text-[#1d5bff]" : "text-gray-700"}`}
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <button className="w-full bg-[#f4a20a] text-white font-semibold py-3 rounded-full">
              Sign In
            </button>
          </div>
        </div>
      )}
    </>
  );
}
