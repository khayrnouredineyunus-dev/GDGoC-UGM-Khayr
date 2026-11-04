import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import overviewArtwork from "../../assets/overview-artwork.png";

export default function OverviewHero() {
  return (
    <section className="overflow-x-clip">
      <Container className="flex flex-col gap-10 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div className="flex max-w-[920px] flex-col gap-6">
          <SectionLabel>Overview • Programs &amp; learning tracks</SectionLabel>
          <h1 className="text-5xl leading-[1.08] font-bold md:text-6xl xl:text-[72px]">
            Find your spark.
            <br />
            <span className="text-primary">Build your own path.</span>
          </h1>
          <p className="text-muted text-lg leading-[1.55] md:text-[21px]">
            Explore how research, creativity, and development connect. Start
            with one interest. Grow through practice and the people around you.
          </p>
        </div>

        <img
          src={overviewArtwork}
          alt=""
          className="hidden h-[280px] w-[264px] shrink-0 object-contain lg:block"
        />
      </Container>
    </section>
  );
}
