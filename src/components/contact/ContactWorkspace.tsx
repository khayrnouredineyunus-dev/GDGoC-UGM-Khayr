import { useSearchParams } from "react-router";
import { useApi } from "../../hooks/useApi";
import type { InquiryCategory } from "../../api/types";
import Container from "../ui/Container";
import CategoryList from "./CategoryList";
import CommunityUpdates from "./CommunityUpdates";
import ContactForm from "./ContactForm";

export default function ContactWorkspace() {
  // Satu request dipakai bersama oleh kartu kategori dan dropdown form
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
  const selectedId =
    categories?.find((item) => item.id === fromUrl)?.id ??
    categories?.[0]?.id ??
    "";

  function selectCategory(id: string) {
    setSearchParams(
      { category: id },
      { replace: true, preventScrollReset: true },
    );
  }

  return (
    <section>
      <Container className="flex flex-col gap-12 pb-16 lg:flex-row lg:items-start lg:gap-16 lg:pb-20">
        <div className="flex flex-col gap-8 lg:w-[456px] lg:shrink-0">
          <CategoryList
            categories={categories}
            loading={loading}
            error={error}
            onRetry={retry}
            selectedId={selectedId}
            onSelect={selectCategory}
          />
          <CommunityUpdates />
        </div>

        <div className="flex-1">
          <ContactForm
            categories={categories}
            loading={loading}
            category={selectedId}
            onCategoryChange={selectCategory}
          />
        </div>
      </Container>
    </section>
  );
}
