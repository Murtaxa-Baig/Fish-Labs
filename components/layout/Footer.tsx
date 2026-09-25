import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131118] text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-800 pb-12">
          {/* Left Brand Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-icon.svg"
                alt="Fish Labs Logo"
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
              />
              <span className="text-xl font-bold">Fish Labs</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              The professional AI Voice Studio for creators. Transform, generate, and share high-fidelity audio projects.
            </p>
          </div>

          {/* Right Navigation Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold text-white">Company</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#2084ff] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-white">Legal</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-[#2084ff] transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[#2084ff] transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-gray-500 text-sm">
            Copyright © 2026{" "}
            <a
              href="http://www.appnayatech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              AppNaya Technologies
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
