import { useApi } from "../hooks/useApi";
import type { Track } from "../api/types";
import LoadingState from "../components/states/LoadingState";
import ErrorState from "../components/states/ErrorState";
import EmptyState from "../components/states/EmptyState";

export default function Home() {
  const { data: tracks, loading, error, retry } = useApi<Track[]>("/tracks");

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 lg:px-24">
      <h1 className="mb-8 text-4xl font-bold">Learning tracks</h1>

      {loading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={retry} />}
      {tracks && tracks.length === 0 && <EmptyState message="No tracks yet." />}
      {tracks && tracks.length > 0 && (
        <ul className="grid gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <li key={track.id} className="border-line rounded-2xl border p-6">
              <p className="font-medium" style={{ color: track.color }}>
                {track.icon} {track.name}
              </p>
              <p className="text-muted text-sm">{track.tagline}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
