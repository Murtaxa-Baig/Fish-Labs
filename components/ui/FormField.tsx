import React from "react";

export interface FormFieldProps {
  id: string;
  label: string;
  rightLabel?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  rightLabel,
  children,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1.5 text-left ${className}`}>
      <label
        htmlFor={id}
        className="text-xs font-semibold text-[#111827] flex items-center justify-between"
      >
        <span>{label}</span>
        {rightLabel && (
          <span className="text-[11px] text-[#575e70] font-normal">
            {rightLabel}
          </span>
        )}
      </label>
      <div className="relative">{children}</div>
    </div>
  );
};
