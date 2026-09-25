import React from "react";

export interface BadgeProps {
  variant?: "status" | "live" | "rating" | "neutral" | "accent";
  icon?: React.ReactNode;
  showDot?: boolean;
  pulseDot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "status",
  icon,
  showDot = false,
  pulseDot = false,
  children,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors";

  const variants = {
    status:
      "bg-[#f3f4f6] text-[#4b5563] border border-[#e5e7eb] px-2.5 py-1 tracking-wider uppercase text-[11px]",
    live: "bg-[#e6f0ff] text-[#2084ff] px-2.5 py-0.5 text-[11px] font-semibold",
    rating:
      "bg-[#f3f4f6] text-[#111827] px-2 py-1 border border-[#e5e7eb] text-xs font-semibold",
    neutral:
      "bg-white text-[#4b5563] border border-[#e5e7eb] px-2.5 py-1 text-xs",
    accent:
      "bg-[#f0f7ff] text-[#1d68c8] border border-[#d4e5ff] px-2.5 py-1 text-xs font-medium",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {showDot && (
        <span className="relative flex h-2 w-2 shrink-0">
          {pulseDot && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2084ff] opacity-75"></span>
          )}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2084ff]"></span>
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
