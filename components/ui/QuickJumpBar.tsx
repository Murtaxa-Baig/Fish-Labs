import React from "react";

export interface JumpLink {
  label: string;
  href: string;
}

export interface QuickJumpBarProps {
  links: JumpLink[];
}

export const QuickJumpBar: React.FC<QuickJumpBarProps> = ({ links }) => {
  return (
    <div className="sticky top-16 z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#e5e7eb] shadow-xs">
      <div className="max-w-4xl mx-auto px-5 md:px-6 py-2.5 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max text-xs">
          <span className="text-[#575e70] font-semibold uppercase tracking-wider pr-2">
            Jump to:
          </span>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-lg bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#111827] font-medium transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
