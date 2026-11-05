import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

export default function ContactIntro() {
  return (
    <section>
      <Container className="flex flex-col gap-6 pt-12 pb-10 lg:pt-18 lg:pb-14">
        <SectionLabel>Contact • Let’s connect</SectionLabel>
        <h1 className="text-5xl leading-[1.08] font-bold md:text-6xl xl:text-[72px]">
          Good things start with <span className="text-primary">hello.</span>
        </h1>
        <p className="text-muted max-w-[770px] text-lg leading-[1.55] md:text-[22px]">
          A question, a collaboration, or an idea for the community? Tell us
          what’s on your mind.
        </p>
      </Container>
    </section>
  );
}
