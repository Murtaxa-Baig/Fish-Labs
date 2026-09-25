import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Delete Account", href: "/delete-account" },
  ];

  return (
    <footer className="w-full bg-white border-t border-[#e5e7eb]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo-icon.svg"
                alt="Fish Labs Logo"
                width={28}
                height={28}
                className="h-7 w-auto object-contain"
              />
              <span className="text-lg font-bold text-[#111827] tracking-tight">
                Fish Labs
              </span>
            </div>
            <p className="text-sm text-[#4b5563] max-w-[40ch] leading-relaxed">
              Professional AI Voice Studio at your fingertips.
            </p>
          </div>

          {/* Right Navigation Column */}
          <div className="md:col-span-7 flex flex-wrap md:justify-end gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#4b5563] hover:text-[#111827] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer Strip */}
        <div className="pt-6 border-t border-[#f3f4f6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#575e70]">
          <p>© {currentYear} Fish Labs Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2084ff]" />
            <span className="font-mono text-[11px] uppercase tracking-wider">
              Acoustic Precision Architecture
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
