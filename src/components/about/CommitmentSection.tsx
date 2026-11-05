import Container from "../ui/Container";
import spark from "../../assets/commitment-spark.svg";

export default function CommitmentSection() {
  return (
    <section className="bg-g-yellow-soft">
      <Container className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:gap-16 lg:py-14">
        <img src={spark} alt="" className="size-14 shrink-0 md:size-18" />
        <div className="flex flex-col gap-3.5">
          <h2 className="text-2xl leading-[1.12] font-bold md:text-[32px]">
            A space to learn. A responsibility to care.
          </h2>
          <p className="text-muted text-lg leading-[1.55]">
            We want every conversation and learning experience to be respectful,
            inclusive, and constructive. Be kind, give credit, and make room for
            people who are just getting started.
          </p>
        </div>
      </Container>
    </section>
  );
}
