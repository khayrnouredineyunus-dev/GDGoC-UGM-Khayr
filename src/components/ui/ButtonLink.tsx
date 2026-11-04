import type { ReactNode } from "react";
import { Link } from "react-router";
import arrowWhite from "../../assets/arrow-right-white.svg";
import arrowBlue from "../../assets/arrow-right-blue.svg";

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const variants = {
  primary: "bg-g-blue text-white hover:bg-primary",
  secondary: "border border-line bg-white text-primary hover:bg-surface",
};

// Tombol berbentuk link (pindah halaman) dengan ikon panah, sesuai desain Figma.
export default function ButtonLink({
  to,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={`inline-flex h-13 shrink-0 items-center gap-4 rounded-lg px-6 font-medium whitespace-nowrap transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      <img
        src={variant === "primary" ? arrowWhite : arrowBlue}
        alt=""
        className="size-5"
      />
    </Link>
  );
}
