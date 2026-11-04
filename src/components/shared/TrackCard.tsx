import type { Track } from "../../api/types";
import TextLink from "../ui/TextLink";
import researchArt from "../../assets/track-research.png";
import designArt from "../../assets/track-design.png";
import developmentArt from "../../assets/track-development.png";

// Ilustrasi untuk setiap track, dicocokkan lewat id dari API.
const artworks: Record<string, string> = {
  "research-discovery": researchArt,
  "design-creativity": designArt,
  development: developmentArt,
};

interface TrackCardProps {
  track: Track;
}

export default function TrackCard({ track }: TrackCardProps) {
  const artwork = artworks[track.id];

  return (
    <article className="border-line relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white">
      {artwork ? (
        <>
          {/* Gambar sedikit lebih tinggi dari areanya karena ada efek cahaya
              yang menyebar ke bawah, jadi dipasang absolut di atas kartu. */}
          <img
            src={artwork}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute inset-x-0 top-0 w-full"
          />
          <div className="aspect-[400/232]" />
        </>
      ) : (
        // Cadangan kalau API menambah track baru yang belum punya ilustrasi
        <div className="bg-surface flex aspect-[400/232] items-center justify-center text-6xl">
          {track.icon}
        </div>
      )}

      <div className="relative flex flex-1 flex-col gap-4.5 p-7">
        <p className="text-primary text-[11px] font-medium uppercase">
          {track.tagline}
        </p>
        <h3 className="text-[28px] leading-[1.12] font-bold">{track.name}</h3>
        <p className="text-muted leading-[1.55]">{track.description}</p>
        <div className="bg-line h-px" />
        <p className="text-muted text-[13px] leading-normal">
          {track.skills.join(" · ")}
        </p>
        <TextLink to={track.explore_link} className="mt-auto">
          Explore this track
        </TextLink>
      </div>
    </article>
  );
}
