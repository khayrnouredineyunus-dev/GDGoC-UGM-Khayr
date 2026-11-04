import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useApi } from "../../hooks/useApi";
import type { NavItem } from "../../api/types";
import { FALLBACK_NAV } from "./navLinks";
import Logo from "./Logo";
import ButtonLink from "../ui/ButtonLink";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-5 py-3.5 transition-colors ${
    isActive
      ? "bg-primary-soft font-bold text-primary"
      : "text-muted hover:bg-surface hover:text-ink"
  }`;

export default function Navbar() {
  const { data } = useApi<NavItem[]>("/navigation");
  const links = data ?? FALLBACK_NAV;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-line sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 md:px-8 lg:h-26 lg:px-16">
        <Link
          to="/"
          aria-label="GDGoC UGM home"
          className="shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <Logo />
        </Link>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ButtonLink to="/overview" className="hidden lg:inline-flex">
          Find your track
        </ButtonLink>

        {/* Tombol hamburger untuk layar kecil */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="text-ink hover:bg-surface rounded-lg p-2 lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="border-line border-t bg-white px-4 pt-2 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={(state) => `block ${linkClass(state)}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ButtonLink to="/overview" className="mt-4 w-full justify-center">
            Find your track
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
