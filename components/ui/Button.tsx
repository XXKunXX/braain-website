import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white shadow-lg shadow-black/20",
  secondary:
    "bg-[#e6fd5a] hover:opacity-90 text-[#0a0a0a] shadow-lg",
  outline:
    "border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50",
  ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
