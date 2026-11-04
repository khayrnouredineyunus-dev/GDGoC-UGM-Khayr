interface LoadingStateProps {
  count?: number;
  className?: string;
}

// Kerangka abu-abu berkedip (skeleton) selama data sedang dimuat.
export default function LoadingState({
  count = 3,
  className = "h-40",
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="grid gap-6 md:grid-cols-3"
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
