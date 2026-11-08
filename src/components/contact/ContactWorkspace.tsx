import type { InquiryCategory } from "../../api/types";
import Container from "../ui/Container";
import CategoryList from "./CategoryList";
import CategoryFaqs from "./CategoryFaqs";
import CommunityUpdates from "./CommunityUpdates";
import ContactForm from "./ContactForm";

interface ContactWorkspaceProps {
  categories: InquiryCategory[] | null;
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function ContactWorkspace({
  categories,
  loading,
  error,
  onRetry,
  selectedId,
  onSelect,
}: ContactWorkspaceProps) {
  const selected = categories?.find((item) => item.id === selectedId) ?? null;

  return (
    <section>
      <Container className="flex flex-col gap-12 pb-16 lg:flex-row lg:items-start lg:gap-16 lg:pb-20">
        <div className="flex flex-col gap-8 lg:w-[456px] lg:shrink-0">
          <CategoryList
            categories={categories}
            loading={loading}
            error={error}
            onRetry={onRetry}
            selectedId={selectedId}
            onSelect={onSelect}
          />
          <CategoryFaqs category={selected} />
          <CommunityUpdates />
        </div>

        <div className="flex-1">
          <ContactForm
            categories={categories}
            loading={loading}
            category={selectedId}
            onCategoryChange={onSelect}
          />
        </div>
      </Container>
    </section>
  );
}
