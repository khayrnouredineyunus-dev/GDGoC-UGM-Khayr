import mark from "../../assets/gdgoc-mark.png";
import wordmark from "../../assets/gdgoc-wordmark.svg";

interface LogoProps {
  size?: "md" | "lg";
}

// Logo GDGoC UGM: ikon warna-warni + tulisan. Ukuran "lg" dipakai di footer.
export default function Logo({ size = "md" }: LogoProps) {
  const isLarge = size === "lg";

  return (
    <span className="inline-flex items-center gap-3">
      <img
        src={mark}
        alt=""
        className={isLarge ? "h-[42px] w-[76px]" : "h-[38px] w-[69px]"}
      />
      <img
        src={wordmark}
        alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
        className={`hidden sm:block ${isLarge ? "h-[43px] w-[293px]" : "h-[39px] w-[265px]"}`}
      />
    </span>
  );
}
