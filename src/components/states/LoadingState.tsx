interface LoadingStateProps {
  count?: number;
  // Ukuran setiap kotak skeleton, misalnya "h-40"
  className?: string;
  // Susunan kolom, disesuaikan dengan isi aslinya
  gridClassName?: string;
}

// Kerangka abu-abu berkedip (skeleton) selama data sedang dimuat.
export default function LoadingState({
  count = 3,
  className = "h-40",
  gridClassName = "md:grid-cols-3",
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`grid gap-6 ${gridClassName}`}
    >
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={`bg-surface animate-pulse rounded-2xl ${className}`}
        />
      ))}
    </div>
  );
}
