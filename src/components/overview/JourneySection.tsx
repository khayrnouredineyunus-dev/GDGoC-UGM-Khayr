import { useApi } from "../../hooks/useApi";
import type { JourneyStep } from "../../api/types";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import LoadingState from "../states/LoadingState";
import ErrorState from "../states/ErrorState";
import EmptyState from "../states/EmptyState";

export default function JourneySection() {
  const {
    data: steps,
    loading,
    error,
    retry,
  } = useApi<JourneyStep[]>("/journey");

  return (
    <section id="learning-journey" className="scroll-mt-28">
      <Container className="flex flex-col gap-10 py-16 lg:py-20">
        <div className="flex max-w-[812px] flex-col gap-4.5">
          <SectionLabel>Progress, not perfection</SectionLabel>
          <h2 className="text-4xl leading-[1.12] font-bold md:text-5xl">
            A journey you can keep building on.
          </h2>
        </div>

        {loading && (
          <LoadingState
            count={4}
            className="h-44"
            gridClassName="sm:grid-cols-2 lg:grid-cols-4"
          />
        )}
        {error && <ErrorState message={error} onRetry={retry} />}
        {steps && steps.length === 0 && (
          <EmptyState message="The learning journey will be shared soon." />
        )}
        {steps && steps.length > 0 && (
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.id} className="flex flex-col gap-5">
                <p className="text-primary text-[38px] font-bold">
                  {/* 1 menjadi "01", 2 menjadi "02", dan seterusnya */}
                  {String(step.step).padStart(2, "0")}
                </p>
                <div className="bg-line h-px" />
                <h3 className="text-[26px] leading-[1.12] font-bold">
                  {step.title}
                </h3>
                <p className="text-muted leading-[1.55]">{step.description}</p>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </section>
  );
}
