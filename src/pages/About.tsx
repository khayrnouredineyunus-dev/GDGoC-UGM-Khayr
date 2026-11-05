import AboutHero from "../components/about/AboutHero";
import PurposeSection from "../components/about/PurposeSection";
import ValuesSection from "../components/about/ValuesSection";
import RolesSection from "../components/about/RolesSection";
import CommitmentSection from "../components/about/CommitmentSection";
import InvitationPanel from "../components/shared/InvitationPanel";

export default function About() {
  return (
    <>
      <title>About | GDGoC UGM</title>
      <AboutHero />
      <PurposeSection />
      <ValuesSection />
      <RolesSection />
      <CommitmentSection />
      <InvitationPanel />
    </>
  );
}
