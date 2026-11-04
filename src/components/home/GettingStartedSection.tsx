import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

// Konten statis dari Figma (tidak tersedia di API).
const steps = [
  {
    number: "01",
    title: "Follow your curiosity",
    description:
      "Explore the tracks and find a topic you want to understand better.",
  },
  {
    number: "02",
    title: "Learn alongside others",
    description:
      "Join a learning opportunity, ask a question, and share your perspective.",
  },
  {
    number: "03",
    title: "Turn learning into action",
    description:
      "Practice through a project, exchange feedback, and pass something on.",
  },
];

export default function GettingStartedSection() {
  return (
    <section>
      <Container className="flex flex-col gap-10 pt-2 pb-16 lg:pb-22">
        <div className="flex max-w-[800px] flex-col gap-4.5">
          <SectionLabel>Make your first move</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            You don’t need to have it all figured out.
          </h2>
        </div>

        <ol className="grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-5">
              <p className="text-primary text-[44px] font-bold">
                {step.number}
              </p>
              <div className="bg-line h-px" />
              <h3 className="text-[25px] leading-[1.12] font-bold">
                {step.title}
              </h3>
              <p className="text-muted leading-[1.55]">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
