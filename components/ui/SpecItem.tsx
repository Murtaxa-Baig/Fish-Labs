import React from "react";

export interface SpecItemProps {
  icon: React.ReactNode;
  text: string;
  variant?: "badge" | "checklist";
}

export const SpecItem: React.FC<SpecItemProps> = ({
  icon,
  text,
  variant = "badge",
}) => {
  if (variant === "checklist") {
    return (
      <div className="flex items-center gap-2.5 text-sm text-[#111827]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f46117] shrink-0" />
        <span>{text}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 text-xs text-[#575e70]">
      <span className="text-[#f46117] shrink-0">{icon}</span>
      <span>{text}</span>
    </div>
  );
};
