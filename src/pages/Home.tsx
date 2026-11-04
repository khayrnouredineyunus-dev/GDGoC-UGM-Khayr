import { useApi } from "../hooks/useApi";
import type { Track } from "../api/types";

export default function Home() {
  const { data: tracks, loading, error, retry } = useApi<Track[]>("/tracks");

  if (loading) return <p className="text-muted p-10">Loading tracks...</p>;

  if (error)
    return (
      <div className="p-10">
        <p className="text-g-red">Error: {error}</p>
        <button
          onClick={retry}
          className="border-line mt-3 rounded-lg border px-4 py-2"
        >
          Try again
        </button>
      </div>
    );

  if (!tracks || tracks.length === 0)
    return <p className="text-muted p-10">No tracks yet.</p>;

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Learning tracks</h1>
      <ul className="mt-6 space-y-3">
        {tracks.map((track) => (
          <li key={track.id} className="border-line rounded-lg border p-4">
            <p className="font-medium" style={{ color: track.color }}>
              {track.icon} {track.name}
            </p>
            <p className="text-muted text-sm">{track.tagline}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
