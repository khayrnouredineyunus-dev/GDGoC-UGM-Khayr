import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import FormatGrid from "../shared/FormatGrid";

export default function FormatOverviewSection() {
  return (
    <section id="learning-formats" className="bg-surface scroll-mt-28">
      <Container className="flex flex-col gap-9 py-16 lg:py-20">
        <div className="flex max-w-[800px] flex-col gap-4.5">
          <SectionLabel>Ways to learn</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            The format changes. The curiosity stays.
          </h2>
          <p className="text-muted text-lg leading-[1.55]">
            Explore the kinds of experiences that help you move from
            understanding to doing.
          </p>
        </div>

        <FormatGrid />
      </Container>
    </section>
  );
}
