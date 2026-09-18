import React from "react";

export interface FeatureCardProps {
  icon: React.ReactNode;
  stepNumber: string;
  title: string;
  description: string;
  tagText: string;
  tagIcon: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  stepNumber,
  title,
  description,
  tagText,
  tagIcon,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] shadow-sm flex flex-col justify-between gap-6 hover:shadow-md hover:border-[#d1d5db] transition-all duration-300 group">
      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#f3f4f6] flex items-center justify-center text-[#f46117] group-hover:bg-[#ffdbce] transition-colors duration-300">
          {icon}
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-[#111827] tracking-tight">
              {title}
            </h3>
            <span className="text-xs font-mono text-[#575e70]">
              {stepNumber}
            </span>
          </div>
          <p className="text-sm text-[#575e70] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="bg-[#f8f9fa] rounded-lg p-2.5 flex items-center justify-between text-xs text-[#575e70] border border-[#f3f4f6]">
        <span>{tagText}</span>
        <span className="text-[#f46117] shrink-0">{tagIcon}</span>
      </div>
    </div>
  );
};
