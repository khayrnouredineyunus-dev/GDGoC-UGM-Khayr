import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import FormatGrid from "../shared/FormatGrid";

export default function FormatSection() {
  return (
    <section className="bg-surface">
      <Container className="flex flex-col gap-10 py-16 lg:py-20">
        <div className="flex max-w-[800px] flex-col gap-4.5">
          <SectionLabel>More than a classroom</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            Less watching. More making.
          </h2>
          <p className="text-muted text-lg leading-[1.55]">
            Learn in a way that turns a new concept into something you can
            actually use.
          </p>
        </div>

        <FormatGrid variant="stacked" limit={3} />
      </Container>
    </section>
  );
}
