import React from "react";

export interface DataCategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badgeText?: string;
  variant?: "standard" | "permission" | "user-right";
}

export const DataCategoryCard: React.FC<DataCategoryCardProps> = ({
  icon,
  title,
  description,
  badgeText,
  variant = "standard",
}) => {
  if (variant === "user-right") {
    return (
      <div className="bg-white rounded-xl p-5 border border-[#e5e7eb] shadow-sm flex items-start gap-4 transition-all duration-200 hover:border-[#d1d5db] hover:shadow-md">
        <div className="p-2.5 rounded-lg bg-[#f3f4f6] text-[#111827] shrink-0">
          {icon}
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold text-[#111827]">{title}</h4>
          <p className="text-xs text-[#575e70] leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-5 border border-[#e5e7eb] shadow-sm flex flex-col gap-2 transition-all duration-200 hover:border-[#d1d5db] hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-[#f46117]">{icon}</div>
        {badgeText && (
          <span className="text-[11px] font-medium text-[#575e70] bg-[#f3f4f6] px-2 py-0.5 rounded">
            {badgeText}
          </span>
        )}
      </div>
      <h3 className="text-base font-bold text-[#111827] mt-1">{title}</h3>
      <p className="text-xs text-[#575e70] leading-relaxed">{description}</p>
    </div>
  );
};
