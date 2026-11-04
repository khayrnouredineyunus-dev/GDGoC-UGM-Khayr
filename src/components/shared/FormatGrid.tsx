import { useApi } from "../../hooks/useApi";
import type { LearningFormat } from "../../api/types";
import FormatCard from "./FormatCard";
import LoadingState from "../states/LoadingState";
import ErrorState from "../states/ErrorState";
import EmptyState from "../states/EmptyState";

// Mengambil semua format belajar dari API untuk halaman Overview.
export default function FormatGrid() {
  const { data, loading, error, retry } = useApi<LearningFormat[]>("/formats");

  if (loading) return <LoadingState count={4} className="h-48" />;
  if (error) return <ErrorState message={error} onRetry={retry} />;
  if (!data || data.length === 0)
    return <EmptyState message="No learning formats available yet." />;

  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {data.map((format) => (
        <li key={format.id}>
          <FormatCard format={format} />
        </li>
      ))}
    </ul>
  );
}
