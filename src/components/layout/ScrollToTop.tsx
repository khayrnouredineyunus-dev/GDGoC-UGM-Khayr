import { useEffect } from "react";
import { useLocation } from "react-router";

// React Router tidak otomatis menggulir ke atas saat pindah halaman.
// Komponen ini mengembalikan posisi gulir ke paling atas setiap kali URL berubah.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
