import type { CommunityValue } from "../../api/types";
import curiousIcon from "../../assets/value-curious.svg";
import roomIcon from "../../assets/value-room.svg";
import buildingIcon from "../../assets/value-building.svg";
import givingIcon from "../../assets/value-giving.svg";

// Ikon dan warna aksen dari desain Figma, dicocokkan lewat id dari API.
// Warna aksen memakai token desain, karena warna dari API sedikit berbeda
// (misalnya kuning #FBBC05 di API, sedangkan Figma memakai #F9AB00).
const valueStyles: Record<string, { icon: string; accent: string }> = {
  "stay-curious": { icon: curiousIcon, accent: "bg-g-blue" },
  "make-room": { icon: roomIcon, accent: "bg-g-red" },
  "learn-by-building": { icon: buildingIcon, accent: "bg-g-yellow" },
  "give-something-back": { icon: givingIcon, accent: "bg-g-green" },
};

interface ValueCardProps {
  value: CommunityValue;
}

export default function ValueCard({ value }: ValueCardProps) {
  const style = valueStyles[value.id];

  return (
    <article className="border-line flex h-full flex-col gap-5.5 rounded-3xl border p-6.5">
      {/* Kalau ada nilai baru dari API, aksen memakai warna dari API */}
      <span
        aria-hidden="true"
        className={`h-1 w-9 rounded-xs ${style?.accent ?? ""}`}
        style={style ? undefined : { backgroundColor: value.color }}
      />
      {style ? (
        <img src={style.icon} alt="" className="size-6" />
      ) : (
        <span aria-hidden="true" className="text-xl leading-6">
          {value.icon}
        </span>
      )}
      <h3 className="text-2xl leading-[1.12] font-bold">{value.title}</h3>
      <p className="text-muted leading-[1.55]">{value.description}</p>
    </article>
  );
}
