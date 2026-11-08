import { useApi } from "../../hooks/useApi";
import type { Faq, InquiryCategory } from "../../api/types";
import { removeEmDash } from "../../utils/format";
import ErrorState from "../states/ErrorState";
import chevron from "../../assets/chevron-down.svg";

interface CategoryFaqsProps {
  category: InquiryCategory | null;
}

// Fitur tambahan (tidak ada di Figma): jawaban singkat dari /api/faqs yang
// disaring sesuai kategori yang dipilih. Field "category" di setiap FAQ cocok
// dengan "id" di /api/inquiry-categories, jadi keduanya bisa dihubungkan.
// Diletakkan tepat di bawah kartu kategori, supaya pengguna langsung melihat
// jawabannya berubah saat memilih kartu lain.
export default function CategoryFaqs({ category }: CategoryFaqsProps) {
  const { data: faqs, loading, error, retry } = useApi<Faq[]>("/faqs");

  // Penyaringan dilakukan di browser: semua FAQ diambil sekali,
  // lalu dipilih yang kategorinya sama dengan kategori aktif.
  const filtered = faqs?.filter((faq) => faq.category === category?.id) ?? [];

  if (!category) return null;
  if (loading) {
    return (
      <div
        role="status"
        aria-label="Loading quick answers"
        className="bg-surface h-40 animate-pulse rounded-2xl"
      />
    );
  }
  if (error) return <ErrorState message={error} onRetry={retry} />;

  return (
    <div className="border-line flex flex-col rounded-2xl border p-5">
      <div className="flex items-baseline justify-between gap-3 pb-3">
        <h3 className="text-[17px] font-medium">Quick answers</h3>
        <span className="text-muted text-[13px]">
          {filtered.length === 1
            ? "1 question"
            : `${filtered.length} questions`}
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className="border-line text-muted border-t pt-3 text-sm leading-[1.55]">
          No quick answers for this topic yet. Ask us directly with the form.
        </p>
      ) : (
        <ul>
          {filtered.map((faq) => (
            <li key={faq.id} className="border-line border-t">
              {/* <details> adalah accordion bawaan HTML: bisa dibuka-tutup
                  tanpa state React, dan sudah bisa dipakai dengan keyboard */}
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-3 py-3 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">{faq.question}</span>
                  <img
                    src={chevron}
                    alt=""
                    className="size-5 shrink-0 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="text-muted pb-4 text-sm leading-[1.55]">
                  {removeEmDash(faq.answer)}
                </p>
              </details>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
