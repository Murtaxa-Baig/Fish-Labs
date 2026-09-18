"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { Menu, X, User } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "Terms & Conditions", href: "/#terms" },
    { label: "Privacy Policy", href: "/#privacy" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e5e7eb] transition-all">
      <div className="h-16 max-w-[1200px] mx-auto px-5 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/images/logo-icon.svg"
            alt="Fish Labs Logo"
            width={32}
            height={32}
            className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-[#111827]">
            Fish Labs
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href === "/contact"
                ? pathname === "/contact"
                : false;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#111827] font-semibold border-b-2 border-[#f46117] pb-0.5"
                    : "text-[#4b5563] hover:text-[#111827]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            href="/#download"
            className="hidden sm:inline-flex"
          >
            Download App
          </Button>

          <div className="w-8 h-8 rounded-full bg-[#f46117] text-white flex items-center justify-center shadow-xs">
            <User className="w-4 h-4" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#4b5563] hover:text-[#111827] hover:bg-[#f3f4f6] md:hidden cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e5e7eb] bg-white px-5 py-4 flex flex-col gap-3 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href === "/contact"
                ? pathname === "/contact"
                : false;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  isActive ? "text-[#f46117] font-semibold" : "text-[#111827] hover:text-[#f46117]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-[#f3f4f6]">
            <Button
              variant="primary"
              size="md"
              href="/#download"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download App
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
