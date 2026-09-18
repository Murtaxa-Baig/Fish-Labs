import React from "react";
import { ShieldCheck, Wallet, Gavel, Mail } from "lucide-react";
import { Button } from "./Button";

export interface LegalCalloutProps {
  variant?: "notice" | "highlight" | "prohibition" | "inquiry";
  title?: string;
  description?: string;
  email?: string;
  children?: React.ReactNode;
}

export const LegalCallout: React.FC<LegalCalloutProps> = ({
  variant = "notice",
  title,
  description,
  email,
  children,
}) => {
  if (variant === "notice") {
    return (
      <div className="p-6 rounded-xl bg-white border border-[#e5e7eb] shadow-sm flex flex-col sm:flex-row items-start gap-4">
        <div className="p-2.5 rounded-lg bg-[#ffdbce] text-[#f46117] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold text-[#111827]">{title}</h2>
          <p className="text-sm text-[#575e70] leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  if (variant === "highlight") {
    return (
      <div className="p-6 rounded-xl bg-[#f8f9fa] border border-[#e5e7eb] shadow-sm flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f46117]" />
        <div className="flex items-center gap-2 text-[#111827]">
          <Wallet className="w-5 h-5 text-[#f46117]" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        {children}
        <div className="p-3 rounded-lg bg-white border border-[#e5e7eb] flex items-center justify-between text-xs text-[#575e70]">
          <span className="flex items-center gap-1.5">
            <span>Direct in-app store management overrides third-party ticketing requests.</span>
          </span>
          <span className="text-[#f46117] uppercase font-semibold text-[11px] tracking-wider">
            No Hidden Fees
          </span>
        </div>
      </div>
    );
  }

  if (variant === "prohibition") {
    return (
      <div className="p-5 rounded-xl bg-[#fef2f2] border border-[#fee2e2] text-[#111827] flex items-start gap-3">
        <Gavel className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5" />
        <div className="text-xs space-y-2">
          <p className="font-semibold text-[#dc2626] text-sm">{title}</p>
          {children}
        </div>
      </div>
    );
  }

  if (variant === "inquiry") {
    return (
      <section className="p-8 rounded-xl bg-white border border-[#e5e7eb] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1 max-w-xl">
          <span className="text-xs font-semibold text-[#f46117] uppercase tracking-wider">
            Direct Communication
          </span>
          <h3 className="text-xl font-bold text-[#111827]">{title}</h3>
          <p className="text-sm text-[#575e70] leading-relaxed">{description}</p>
        </div>
        <Button
          variant="primary"
          size="md"
          href={`mailto:${email}`}
          iconLeft={<Mail className="w-4 h-4" />}
        >
          {email}
        </Button>
      </section>
    );
  }

  return null;
};
