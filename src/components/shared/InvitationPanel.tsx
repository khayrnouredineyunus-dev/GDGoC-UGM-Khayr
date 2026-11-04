import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import ButtonLink from "../ui/ButtonLink";
import TextLink from "../ui/TextLink";

// Panel ajakan di bagian bawah halaman Landing, About, dan Overview.
export default function InvitationPanel() {
  return (
    <section>
      <Container className="py-12 lg:py-16">
        <div className="bg-primary-soft flex flex-col gap-10 rounded-[32px] p-6 md:p-12 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex flex-1 flex-col gap-4">
            <SectionLabel>Your next chapter</SectionLabel>
            <h2 className="text-3xl leading-[1.12] font-bold md:text-[44px]">
              Bring your curiosity.
              <br />
              We’ll build from there.
            </h2>
            <p className="text-muted text-lg leading-[1.55]">
              Find a learning track, meet a collaborator, or start a
              conversation.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:w-[260px] lg:shrink-0">
            <ButtonLink to="/overview">Explore the overview</ButtonLink>
            <TextLink to="/contact">Talk to the community</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
