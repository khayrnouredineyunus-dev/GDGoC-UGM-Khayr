import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// Membatasi lebar konten dan memberi jarak kiri-kanan yang sama di semua section.
export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-24 ${className}`}
    >
      {children}
    </div>
  );
}
