import React from "react";

export interface MetricCardProps {
  label: string;
  value: string;
  description: string;
  highlightValue?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  description,
  highlightValue = false,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] shadow-sm flex flex-col gap-1.5 transition-all duration-200 hover:border-[#d1d5db]">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#575e70]">
        {label}
      </span>
      <span
        className={`text-4xl font-bold tracking-tight ${
          highlightValue ? "text-[#2084ff]" : "text-[#111827]"
        }`}
      >
        {value}
      </span>
      <p className="text-xs text-[#575e70] leading-relaxed mt-1">
        {description}
      </p>
    </div>
  );
};
