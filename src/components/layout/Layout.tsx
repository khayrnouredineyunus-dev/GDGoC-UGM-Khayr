import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Kerangka yang sama untuk semua halaman: Navbar di atas, Footer di bawah,
// dan isi halaman (Outlet) berganti sesuai URL.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
