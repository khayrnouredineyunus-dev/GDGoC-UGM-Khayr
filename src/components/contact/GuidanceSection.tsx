import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";

// Isi statis dari Figma. Field "guidance" di API tidak dipakai karena
// pasangannya tidak cocok dengan desain (lihat README).
const tips = [
  {
    title: "For learning questions",
    text: "Tell us which topic interests you and where you are in your learning journey.",
  },
  {
    title: "For collaborations",
    text: "Share the idea, who it’s for, and how you imagine working with the community.",
  },
  {
    title: "Not sure which category fits?",
    text: "Choose General inquiry. A clear question is always a good starting point.",
  },
];

export default function GuidanceSection() {
  return (
    <section className="border-line border-t">
      <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:gap-20 lg:py-18">
        <div className="flex flex-col items-start gap-5 lg:w-[420px] lg:shrink-0">
          <SectionLabel>A little guidance</SectionLabel>
          <h2 className="text-3xl leading-[1.12] font-bold md:text-[40px]">
            Help us understand
            <br />
            your idea.
          </h2>
          <TextLink to="/overview">Explore the programs first</TextLink>
        </div>

        <ul className="flex flex-1 flex-col gap-6.5">
          {tips.map((tip) => (
            <li
              key={tip.title}
              className="border-line flex flex-col gap-2.5 border-b pb-2.5"
            >
              <h3 className="text-[21px] leading-[1.12] font-bold">
                {tip.title}
              </h3>
              <p className="text-muted leading-[1.55]">{tip.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
