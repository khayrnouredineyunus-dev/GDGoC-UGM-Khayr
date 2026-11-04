import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";

const tiles = [
  { label: "Discover", color: "bg-primary-soft" },
  { label: "Connect", color: "bg-g-green-soft" },
  { label: "Share", color: "bg-g-red-soft" },
];

export default function ProjectSection() {
  return (
    <section>
      <Container className="flex flex-col items-center gap-12 py-16 lg:flex-row lg:gap-16 lg:py-22">
        {/* Kartu contoh proyek, dibuat dengan HTML supaya teksnya tetap tajam */}
        <div
          aria-hidden="true"
          className="bg-g-yellow-soft flex w-full flex-col gap-6 rounded-[32px] p-6 md:p-10 lg:w-[592px] lg:shrink-0"
        >
          <div className="flex items-center justify-between">
            <p className="text-muted text-xs">IDEA → PROTOTYPE</p>
            <p className="text-primary text-2xl">{"</>"}</p>
          </div>

          <div className="border-line flex flex-col gap-6 rounded-2xl border bg-white p-6.5">
            <div className="flex gap-1.5">
              <span className="bg-g-red size-2 rounded-full" />
              <span className="bg-g-yellow size-2 rounded-full" />
              <span className="bg-g-green size-2 rounded-full" />
            </div>
            <p className="text-2xl leading-[1.12] font-bold md:text-[32px]">
              A little less friction.
              <br />A better campus day.
            </p>
            <div className="flex gap-3">
              {tiles.map((tile) => (
                <span
                  key={tile.label}
                  className={`flex-1 rounded-xl p-4 text-[13px] font-bold text-black ${tile.color}`}
                >
                  {tile.label}
                </span>
              ))}
            </div>
            <p className="text-muted text-[13px] leading-[1.55]">
              Start with a student need. Build a small, useful solution.
            </p>
          </div>

          <p className="text-muted text-[11px]">
            EXAMPLE PROJECT BRIEF • NOT A LAUNCHED PRODUCT
          </p>
        </div>

        <div className="flex flex-1 flex-col items-start gap-6">
          <SectionLabel>Build something that matters</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            Your next project could start on campus.
          </h2>
          <p className="text-muted text-lg leading-[1.55]">
            What if finding a study partner, sharing resources, or navigating
            campus felt easier? Small, familiar problems can be the beginning of
            meaningful work.
          </p>
          <p className="text-muted leading-[1.55]">
            Bring research, design, and development together. Try an idea, get
            feedback, and make the next version better.
          </p>
          <TextLink to="/overview">Explore project-based learning</TextLink>
        </div>
      </Container>
    </section>
  );
}
