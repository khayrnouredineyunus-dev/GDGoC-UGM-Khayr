import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ErrorBoundary from "../states/ErrorBoundary";

// Kerangka yang sama untuk semua halaman: Navbar di atas, Footer di bawah,
// dan isi halaman (Outlet) berganti sesuai URL.
export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        {/* key membuat Error Boundary diatur ulang setiap pindah halaman,
            jadi error di satu halaman tidak terbawa ke halaman lain */}
        <ErrorBoundary key={pathname}>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
