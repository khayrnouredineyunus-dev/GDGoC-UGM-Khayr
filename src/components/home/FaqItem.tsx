import { useId } from "react";
import chevron from "../../assets/chevron-down.svg";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

// Satu pertanyaan FAQ yang bisa dibuka-tutup (accordion).
export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  // id unik untuk menghubungkan tombol dengan jawabannya (aksesibilitas)
  const answerId = useId();

  return (
    <div className="border-line flex flex-col gap-3.5 border-b pb-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="flex w-full items-center gap-6 text-left"
      >
        <span className="text-ink flex-1 text-xl font-medium">{question}</span>
        <img
          src={chevron}
          alt=""
          className={`size-6 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <p id={answerId} className="text-muted leading-[1.55]">
          {answer}
        </p>
      )}
    </div>
  );
}
