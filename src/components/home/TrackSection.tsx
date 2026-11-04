import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";
import TrackGrid from "../shared/TrackGrid";

export default function TrackSection() {
  return (
    <section>
      <Container className="flex flex-col gap-9 pt-4 pb-16 lg:pb-22">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[800px] flex-col gap-4.5">
            <SectionLabel>Find your starting point</SectionLabel>
            <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
              Many interests. One shared journey.
            </h2>
            <p className="text-muted text-lg leading-[1.55]">
              Follow what excites you. Explore a track, then connect the dots
              with others.
            </p>
          </div>
          <TextLink to="/overview" className="shrink-0">
            See the overview
          </TextLink>
        </div>

        <TrackGrid />
      </Container>
    </section>
  );
}
