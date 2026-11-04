import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import ButtonLink from "../ui/ButtonLink";
import heroArtwork from "../../assets/hero-artwork.png";

const communityDots = ["bg-g-red", "bg-g-yellow", "bg-g-green", "bg-g-blue"];

export default function HeroSection() {
  return (
    // Perubahan 1: overflow-x-clip supaya cahaya ilustrasi yang meluber ke kiri
    // tidak membuat halaman bisa digeser ke samping di HP
    <section className="overflow-x-clip">
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

        {/* Perubahan 2: kotak seukuran kartu ilustrasi (620 × 530 di Figma).
            Gambar hasil export lebih besar karena ada efek cahaya di kiri dan bawah,
            jadi gambar ditempatkan absolut agar kartunya pas mengisi kotak ini. */}
        <div className="relative mx-auto aspect-[620/530] w-full max-w-[620px]">
          <img
            src={heroArtwork}
            alt="Glass illustration of a research magnifier and a code window coming together, with a sticker that reads hello, possibilities"
            className="absolute top-0 right-0 w-[117.75%] max-w-none"
          />
        </div>
      </Container>
    </section>
  );
}
