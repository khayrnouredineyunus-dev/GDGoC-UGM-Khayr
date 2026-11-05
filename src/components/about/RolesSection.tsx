import { useApi } from "../../hooks/useApi";
import type { Role } from "../../api/types";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import TextLink from "../ui/TextLink";
import LoadingState from "../states/LoadingState";
import ErrorState from "../states/ErrorState";
import EmptyState from "../states/EmptyState";

export default function RolesSection() {
  const { data: roles, loading, error, retry } = useApi<Role[]>("/roles");

  return (
    <section>
      {/* Tanpa padding atas, karena section Values di atasnya sudah memberi jarak */}
      <Container className="flex flex-col gap-10 pb-16 lg:flex-row lg:gap-24 lg:pb-22">
        <div className="flex flex-col gap-5.5 lg:w-[400px] lg:shrink-0">
          <SectionLabel>People, not labels</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            There’s more than one way to contribute.
          </h2>
          <p className="text-muted text-lg leading-[1.55]">
            You can be learning one day and helping someone else the next. A
            community grows through both.
          </p>
        </div>

        <div className="flex flex-1 flex-col items-start gap-7">
          {loading && (
            <LoadingState
              count={3}
              className="h-24"
              gridClassName="w-full grid-cols-1"
            />
          )}
          {error && <ErrorState message={error} onRetry={retry} />}
          {roles && roles.length === 0 && (
            <EmptyState message="Ways to get involved will be shared soon." />
          )}
          {roles && roles.length > 0 && (
            <ul className="flex w-full flex-col gap-7">
              {roles.map((role) => (
                <li
                  key={role.id}
                  className="border-line flex flex-col gap-3.5 border-b pb-3.5"
                >
                  <h3 className="text-2xl leading-[1.12] font-bold md:text-[28px]">
                    {role.title}
                  </h3>
                  <p className="text-muted text-[17px] leading-[1.55]">
                    {role.description}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <TextLink to="/contact">Let’s talk about getting involved</TextLink>
        </div>
      </Container>
    </section>
  );
}
