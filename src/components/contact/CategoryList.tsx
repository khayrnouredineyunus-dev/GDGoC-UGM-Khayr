import type { InquiryCategory } from "../../api/types";
import LoadingState from "../states/LoadingState";
import ErrorState from "../states/ErrorState";
import EmptyState from "../states/EmptyState";

interface CategoryListProps {
  categories: InquiryCategory[] | null;
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  selectedId: string;
  onSelect: (id: string) => void;
}

// Daftar kategori pertanyaan dari API. Kartu yang diklik langsung
// mengisi pilihan "Inquiry category" di form.
export default function CategoryList({
  categories,
  loading,
  error,
  onRetry,
  selectedId,
  onSelect,
}: CategoryListProps) {
  return (
    <div className="flex flex-col gap-4.5">
      <h2 className="text-[28px] leading-[1.12] font-bold">
        What brings you here?
      </h2>
      <p className="text-muted leading-[1.55]">
        Pick the closest topic in the form. We’ll take it from there.
      </p>

      {loading && (
        <LoadingState count={4} className="h-22" gridClassName="grid-cols-1" />
      )}
      {error && <ErrorState message={error} onRetry={onRetry} />}
      {categories && categories.length === 0 && (
        <EmptyState message="Inquiry topics will be available soon." />
      )}
      {categories && categories.length > 0 && (
        <ul className="flex flex-col gap-4.5">
          {categories.map((category) => {
            const isSelected = category.id === selectedId;
            return (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => onSelect(category.id)}
                  aria-pressed={isSelected}
                  className={`flex w-full items-start gap-4.5 rounded-2xl border p-5 text-left transition-colors ${
                    isSelected
                      ? "bg-primary-soft border-transparent"
                      : "border-line hover:bg-surface"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="text-primary w-6 shrink-0 text-center text-[25px] leading-none font-medium"
                  >
                    {category.icon}
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="text-[17px] font-medium">
                      {category.label}
                    </span>
                    <span className="text-muted text-sm leading-[1.55]">
                      {category.description}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
