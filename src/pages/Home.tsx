import HeroSection from "../components/home/HeroSection";
import PromiseStrip from "../components/home/PromiseStrip";
import IntroSection from "../components/home/IntroSection";
import TrackSection from "../components/home/TrackSection";
import FormatSection from "../components/home/FormatSection";
import ProjectSection from "../components/home/ProjectSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PromiseStrip />
      <IntroSection />
      <TrackSection />
      <FormatSection />
      <ProjectSection />
    </>
  );
}
