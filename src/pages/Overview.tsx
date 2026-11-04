import OverviewHero from "../components/overview/OverviewHero";
import SectionNav from "../components/overview/SectionNav";
import TrackOverviewSection from "../components/overview/TrackOverviewSection";
import OutcomeTable from "../components/overview/OutcomeTable";

export default function Overview() {
  return (
    <>
      <title>Overview | GDGoC UGM</title>
      <OverviewHero />
      <SectionNav />
      <TrackOverviewSection />
      <OutcomeTable />
    </>
  );
}
