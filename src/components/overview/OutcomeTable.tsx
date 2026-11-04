import Container from "../ui/Container";

// Konten statis dari Figma: isi kolom "practice" dan "outcome" tidak tersedia di API.
const outcomes = [
  {
    pathway: "Research & discovery",
    practice: "Listening, problem framing, and testing assumptions",
    outcome: "A research insight and a focused problem brief",
  },
  {
    pathway: "Design & creativity",
    practice: "Ideation, user flows, and prototype feedback",
    outcome: "An interactive prototype and a design story",
  },
  {
    pathway: "Development",
    practice: "Coding, testing, and connecting tools",
    outcome: "A working demo with a clear explanation",
  },
];

export default function OutcomeTable() {
  return (
    <section>
      <Container className="flex flex-col gap-8 pb-16 lg:pb-20">
        <h2 className="text-3xl leading-[1.12] font-bold md:text-[32px]">
          From an interest to something you can show.
        </h2>

        {/* Di layar kecil, tabel bisa digeser ke samping */}
        <div className="border-line overflow-x-auto rounded-[20px] border">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-surface text-muted text-xs font-medium">
              <tr>
                <th scope="col" className="w-[250px] px-7 py-5 font-medium">
                  Pathway
                </th>
                <th scope="col" className="px-7 py-5 font-medium">
                  What you can practice
                </th>
                <th scope="col" className="px-7 py-5 font-medium">
                  A possible outcome
                </th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((row) => (
                <tr
                  key={row.pathway}
                  className="border-line border-t align-top"
                >
                  <th
                    scope="row"
                    className="text-ink px-7 py-7 text-lg font-medium"
                  >
                    {row.pathway}
                  </th>
                  <td className="text-muted px-7 py-7 leading-[1.55]">
                    {row.practice}
                  </td>
                  <td className="text-muted px-7 py-7 leading-[1.55]">
                    {row.outcome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-muted text-sm">
          Illustrative learning outcomes. Topics and opportunities are shared
          through community updates.
        </p>
      </Container>
    </section>
  );
}
