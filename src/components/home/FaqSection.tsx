import { useState } from "react";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";
import FaqItem from "./FaqItem";

// Konten statis dari desain Figma halaman Landing.
const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.",
  },
  {
    question: "Is this only for computer science students?",
    answer:
      "Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.",
  },
  {
    question: "How can I find learning opportunities?",
    answer:
      "Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.",
  },
];

export default function FaqSection() {
  // Index pertanyaan yang sedang terbuka. null berarti semua tertutup.
  // Pertanyaan pertama terbuka secara bawaan.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
