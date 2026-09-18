import React from "react";
import { Button } from "./Button";
import { Badge } from "./Badge";

export interface AppDownloadCardProps {
  platformIcon: React.ReactNode;
  rating: string;
  reviewCount: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
  href?: string;
}

export const AppDownloadCard: React.FC<AppDownloadCardProps> = ({
  platformIcon,
  rating,
  reviewCount,
  subtitle,
  title,
  description,
  buttonText,
  buttonIcon,
  href = "#",
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-[#e5e7eb] shadow-sm flex flex-col items-start justify-between text-left gap-6 hover:shadow-md hover:border-[#d1d5db] transition-all duration-300">
      <div className="flex items-start justify-between w-full">
        <div className="w-12 h-12 rounded-xl bg-[#f3f4f6] flex items-center justify-center text-[#111827]">
          {platformIcon}
        </div>
        <Badge
          variant="rating"
          icon={
            <svg
              className="w-3.5 h-3.5 text-[#f46117] fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          }
        >
          <span>{rating}</span>
          <span className="text-[#575e70] font-normal">({reviewCount})</span>
        </Badge>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#575e70]">
          {subtitle}
        </span>
        <h3 className="text-xl font-bold text-[#111827]">{title}</h3>
        <p className="text-sm text-[#575e70] leading-relaxed">
          {description}
        </p>
      </div>

      <Button
        variant="dark"
        size="lg"
        href={href}
        iconLeft={buttonIcon}
        className="w-full"
      >
        {buttonText}
      </Button>
    </div>
  );
};
