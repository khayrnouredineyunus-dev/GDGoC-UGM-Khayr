import { useApi } from "../../hooks/useApi";
import type { LearningFormat } from "../../api/types";
import FormatCard from "./FormatCard";
import LoadingState from "../states/LoadingState";
import ErrorState from "../states/ErrorState";
import EmptyState from "../states/EmptyState";

interface FormatGridProps {
  variant?: "stacked" | "row";
  // Batasi jumlah kartu yang tampil. Landing menampilkan 3, Overview semuanya.
  limit?: number;
}

export default function FormatGrid({
  variant = "stacked",
  limit,
}: FormatGridProps) {
  const { data, loading, error, retry } = useApi<LearningFormat[]>("/formats");

  if (loading) return <LoadingState count={limit ?? 4} className="h-64" />;
  if (error) return <ErrorState message={error} onRetry={retry} />;
  if (!data || data.length === 0)
    return <EmptyState message="No learning formats available yet." />;

  const formats = limit ? data.slice(0, limit) : data;
  const columns =
    variant === "row" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <ul className={`grid gap-6 ${columns}`}>
      {formats.map((format) => (
        <li key={format.id}>
          <FormatCard format={format} variant={variant} />
        </li>
      ))}
    </ul>
  );
}
