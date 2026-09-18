import React from "react";

export interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  title,
  value,
  href,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm flex flex-col items-start gap-2 transition-all duration-200 hover:border-[#d1d5db] hover:shadow-md">
      <div className="w-8 h-8 rounded-lg bg-[#f3f4f6] flex items-center justify-center text-[#111827] mb-1">
        {icon}
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#575e70]">
        {title}
      </span>
      {href ? (
        <a
          href={href}
          className="text-sm font-semibold text-[#111827] hover:text-[#f46117] transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-sm font-semibold text-[#111827]">{value}</span>
      )}
    </div>
  );
};
