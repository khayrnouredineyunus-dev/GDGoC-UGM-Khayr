import { useApi } from "../../hooks/useApi";
import type { CommunityValue } from "../../api/types";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import LoadingState from "../states/LoadingState";
import ErrorState from "../states/ErrorState";
import EmptyState from "../states/EmptyState";
import ValueCard from "./ValueCard";

export default function ValuesSection() {
  const {
    data: values,
    loading,
    error,
    retry,
  } = useApi<CommunityValue[]>("/values");

  return (
    <section>
      <Container className="flex flex-col gap-10 py-16 lg:py-22">
        <div className="flex max-w-[800px] flex-col gap-4.5">
          <SectionLabel>What guides us</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            Good technology starts with good company.
          </h2>
        </div>

        {loading && (
          <LoadingState
            count={4}
            className="h-62"
            gridClassName="sm:grid-cols-2 lg:grid-cols-4"
          />
        )}
        {error && <ErrorState message={error} onRetry={retry} />}
        {values && values.length === 0 && (
          <EmptyState message="Our community values will be shared soon." />
        )}
        {values && values.length > 0 && (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <li key={value.id}>
                <ValueCard value={value} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
