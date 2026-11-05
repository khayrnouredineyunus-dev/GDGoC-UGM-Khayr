import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

export default function PurposeSection() {
  return (
    <section className="bg-surface">
      <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:gap-24 lg:py-20">
        <div className="flex flex-col gap-5 lg:w-[400px] lg:shrink-0">
          <SectionLabel>Why we come together</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            A bridge from
            <br />
            <span className="text-primary">“I wonder”</span> to
            <br />
            {/* Teks bergradasi: warna diisi gradient lalu dipotong sesuai bentuk huruf */}
            <span className="from-primary inline-block bg-linear-to-b from-[58.654%] to-[#6facff] bg-clip-text text-transparent">
              “I made this.”
            </span>
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-6 leading-[1.55]">
          <p className="text-xl md:text-2xl">
            Learning feels different when there’s someone to exchange ideas
            with, a problem you care about, and the space to give it a try.
          </p>
          <p className="text-muted text-lg">
            That’s the spirit of Google Developer Groups on Campus at UGM. We
            create room for students to explore technology, develop practical
            skills, and learn from one another.
          </p>
          <p className="text-muted text-lg">
            Our campus is the starting point. The questions we ask and the
            things we build can reach beyond it.
          </p>
        </div>
      </Container>
    </section>
  );
}
