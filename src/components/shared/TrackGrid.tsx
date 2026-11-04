import { useApi } from "../../hooks/useApi";
import type { Track } from "../../api/types";
import TrackCard from "./TrackCard";
import LoadingState from "../states/LoadingState";
import ErrorState from "../states/ErrorState";
import EmptyState from "../states/EmptyState";

// Mengambil daftar track dari API lalu menampilkannya sebagai kartu.
// Dipakai di halaman Landing dan Overview.
export default function TrackGrid() {
  const { data: tracks, loading, error, retry } = useApi<Track[]>("/tracks");

  if (loading) return <LoadingState count={3} className="h-[500px]" />;
  if (error) return <ErrorState message={error} onRetry={retry} />;
  if (!tracks || tracks.length === 0)
    return <EmptyState message="No learning tracks are open right now." />;

  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tracks.map((track) => (
        <li key={track.id}>
          <TrackCard track={track} />
        </li>
      ))}
    </ul>
  );
}
