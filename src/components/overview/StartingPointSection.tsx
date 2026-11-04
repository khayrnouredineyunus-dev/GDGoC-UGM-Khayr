import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";

export default function StartingPointSection() {
  return (
    <section id="starting-point" className="bg-g-yellow-soft scroll-mt-28">
      <Container className="flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:gap-16 lg:py-14">
        <div className="flex flex-col gap-4 lg:w-[460px] lg:shrink-0">
          <SectionLabel>Start where you are</SectionLabel>
          <h2 className="text-3xl leading-[1.12] font-bold md:text-4xl">
            New to tech?
            <br />
            That’s a starting point, too.
          </h2>
        </div>
        <div className="flex flex-1 flex-col items-start gap-5">
          <p className="text-muted text-lg leading-[1.55]">
            You don’t need a finished portfolio or the perfect track choice.
            Pick a topic you’re curious about. If you’re unsure, tell us what
            interests you and we can start a conversation.
          </p>
          <TextLink to="/contact">Ask about getting started</TextLink>
        </div>
      </Container>
    </section>
  );
}
