import Container from "../ui/Container";

const promises = [
  { label: "Learn by doing", color: "bg-g-blue" },
  { label: "Connect across disciplines", color: "bg-g-red" },
  { label: "Build with purpose", color: "bg-g-green" },
];

export default function PromiseStrip() {
  return (
    <section className="border-line border-y">
      <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:py-[26px]">
        {promises.map((promise) => (
          <p
            key={promise.label}
            className="flex items-center gap-3.5 text-lg font-medium"
          >
            <span
              aria-hidden="true"
              className={`size-2 shrink-0 ${promise.color}`}
            />
            {promise.label}
          </p>
        ))}
      </Container>
    </section>
  );
}
