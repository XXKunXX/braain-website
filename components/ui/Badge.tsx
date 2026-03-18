import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "orange" | "slate" | "green" | "blue";
}

const variants = {
  orange: "bg-orange-50 text-orange-700 border-orange-200",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
  green: "bg-green-50 text-green-700 border-green-200",
  blue: "bg-blue-50 text-blue-700 border-blue-200",
};

export default function Badge({ children, variant = "orange" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
