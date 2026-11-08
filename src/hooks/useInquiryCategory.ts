import { useSearchParams } from "react-router";
import { useApi } from "./useApi";
import type { InquiryCategory } from "../api/types";

// Data kategori Contact + kategori yang sedang dipilih.
// Dipakai sekali di halaman Contact, lalu hasilnya dibagikan lewat props
// ke kartu kategori, dropdown form, dan FAQ, supaya request hanya terjadi sekali.
export function useInquiryCategory() {
  const {
    data: categories,
    loading,
    error,
    retry,
  } = useApi<InquiryCategory[]>("/inquiry-categories");
  const [searchParams, setSearchParams] = useSearchParams();

  // Kategori terpilih disimpan di URL (?category=...), jadi tetap sama
  // setelah refresh dan bisa dibagikan. Kalau kosong atau tidak dikenal,
  // dipakai kategori pertama, seperti di desain Figma.
  const fromUrl = searchParams.get("category");
  const selected =
    categories?.find((item) => item.id === fromUrl) ?? categories?.[0] ?? null;

  function selectCategory(id: string) {
    setSearchParams(
      { category: id },
      { replace: true, preventScrollReset: true },
    );
  }

  return { categories, loading, error, retry, selected, selectCategory };
}
