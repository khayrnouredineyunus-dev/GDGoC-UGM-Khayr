import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

// Label kecil berhuruf kapital dengan titik biru di depannya,
// dipakai di atas judul hampir setiap section.
export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`text-muted flex items-center gap-2.5 text-xs font-medium uppercase ${className}`}
    >
      <span
        aria-hidden="true"
        className="bg-g-blue size-[7px] shrink-0 rounded-full"
      />
      {children}
    </p>
  );
}
