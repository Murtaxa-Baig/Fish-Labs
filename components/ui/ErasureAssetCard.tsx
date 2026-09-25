import React from "react";

export interface ErasureAssetCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ErasureAssetCard: React.FC<ErasureAssetCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#f8f9fa] border border-[#e5e7eb]">
      <div className="w-6 h-6 rounded-full bg-[#e6f0ff] text-[#2084ff] flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-[#111827]">{title}</span>
        <span className="text-xs text-[#575e70]">{description}</span>
      </div>
    </div>
  );
};
