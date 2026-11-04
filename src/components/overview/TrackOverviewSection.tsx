import { useSearchParams } from "react-router";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import TrackGrid from "../shared/TrackGrid";

export default function TrackOverviewSection() {
  // Membaca ?track=... dari URL, misalnya dari link "Explore this track"
  const [searchParams] = useSearchParams();
  const selectedTrack = searchParams.get("track");

  return (
    <section id="learning-tracks" className="scroll-mt-28">
      <Container className="flex flex-col gap-9 py-16 lg:py-20">
        <div className="flex max-w-[800px] flex-col gap-4.5">
          <SectionLabel>Explore your interests</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            Three ways in. Plenty of ways forward.
          </h2>
          <p className="text-muted text-lg leading-[1.55]">
            These pathways are starting points, not boxes. Follow one deeply or
            bring different skills together.
          </p>
        </div>

        <TrackGrid highlightId={selectedTrack} />
      </Container>
    </section>
  );
}
