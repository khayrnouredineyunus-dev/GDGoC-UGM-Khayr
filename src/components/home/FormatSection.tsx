import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import studyIcon from "../../assets/format-study.svg";
import workshopIcon from "../../assets/format-workshop.svg";
import projectIcon from "../../assets/format-project.svg";

// Konten statis dari desain Figma halaman Landing.
// Data /api/formats dipakai di halaman Overview, yang desainnya memang sesuai dengan API.
const formats = [
  {
    icon: studyIcon,
    title: "Study together",
    description:
      "Work through foundations in peer learning sessions. Bring your questions; leave with a next step.",
    detail: "Study groups & guided practice",
  },
  {
    icon: workshopIcon,
    title: "Try it hands-on",
    description:
      "Explore a tool or technique in a workshop, then put it to work in a small experiment.",
    detail: "Workshops & technical sessions",
  },
  {
    icon: projectIcon,
    title: "Share the process",
    description:
      "Exchange feedback, explain your decisions, and learn from different ways of thinking.",
    detail: "Project circles & sharing sessions",
  },
];

export default function FormatSection() {
  return (
    <section className="bg-surface">
      <Container className="flex flex-col gap-10 py-16 lg:py-20">
        <div className="flex max-w-[800px] flex-col gap-4.5">
          <SectionLabel>More than a classroom</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            Less watching. More making.
          </h2>
          <p className="text-muted text-lg leading-[1.55]">
            Learn in a way that turns a new concept into something you can
            actually use.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {formats.map((format) => (
            <li
              key={format.title}
              className="flex flex-col gap-5 rounded-3xl bg-white p-8"
            >
              <img src={format.icon} alt="" className="size-6" />
              <h3 className="text-[28px] leading-[1.12] font-bold">
                {format.title}
              </h3>
              <p className="text-muted leading-[1.55]">{format.description}</p>
              <div className="bg-line mt-auto h-px" />
              <p className="text-primary text-[13px] font-medium">
                {format.detail}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
