import type { LearningFormat } from "../../api/types";
import { slugToLabel } from "../../utils/format";
import studyIcon from "../../assets/format-study.svg";
import workshopIcon from "../../assets/format-workshop.svg";
import projectIcon from "../../assets/format-project.svg";
import sharingIcon from "../../assets/format-sharing.svg";

// Ikon dan warna latar untuk setiap format, dicocokkan lewat id dari API.
const formatStyles: Record<string, { icon: string; background: string }> = {
  "study-groups": { icon: studyIcon, background: "bg-primary-soft" },
  "hands-on-workshops": { icon: workshopIcon, background: "bg-g-green-soft" },
  "project-circles": { icon: projectIcon, background: "bg-g-yellow-soft" },
  "knowledge-sharing": { icon: sharingIcon, background: "bg-g-red-soft" },
};

interface FormatCardProps {
  format: LearningFormat;
}

// Kartu format belajar untuk halaman Overview: ikon di kiri dalam kotak berwarna.
export default function FormatCard({ format }: FormatCardProps) {
  const style = formatStyles[format.id];

  return (
    <article className="flex h-full gap-6 rounded-3xl bg-white p-7">
      <div
        className={`flex size-13 shrink-0 items-center justify-center rounded-[14px] ${style?.background ?? "bg-surface"}`}
      >
        {style ? (
          <img src={style.icon} alt="" className="size-6" />
        ) : (
          <span aria-hidden="true" className="text-xl">
            {format.icon}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3.5">
        <h3 className="text-[27px] leading-[1.12] font-bold">{format.name}</h3>
        <p className="text-muted leading-[1.55]">{format.description}</p>
        <p className="text-primary text-[13px] font-medium">
          {slugToLabel(format.cta)}
        </p>
      </div>
    </article>
  );
}
