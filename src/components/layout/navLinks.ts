import type { NavItem } from "../../api/types";

// Dipakai sementara saat data navigasi dari API belum datang atau gagal dimuat,
// supaya pengguna tetap bisa berpindah halaman.
export const FALLBACK_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Overview", href: "/overview" },
  { label: "Contact", href: "/contact" },
];
