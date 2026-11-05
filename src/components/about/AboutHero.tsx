import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import aboutArtwork from "../../assets/about-artwork.png";

export default function AboutHero() {
  return (
    <section>
      <Container className="flex flex-col gap-12 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-20">
        <div className="flex max-w-[720px] flex-col gap-6.5">
          <SectionLabel>About GDGoC UGM</SectionLabel>
          <h1 className="text-5xl leading-[1.08] font-bold md:text-6xl xl:text-[72px]">
            Built by students.
            <br />
            <span className="text-primary">For what’s next.</span>
          </h1>
          <p className="text-muted text-lg leading-[1.55] md:text-[22px]">
            We’re a community of learners and makers at Universitas Gadjah Mada,
            connected by curiosity and the belief that technology can do good.
          </p>
          <p className="text-muted text-[13px]">
            UNIVERSITAS GADJAH MADA • 2026/2027
          </p>
        </div>

        {/* Artwork diekspor utuh dari Figma (kotak kaca + kartu logo), ukuran asli 464×400 */}
        <img
          src={aboutArtwork}
          alt=""
          width={464}
          height={400}
          className="mx-auto w-full max-w-[464px] shrink-0 lg:mx-0"
        />
      </Container>
    </section>
  );
}
