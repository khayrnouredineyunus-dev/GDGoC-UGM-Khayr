import HeroSection from "../components/home/HeroSection";
import PromiseStrip from "../components/home/PromiseStrip";
import IntroSection from "../components/home/IntroSection";
import TrackSection from "../components/home/TrackSection";
import FormatSection from "../components/home/FormatSection";
import ProjectSection from "../components/home/ProjectSection";
import GettingStartedSection from "../components/home/GettingStartedSection";
import BelongingSection from "../components/home/BelongingSection";
import FaqSection from "../components/home/FaqSection";
import InvitationPanel from "../components/shared/InvitationPanel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PromiseStrip />
      <IntroSection />
      <TrackSection />
      <FormatSection />
      <ProjectSection />
      <GettingStartedSection />
      <BelongingSection />
      <FaqSection />
      <InvitationPanel />
    </>
  );
}
