import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import type { Faq } from "../../api/types";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";
import FaqItem from "./FaqItem";
import ErrorState from "../states/ErrorState";
import EmptyState from "../states/EmptyState";

export default function FaqSection() {
  const { data: faqs, loading, error, retry } = useApi<Faq[]>("/faqs");
  // Id pertanyaan yang sedang terbuka:
  // - undefined: pengguna belum memilih, jadi pertanyaan pertama terbuka
  // - null: pengguna menutup semua pertanyaan
  const [openId, setOpenId] = useState<string | null | undefined>(undefined);
  const activeId = openId === undefined ? (faqs?.[0]?.id ?? null) : openId;

  const toggle = (id: string) => {
    setOpenId(activeId === id ? null : id);
  };

  return (
    <section>
      <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:gap-24 lg:py-22">
        <div className="flex flex-col items-start gap-5 lg:w-[400px] lg:shrink-0">
          <SectionLabel>A few good questions</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            Wondering where
            <br />
            to begin?
          </h2>
          <TextLink to="/contact">Ask us a question</TextLink>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          {loading &&
            Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className="bg-surface h-16 animate-pulse rounded-xl"
              />
            ))}
          {error && <ErrorState message={error} onRetry={retry} />}
          {faqs && faqs.length === 0 && (
            <EmptyState message="No questions yet. Ask us anything!" />
          )}
          {faqs?.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={activeId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
