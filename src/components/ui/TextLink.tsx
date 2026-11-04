import type { ReactNode } from "react";
import { Link } from "react-router";
import arrowBlue from "../../assets/arrow-right-blue.svg";

interface TextLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

// Link teks biru dengan panah, misalnya "Explore this track" atau "See the overview".
export default function TextLink({
  to,
  children,
  className = "",
}: TextLinkProps) {
  return (
    <Link
      to={to}
      className={`group text-primary inline-flex items-center gap-3 font-medium ${className}`}
    >
      <span className="group-hover:underline">{children}</span>
      <img
        src={arrowBlue}
        alt=""
        className="size-5 transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}
