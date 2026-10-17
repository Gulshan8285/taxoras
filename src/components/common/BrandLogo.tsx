import React from "react";

interface BrandLogoProps {
  className?: string;
  variant?: "dark" | "light";
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "dark",
  showTagline = true,
}) => {
  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Emblem: Stylized T-Chevron FinTech Emblem */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="taxorasGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#2E1C12" />
            </linearGradient>
            <linearGradient id="taxorasGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5A962" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          {/* Rounded base badge */}
          <rect width="40" height="40" rx="11" fill="url(#taxorasGrad1)" />
          {/* Dynamic growth chevron */}
          <path
            d="M20 8.5L29 15V22.5L20 16L11 22.5V15L20 8.5Z"
            fill="url(#taxorasGrad2)"
            opacity="0.95"
          />
          {/* Bold geometric modern T */}
          <path
            d="M12 13.5H28V17.5H22.5V31H17.5V17.5H12V13.5Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline">
          <span
            className={`text-lg sm:text-xl font-extrabold tracking-tight leading-none ${
              isDark ? "text-navy" : "text-white"
            }`}
          >
            Tax
          </span>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight leading-none text-brand-blue">
            oras
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-teal ml-0.5 mb-0.5"></span>
        </div>
        {showTagline && (
          <span
            className={`text-[9px] font-bold tracking-widest uppercase leading-none mt-1 ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Advisory & Compliance
          </span>
        )}
      </div>
    </div>
  );
};
