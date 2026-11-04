import Container from "../ui/Container";
import spark from "../../assets/community-spark.svg";

export default function BelongingSection() {
  return (
    <section className="bg-g-green-soft">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:gap-16 lg:py-16">
        <img src={spark} alt="" className="size-16 shrink-0 md:size-25" />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl leading-[1.12] font-bold md:text-[40px]">
            Different majors. Different starting points.
            <br />A place for all of them.
          </h2>
          <p className="text-muted text-lg leading-[1.55]">
            You don’t have to be the most experienced person in the room.
            Curiosity, kindness, and a willingness to learn are a good place to
            start.
          </p>
        </div>
      </Container>
    </section>
  );
}
