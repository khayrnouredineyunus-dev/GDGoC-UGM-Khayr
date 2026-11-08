import { Link } from "react-router";
import { useApi } from "../../hooks/useApi";
import type { NavItem, Stats } from "../../api/types";
import { FALLBACK_NAV } from "./navLinks";
import Logo from "./Logo";
import instagramIcon from "../../assets/instagram.svg";
import youtubeIcon from "../../assets/youtube.svg";

const YOUTUBE_URL = "https://www.youtube.com/@gdgocugm";;

export default function Footer() {
  const { data: nav } = useApi<NavItem[]>("/navigation");
  const { data: stats } = useApi<Stats>("/stats");

  const links = nav ?? FALLBACK_NAV;
  const instagram = stats?.social.instagram ?? "@gdgoc.ugm";
  const tagline = stats?.tagline ?? "Learn together. Build together.";
  const instagramUrl = `https://www.instagram.com/${instagram.replace("@", "")}`;

  return (
    <footer className="bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 pt-14 pb-7 md:px-8 lg:px-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div className="flex max-w-[480px] flex-col gap-6">
            <Logo size="lg" />
            <p className="text-muted leading-[1.55]">
              A student community for curious minds, shared learning, and
              technology with purpose.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <p className="font-bold text-black">Explore</p>
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted hover:text-primary text-[15px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 md:w-[260px]">
            <p className="font-bold text-black">Keep in the loop</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary text-lg hover:underline"
            >
              {instagram}
            </a>
            <div className="flex gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="" className="size-6 p-1" />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <img src={youtubeIcon} alt="" className="size-6 p-1" />
              </a>
            </div>
            <p className="text-muted text-sm leading-[1.55]">{tagline}</p>
          </div>
        </div>

        <div className="bg-line h-px" />

        <div className="text-muted flex flex-col gap-2 text-xs md:flex-row md:justify-between">
          <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
          <p>Made for the campus. Open to possibilities.</p>
        </div>

        <div className="flex h-1 w-40" aria-hidden="true">
          <span className="bg-g-blue flex-1" />
          <span className="bg-g-red flex-1" />
          <span className="bg-g-yellow flex-1" />
          <span className="bg-g-green flex-1" />
        </div>
      </div>
    </footer>
  );
}
