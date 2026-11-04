import { useEffect } from "react";
import { Link } from "react-router";
import { useApi } from "../../hooks/useApi";
import type { Track } from "../../api/types";
import TrackCard from "./TrackCard";
import LoadingState from "../states/LoadingState";
import ErrorState from "../states/ErrorState";
import EmptyState from "../states/EmptyState";

interface TrackGridProps {
  // id track yang disorot, diambil dari URL ?track=... di halaman Overview
  highlightId?: string | null;
}

// Mengambil daftar track dari API lalu menampilkannya sebagai kartu.
// Dipakai di halaman Landing dan Overview.
export default function TrackGrid({ highlightId = null }: TrackGridProps) {
  const { data: tracks, loading, error, retry } = useApi<Track[]>("/tracks");
  const highlighted = tracks?.find((track) => track.id === highlightId);

  // Setelah data datang, gulir ke kartu yang dipilih supaya langsung terlihat
  useEffect(() => {
    if (!highlighted) return;
    document
      .getElementById(`track-${highlighted.id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [highlighted]);

  if (loading) return <LoadingState count={3} className="h-[500px]" />;
  if (error) return <ErrorState message={error} onRetry={retry} />;
  if (!tracks || tracks.length === 0)
    return <EmptyState message="No learning tracks are open right now." />;

  return (
    <div className="flex flex-col gap-4">
      {highlighted && (
        <p className="text-muted text-sm">
          Showing <strong className="text-ink">{highlighted.name}</strong>.{" "}
          <Link
            to="/overview"
            className="text-primary font-medium hover:underline"
          >
            Show all tracks
          </Link>
        </p>
      )}
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <li key={track.id} id={`track-${track.id}`} className="scroll-mt-28">
            <TrackCard track={track} highlighted={track.id === highlightId} />
          </li>
        ))}
      </ul>
    </div>
  );
}
