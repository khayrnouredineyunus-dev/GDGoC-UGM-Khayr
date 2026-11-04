import OverviewHero from "../components/overview/OverviewHero";
import SectionNav from "../components/overview/SectionNav";
import TrackOverviewSection from "../components/overview/TrackOverviewSection";
import OutcomeTable from "../components/overview/OutcomeTable";
import FormatOverviewSection from "../components/overview/FormatOverviewSection";
import JourneySection from "../components/overview/JourneySection";
import StartingPointSection from "../components/overview/StartingPointSection";
import InvitationPanel from "../components/shared/InvitationPanel";

export default function Overview() {
  return (
    <>
      <title>Overview | GDGoC UGM</title>
      <OverviewHero />
      <SectionNav />
      <TrackOverviewSection />
      <OutcomeTable />
      <FormatOverviewSection />
      <JourneySection />
      <StartingPointSection />
      <InvitationPanel />
    </>
  );
}
