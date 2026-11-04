import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import ButtonLink from "../ui/ButtonLink";
import heroArtwork from "../../assets/hero-artwork.png";

const communityDots = ["bg-g-red", "bg-g-yellow", "bg-g-green", "bg-g-blue"];

export default function HeroSection() {
  return (
    <section>
      <Container className="grid items-center gap-12 py-12 lg:grid-cols-2 lg:gap-10 lg:py-18">
        <div className="flex flex-col items-start gap-7">
          <SectionLabel>GDGoC UGM • 2026/2027</SectionLabel>

          <h1 className="text-5xl leading-[1.05] font-bold md:text-6xl xl:text-[80px]">
            Big ideas.
            <br />
            <span className="text-primary">Built together.</span>
          </h1>

          <p className="text-muted max-w-[620px] text-lg leading-[1.55] md:text-[21px]">
            A place for curious minds at{" "}
            <strong className="font-bold">Universitas Gadjah Mada</strong> to
            learn, connect, and build technology that matters.
          </p>

          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/overview">Find your learning track</ButtonLink>
            <ButtonLink to="/about" variant="secondary">
              Get to know us
            </ButtonLink>
          </div>

          <div className="text-muted flex items-center gap-2.5 text-sm">
            <span className="flex" aria-hidden="true">
              {communityDots.map((color, index) => (
                <span
                  key={color}
                  className={`size-4 rounded-full ring-2 ring-white ${color} ${index > 0 ? "-ml-[3px]" : ""}`}
                />
              ))}
            </span>
            Different backgrounds. A shared curiosity.
          </div>
        </div>

        <img
          src={heroArtwork}
          alt="Glass illustration of a research magnifier and a code window coming together, with a sticker that reads hello, possibilities"
          className="mx-auto w-full max-w-[620px] lg:max-w-none"
        />
      </Container>
    </section>
  );
}
