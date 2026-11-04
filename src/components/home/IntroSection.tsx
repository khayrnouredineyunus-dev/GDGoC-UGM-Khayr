import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";

const attributes = ["Student-led", "Peer-powered", "Curiosity-first"];

export default function IntroSection() {
  return (
    <section>
      <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:gap-24 lg:py-22">
        <div className="flex flex-col items-start gap-5 lg:w-[490px] lg:shrink-0">
          <SectionLabel>A campus. A community.</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            Not just learning tech.
            <br />
            Finding your people.
          </h2>
          <TextLink to="/about">More about GDGoC UGM</TextLink>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <p className="text-muted text-lg leading-[1.55] md:text-[21px]">
            Google Developer Groups on Campus, Universitas Gadjah Mada brings
            students together around one simple idea: we can go{" "}
            <strong className="font-bold">further</strong> when we{" "}
            <strong className="font-bold">learn</strong> with each other.
          </p>
          <p className="text-muted text-lg leading-[1.55]">
            From your first line of code to your next product idea, there's room
            to ask questions, share what you know, and try something new.
          </p>
          <ul className="flex flex-wrap gap-3">
            {attributes.map((attribute) => (
              <li
                key={attribute}
                className="bg-surface text-muted rounded-full px-3.5 py-2 text-[13px] font-bold"
              >
                {attribute}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
