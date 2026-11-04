import type { MouseEvent } from "react";
import Container from "../ui/Container";
import { useActiveSection } from "../../hooks/useActiveSection";
import { overviewSections } from "./sections";

export default function SectionNav() {
  const activeId = useActiveSection(overviewSections.map((s) => s.id));

  // Menggulir halus ke section yang dipilih, bukan melompat tiba-tiba
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav aria-label="Overview sections" className="border-line border-y">
      <Container>
        <ul className="flex gap-8 overflow-x-auto py-6 lg:gap-12">
          {overviewSections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  onClick={(event) => handleClick(event, section.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-2.5 text-[15px] transition-colors ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {section.label}
                  <span aria-hidden="true">↓</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
